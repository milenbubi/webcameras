import Hls from "hls.js";
import { Box } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import Centered from "../Utils/Centered";
import { isSafari } from "../Utils/navigator";
import { useDidUpdateEffect } from "../Utils/reactHooks";
import { useDocumentVisibility } from "../Utils/documentVisibility";

interface IProps {
  url: string;
  isActive: boolean;
}



function CameraBlobPlayer({ url, isActive }: IProps) {
  const hlsRef = useRef<Hls | null>(null);
  const isVisible = useDocumentVisibility();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isCameraOffline, setIsCameraOffline] = useState(false);


  const startStream = useCallback(() => {

    if (!isActive || !videoRef.current) {
      return;
    }


    if (isSafari  /* videoRef.current.canPlayType("application/vnd.apple.mpegurl") */) {
      videoRef.current.src = url;
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
      hlsRef.current.loadSource(url);

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
    else {
      console.warn("HLS not supported in this browser");
      stopStream();
      setIsCameraOffline(true);
    }
  }, [isActive, url]);


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
  }, [url, isActive]);


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
        controlsList="nofullscreen"
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