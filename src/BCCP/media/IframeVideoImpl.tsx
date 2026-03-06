import { useMemo } from "react";
import { useIsMUIMobile } from "@ffilip/mui-react-utils";
import { useBooleanLS } from "../../Utils/localStorage";
import IframePlayer from "../../Components/players/IframePlayer";

interface IProps {
  id: string;
  title: string;
  url: string;
  muted?: boolean;
}


function addYoutubeControls(url: string, isMobile: boolean, muted: boolean) {
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
    `&controls=${isMobile ? 0 : 1}` +
    `&rel=0` +
    `&modestbranding=1` +
    `&playsinline=1`;
}



function IframeVideoImpl({ id, title, url, muted = false }: IProps) {
  const isMobile = useIsMUIMobile();
  const { isBooleanLSOn, toggleBooleanLS } = useBooleanLS(id);
  const finalUrl = useMemo(() => addYoutubeControls(url, isMobile, muted), [url, isMobile, muted]);


  return (
    <IframePlayer
      id={id} isActive={isBooleanLSOn}
      url={finalUrl}
      onToggle={toggleBooleanLS}
      title={title}
    />
  );
}



export default IframeVideoImpl;