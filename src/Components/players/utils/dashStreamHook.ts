import * as dashjs from "dashjs";
import { useDocumentVisibility } from "@ffilip/mui-react-utils";
import { useCallback, useEffect, useRef, useState } from "react";



export function useDashStream(url: string, isActive: boolean) {
  const isVisible = useDocumentVisibility();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isCameraOffline, setIsCameraOffline] = useState(false);
  const playerRef = useRef<dashjs.MediaPlayerClass | null>(null);


  const startStream = () => {
    if (!videoRef.current) {
      return;
    }

    if (playerRef.current) {
      stopStream();
    }

    const player = dashjs.MediaPlayer().create();

    player.updateSettings({
      streaming: {
        liveUpdateTimeThresholdInMilliseconds: 15000,
        manifestUpdateRetryInterval: 3000,
        text: {
          defaultEnabled: false,
          dispatchForManualRendering: false
        },
        abr: {
          autoSwitchBitrate: {
            video: true,
            audio: true
          }
        },
        buffer: {
          flushBufferAtTrackSwitch: true,
          reuseExistingSourceBuffers: false
        }
      }
    });


    player.on(dashjs.MediaPlayer.events.ERROR, (e) => {
      console.log("dash error", e);
    });

    player.initialize(
      videoRef.current,
      url,
      true
    );

    playerRef.current = player;
  };


  const stopStream = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.reset();
      playerRef.current = null;
    }

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.removeAttribute("src");
      videoRef.current.load();  // flushes the buffer
    }
  }, []);


  useEffect(() => {
    if (isVisible && isActive) {  // Start stream when URL changes
      setIsCameraOffline(false);
      startStream();
    }

    // Destroy HLS on losing tab focus/active state
    return () => {
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