import { useMemo } from "react";

interface IUrlProps {
  url: string;
  withSound?: boolean;
}

interface IUrlComposerProps {
  urlComposer: (streamIndex: number) => string;
  streamIndex: number;
  withSound?: boolean;
}



function useYTUrl({ url, withSound }: IUrlProps) {
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
      `&mute=${withSound ? 0 : 1}` +
      `&controls=1` +
      `&rel=0` +
      `&modestbranding=1` +
      `&fs=0` +
      `&playsinline=1`;
  }, [url, withSound]);


  return finalUrl;
};



export function useAddYTControlsToUrl({ url, withSound }: IUrlProps) {
  const finalUrl = useYTUrl({ url, withSound });
  return { finalUrl };
};



export function useAddYTControlsToUrlComposer({ urlComposer, streamIndex = 1, withSound }: IUrlComposerProps) {
  const url = useMemo(() => urlComposer(streamIndex), [streamIndex]);
  const finalUrl = useYTUrl({ url, withSound });
  return { finalUrl };
};