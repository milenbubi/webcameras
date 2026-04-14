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
    const isYoutube = /youtube\.com|youtu\.be|youtube-nocookie\.com/.test(url);

    if (!isYoutube) {
      return url;
    }

    const u = new URL(url);

    u.searchParams.set("autoplay", "1");
    u.searchParams.set("mute", withSound ? "0" : "1");
    u.searchParams.set("controls", "1");
    u.searchParams.set("rel", "0");
    u.searchParams.set("modestbranding", "1");
    u.searchParams.set("fs", "0");
    u.searchParams.set("playsinline", "1");

    return u.toString();
  }, [url, withSound]);


  return finalUrl;
}


export function useAddYTControlsToUrl({ url, withSound }: IUrlProps) {
  const finalUrl = useYTUrl({ url, withSound });
  return { finalUrl };
};



export function useAddYTControlsToUrlComposer({ urlComposer, streamIndex = 1, withSound }: IUrlComposerProps) {
  const url = useMemo(() => urlComposer(streamIndex), [streamIndex]);
  const finalUrl = useYTUrl({ url, withSound });
  return { finalUrl };
};