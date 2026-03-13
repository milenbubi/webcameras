import { useMemo } from "react";

interface IProps {
  refreshSeconds?: number;
  showUpdateInMinutes?: boolean;
}



export function useRefreshInfo({ refreshSeconds = 30, showUpdateInMinutes }: IProps) {
  const normalizedRefreshSeconds = useMemo(
    () => Math.max(1, Math.round(refreshSeconds)),
    [refreshSeconds]
  );


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