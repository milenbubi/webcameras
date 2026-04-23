import Hls from "hls.js";
import { isIOS } from "@ffilip/chan180-utils";
import { useDocumentVisibility } from "@ffilip/mui-react-utils";
import { useCallback, useEffect, useRef, useState } from "react";



export function useHlsStream(url: string, isActive: boolean) {
  const streamId = useRef(0);  // generation counter for latest-stream-wins race-condition protection
  const hlsRef = useRef<Hls | null>(null);
  const isVisible = useDocumentVisibility();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isCameraOffline, setIsCameraOffline] = useState(false);


  const startStream = () => {
    const currentStream = ++streamId.current;

    if (!videoRef.current) {
      return;
    }

    stopStream();

    if (isIOS && videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src = url;
      videoRef.current.load();
      videoRef.current.play().catch(onStreamError);
    }
    else if (Hls.isSupported()) {
      hlsRef.current = new Hls({
        maxBufferLength: 30,
        liveSyncDurationCount: 4
      });

      hlsRef.current.attachMedia(videoRef.current);
      hlsRef.current.loadSource(url);

      hlsRef.current.on(Hls.Events.MANIFEST_PARSED, () => {
        if (currentStream === streamId.current && videoRef.current) {
          videoRef.current.play().catch(() => { });
        }
      });

      hlsRef.current.on(Hls.Events.ERROR, function (event, data) {
        if (currentStream === streamId.current && data.fatal) {  // Stop and do not retry
          onStreamError();
        }
      });
    }
    else {
      console.warn("HLS not supported in this browser");
      onStreamError();
    }
  };


  const stopStream = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.removeAttribute("src");
      videoRef.current.load();  // Flushes the buffer
    }

    if (hlsRef.current) {  // HLS streaming 
      hlsRef.current.destroy();
      hlsRef.current = null;
    }
  }, []);


  useEffect(() => {
    if (isVisible && isActive) {  // Start stream when URL changes
      setIsCameraOffline(false);
      startStream();
    }

    // Destroy HLS on losing tab focus/active state
    return () => {
      streamId.current++;
      setIsCameraOffline(false);
      stopStream();
    }
  }, [url, isActive, isVisible]);


  const onStreamError = useCallback(() => {
    setIsCameraOffline(true);
    stopStream();
  }, [stopStream]);


  const setVideoRef = useCallback((node: HTMLVideoElement | null) => {
    const prev = videoRef.current;

    if (prev) {
      prev.removeEventListener("error", onStreamError);
    }

    if (node) {
      node.addEventListener("error", onStreamError);
    }

    videoRef.current = node;
  }, [onStreamError]);


  return { setVideoRef, isCameraOffline };
}