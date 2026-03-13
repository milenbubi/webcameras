import { useMemo } from "react";

interface IUrlProps {
  url: string;
  muted?: boolean;
}

interface IUrlComposerProps {
  urlComposer: (streamIndex: number) => string;
  streamIndex: number;
  muted?: boolean;
}



function useYTUrl({ url, muted }: IUrlProps) {
  const finalUrl = useMemo(() => {
    const isYoutube =
      url.includes("youtube.com") ||
      url.includes("youtu.be") ||
      url.includes("youtube-nocookie.com");

    if (!isYoutube) {
      return url;
    }

    const separator = url.includes("?") ? "&" : "?";

    return `${url}${separator}` +
      `autoplay=1` +
      `&mute=${muted ? 1 : 0}` +
      `&controls=1` +
      `&rel=0` +
      `&modestbranding=1` +
      `&fs=0` +
      `&playsinline=1`;
  }, [url, muted]);


  return finalUrl;
};



export function useAddYTControlsToUrl({ url, muted }: IUrlProps) {
  const finalUrl = useYTUrl({ url, muted });
  return { finalUrl };
};



export function useAddYTControlsToUrlComposer({ urlComposer, streamIndex = 1, muted }: IUrlComposerProps) {
  const url = useMemo(() => urlComposer(streamIndex), [streamIndex]);
  const finalUrl = useYTUrl({ url, muted });
  return { finalUrl };
};