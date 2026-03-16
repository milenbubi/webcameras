import { useBooleanLS } from "../../Utils/localStorage";
import IframePlayer from "../../Components/players/IframePlayer";
import { useAddYTControlsToUrl } from "./tools/useAddYoutubeControls";

interface IProps {
  id: string;
  title: string;
  url: string;
  withSound?: boolean;
}



function __IframeVideoImpl({ id, title, url, withSound }: IProps) {
  const { finalUrl } = useAddYTControlsToUrl({ url, withSound });
  const { isBooleanLSOn, toggleBooleanLS } = useBooleanLS(id);


  return (
    <IframePlayer
      id={id} isActive={isBooleanLSOn}
      url={finalUrl}
      onToggle={toggleBooleanLS}
      title={title}
    />
  );
}



export { __IframeVideoImpl };