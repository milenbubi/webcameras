import { useMemo } from "react";
import { useIsMUIMobile } from "@ffilip/mui-react-utils";
import { useBooleanLS } from "../../Utils/localStorage";
import IframePlayer from "../../Components/players/IframePlayer";

interface IProps {
  id: string;
  title: string;
  url: string;
}


function addYoutubeControls(url: string, isMobile: boolean) {
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
    `&mute=0` +
    `&controls=${isMobile ? 0 : 1}` +
    `&rel=0` +
    `&modestbranding=1` +
    `&playsinline=1`;
}



function IframeVideoImpl({ id, title, url }: IProps) {
  const isMobile = useIsMUIMobile();
  const { isBooleanLSOn, toggleBooleanLS } = useBooleanLS(id);
  const finalUrl = useMemo(() => addYoutubeControls(url, isMobile), [url, isMobile]);


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