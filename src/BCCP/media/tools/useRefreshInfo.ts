import { useMemo } from "react";

interface IProps {
  refreshSeconds: number;
  showUpdateInMinutes?: boolean;
}



export function useRefreshInfo({ refreshSeconds, showUpdateInMinutes }: IProps) {
  // Memoize the normalized refresh interval in seconds.
  // Ensures a minimum of 1 second for the refresh interval.
  // Falls back to a default of 30 seconds if the input is null, undefined, or non-numeric.
  const normalizedRefreshSeconds = useMemo(() => {
    const n = Math.round(Number(refreshSeconds));
    return Math.max(1, isNaN(n) ? 30 : n);
  }, [refreshSeconds]);


  const updateLabel = useMemo(() => {
    if (showUpdateInMinutes) {
      const minutes = Math.max(1, Math.round(normalizedRefreshSeconds / 60));
      return `през ${minutes} ${minutes === 1 ? "минута" : "минути"}`;
    }
    else {
      return `през ${normalizedRefreshSeconds} ${normalizedRefreshSeconds === 1 ? "секунда" : "секунди"}`;
    }
  }, [normalizedRefreshSeconds, showUpdateInMinutes]);


  return { normalizedRefreshMS: normalizedRefreshSeconds * 1000, updateLabel };
}