import { useState } from "react";
import { safeLocalStorage } from "@ffilip/chan180-utils/helpers";

type StreamStatus = "on" | "off";


function isValidStreamStatus(value: string | null): value is StreamStatus {
  return value === "on" || value === "off";
}


export const LS_BROWSER_VISITS_KEY = "browservisits";
export const LS_APP_STREAMING_KEY = "streaming";
export const LS_PLACE_KEY = "place";



export function useInitialStreamStatus() {
  const [isStreaming, setIsStreaming] = useState(() => {
    const status = safeLocalStorage.get(LS_APP_STREAMING_KEY);
    const validStatus = isValidStreamStatus(status) ? status : "on";

    safeLocalStorage.set(LS_APP_STREAMING_KEY, validStatus);
    return validStatus === "on";
  });


  return { isStreaming, setIsStreaming };
}