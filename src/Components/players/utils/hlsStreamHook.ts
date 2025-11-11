import Hls from "hls.js";
import { isSafari } from "@ffilip/chan180-utils/env";
import { useDidUpdateEffect } from "@ffilip/mui-react-utils/react";
import { useDocumentVisibility } from "@ffilip/mui-react-utils/document";
import { RefObject, useCallback, useEffect, useRef, useState } from "react";



export function useHlsStream(videoRef: RefObject<HTMLVideoElement>, url: string, isActive: boolean) {
  const hlsRef = useRef<Hls | null>(null);
  const isVisible = useDocumentVisibility();
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
        if (data.fatal) {  // Stop and do not retry
          setIsCameraOffline(true);
          stopStream();
        }
      });
    }
    else {
      console.warn("HLS not supported in this browser");
      setIsCameraOffline(true);
      stopStream();
    }
  }, [isActive, url]);


  const stopStream = useCallback(() => {
    if (isSafari && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.removeAttribute("src");
      videoRef.current.load();  // Flushes the buffer
    }

    if (hlsRef.current) {  // HLS streaming 
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
  }, [videoRef]);


  useDidUpdateEffect(() => {  // Destroy HLS on losing tab focus, otherwise start it    
    isVisible ? startStream() : stopStream();
  }, [isVisible]);


  useEffect(() => {  // Restart stream when URL or active state changes
    setIsCameraOffline(false);
    startStream();
    return stopStream;
  }, [url, isActive]);


  return { isCameraOffline };
}