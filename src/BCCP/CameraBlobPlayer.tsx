import Hls from "hls.js";
import { Box } from "@mui/material";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Centered from "../Utils/Centered";
import { isSafari } from "../Utils/navigator";
import { useDidUpdateEffect } from "../Utils/reactHooks";
import { useDocumentVisibility } from "../Utils/documentVisibility";

interface IProps {
  url: string;
  isActive: boolean;
  m3u8File?: string;
}



function CameraBlobPlayer({ url, isActive, m3u8File = "index.m3u8" }: IProps) {
  const hlsRef = useRef<Hls | null>(null);
  const isVisible = useDocumentVisibility();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isCameraOffline, setIsCameraOffline] = useState(false);
  const fullUrl = useMemo(() => url + "/" + m3u8File, [url, m3u8File]);


  const startStream = useCallback(() => {
    if (!isActive || !videoRef.current) {
      return;
    }

    // Ако браузърът може да пусне .m3u8 нативно (Safari)
    if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = fullUrl;
      videoRef.current.load();
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => { });
      return;
    }

    else if (Hls.isSupported()) {
      hlsRef.current = new Hls({
        maxBufferLength: 30,
        liveSyncDurationCount: 4
      });

      hlsRef.current.attachMedia(videoRef.current);
      hlsRef.current.loadSource(fullUrl);

      hlsRef.current.on(Hls.Events.MANIFEST_PARSED, () => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => { });
        }
      });

      hlsRef.current.on(Hls.Events.ERROR, function (event, data) {
        if (data.fatal) {  // Спираме и не правим повторни опити
          setIsCameraOffline(true);
          stopStream();
        }
      });
    }
  }, [isActive, fullUrl]);


  const stopStream = useCallback(() => {
    if (isSafari && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.removeAttribute("src");
      videoRef.current.load();  // flush-ва буфера
    }

    if (hlsRef.current) {  // HLS стрийминг 
      hlsRef.current.off(Hls.Events.MANIFEST_PARSED);
      hlsRef.current.off(Hls.Events.ERROR);
      hlsRef.current.destroy();
      hlsRef.current = null;
    }
  }, []);


  useEffect(() => {  // Handle error on mobile
    const videoEl = videoRef.current;

    if (!videoEl) {
      return;
    }

    const onVideoError = () => {
      setIsCameraOffline(!!videoEl.error);
    };

    videoEl.addEventListener("error", onVideoError);

    return () => {
      videoEl.removeEventListener("error", onVideoError);
    };
  }, []);


  useDidUpdateEffect(() => {  // Destroy HLS on losing tab focus, otherwise start it
    isVisible ? startStream() : stopStream();
  }, [isVisible]);


  useEffect(() => {  // Start stream on interaction
    setIsCameraOffline(false);

    if (!videoRef.current || !isActive) {
      return;
    }

    startStream();

    return stopStream;
  }, [fullUrl, isActive]);


  if (!isActive) {
    return (
      <Box
        sx={{ border: "2px solid #ffffff", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
      />
    );
  }


  return (
    <>
      <video
        ref={videoRef}
        controls
        autoPlay
        style={{
          width: "100%", maxHeight: "100%",
          aspectRatio: "16/9",
          backgroundColor: "#000000",
          display: isCameraOffline ? "none" : "initial"
        }}
      />

      {isCameraOffline && (
        <Centered
          sx={{
            width: "100%", maxHeight: "100%", aspectRatio: "16/9",
            color: "#ffffff",
            fontSize: { xs: 17, sm: 19 },
            fontWeight: 600,
            padding: "2rem",
            backgroundColor: "#000"
          }}>

          Камерата е временно недостъпна
        </Centered>
      )}
    </>
  );
}



export default CameraBlobPlayer;