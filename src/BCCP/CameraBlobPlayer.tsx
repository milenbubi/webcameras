import Hls from "hls.js";
import { Box } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import Centered from "../Utils/Centered";

interface IProps {
  url: string;
  isActive: boolean;
  m3u8File?: string;
}



function CameraBlobPlayer({ url, isActive, m3u8File = "index.m3u8" }: IProps) {
  const hlsRef = useRef<Hls | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fullUrl = useMemo(() => url + "/" + m3u8File, [url, m3u8File]);
  const [isCameraOffline, setIsCameraOffline] = useState(false);


  const startStream = () => {
    if (videoRef.current) {
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
          hlsRef.current?.destroy();
          setIsCameraOffline(true);
        }
      });
    }
  };


  const stopStream = () => {
    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }
  };


  useEffect(() => {  // Handle load errors on mobile
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


  useEffect(() => {  // Destroy HLS on losing tab focus
    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        stopStream();
        alert("📴 HLS destroyed on tab blur");
      }
      else if (document.visibilityState === "visible") {
        startStream();
        setTimeout(() => {
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);


  useEffect(() => {
    setIsCameraOffline(false);

    if (!videoRef.current || !isActive) {
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

    // Ако не може, ползваме hls.js (Chrome, Firefox и др.)
    if (Hls.isSupported()) {
      startStream()
    }

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