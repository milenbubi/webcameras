import { useMemo, useState } from "react";
import { SX } from "@ffilip/mui-react-utils";
import { useFinalTitle } from "./tools/useFinalTitle";
import { useBooleanLS } from "../../Utils/localStorage";
import BlobPlayer from "../../Components/players/BlobPlayer";
import ChangeCamButton from "../../Components/ChangeCamButton";

interface IProps {
  id: string;
  title: string | ((streamIndex: number) => string);
  urlComposer: (streamIndex: number) => string;
  withSound?: boolean;
  camCount: number;
  fsBtnSx?: SX;
  chCamBtnSx?: SX;
}



function __SwitchableBlobVideoImpl({ id, title, urlComposer, withSound, camCount, fsBtnSx, chCamBtnSx }: IProps) {
  const [streamIndex, setStreamIndex] = useState(1);
  const { isBooleanLSOn, toggleBooleanLS } = useBooleanLS(id);
  const { finalTitle } = useFinalTitle({ title, streamIndex });
  const url = useMemo(() => urlComposer(streamIndex), [streamIndex]);


  return (
    <BlobPlayer
      id={id}
      isActive={isBooleanLSOn}
      url={url}
      onToggle={toggleBooleanLS}
      title={finalTitle}
      withSound={withSound}
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



export { __SwitchableBlobVideoImpl };