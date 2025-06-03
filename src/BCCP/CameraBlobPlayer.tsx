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
  const fullUrl = useMemo(() => url + "/" + m3u8File, [url]);
  const [isCameraOffline, setIsCameraOffline] = useState(false);



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
      const hls = new Hls({
        maxBufferLength: 30,
        liveSyncDurationCount: 4
      });

      hlsRef.current = hls;

      hls.attachMedia(videoRef.current);
      hls.loadSource(fullUrl);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => { });
        }
      });

      hls.on(Hls.Events.ERROR, function (event, data) {
        if (data.fatal) {  // Спираме и не правим повторни опити
          // console.warn('📛 Fatal HLS error:', data);
          hls.destroy();
          setIsCameraOffline(true);
        }
      });
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
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