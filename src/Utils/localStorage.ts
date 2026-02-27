import { useCallback, useState } from "react";
import { safeLocalStorage } from "@ffilip/chan180-utils";

type StreamStatus = "on" | "off";
type BooleanStatus = "true" | "false";

function isValidStreamStatus(value: string | null): value is StreamStatus {
  return value === "on" || value === "off";
}

function isValidBooleanStatus(value: string | null): value is BooleanStatus {
  return value === "true" || value === "false";
}


export const LS_BROWSER_VISITS_KEY = "browservisits";
export const LS_APP_STREAMING_KEY = "streaming";
export const LS_PLACE_KEY = "place";



export function useMasterStreamStatus() {
  const [isStreaming, setIsStreaming] = useState(() => {
    const status = safeLocalStorage.get(LS_APP_STREAMING_KEY);
    const validStatus: StreamStatus = isValidStreamStatus(status) ? status : "on";

    if (status !== validStatus) {
      safeLocalStorage.set(LS_APP_STREAMING_KEY, validStatus);
    }

    return validStatus === "on";
  });


  const toggleStreaming = useCallback(() => {
    setIsStreaming(prev => {
      const newValue = !prev;
      safeLocalStorage.set(LS_APP_STREAMING_KEY, newValue ? "on" : "off");
      return newValue;
    });
  }, []);


  return { isStreaming, toggleStreaming };
}


export function useBooleanLS(key: string) {
  const [isBooleanLSOn, setIsBooleanLSOn] = useState(() => {
    const status = safeLocalStorage.get(key);
    const validStatus: BooleanStatus = isValidBooleanStatus(status) ? status : "true";

    if (status !== validStatus) {
      safeLocalStorage.set(key, validStatus);
    }

    return validStatus === "true";
  });


  const toggleBooleanLS = useCallback(() => {
    setIsBooleanLSOn(prev => {
      const newValue = !prev;
      safeLocalStorage.set(key, newValue ? "true" : "false");
      return newValue;
    });
  }, []);


  return { isBooleanLSOn, toggleBooleanLS };
}