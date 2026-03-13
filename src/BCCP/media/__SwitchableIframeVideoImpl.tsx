import { useState } from "react";
import { SX } from "@ffilip/mui-react-utils";
import { useFinalTitle } from "./tools/useFinalTitle";
import { useBooleanLS } from "../../Utils/localStorage";
import ChangeCamButton from "../../Components/ChangeCamButton";
import IframePlayer from "../../Components/players/IframePlayer";
import { useAddYTControlsToUrlComposer } from "./tools/useAddYoutubeControls";

interface IProps {
  id: string;
  title: string | ((streamIndex: number) => string);
  urlComposer: (streamIndex: number) => string;
  camCount: number;
  fsBtnSx?: SX;
  chCamBtnSx?: SX;
  muted?: boolean;
}



function __SwitchableIframeVideoImpl({ id, title, urlComposer, camCount, fsBtnSx, chCamBtnSx, muted }: IProps) {
  const [streamIndex, setStreamIndex] = useState(1);
  const { isBooleanLSOn, toggleBooleanLS } = useBooleanLS(id);
  const { finalTitle } = useFinalTitle({ title, streamIndex });
  const { finalUrl } = useAddYTControlsToUrlComposer({ urlComposer, streamIndex, muted });


  return (
    <IframePlayer
      id={id} isActive={isBooleanLSOn}
      url={finalUrl}
      onToggle={toggleBooleanLS}
      title={finalTitle}
      fsBtnSx={fsBtnSx}
      specialControls={
        <ChangeCamButton
          camIndex={streamIndex}
          onClick={setStreamIndex}
          camCount={camCount}
          sx={chCamBtnSx}
        />
      }
    />
  );
}



export { __SwitchableIframeVideoImpl };