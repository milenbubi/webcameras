import { useMemo, useState } from "react";
import { SX } from "../../Utils/types/types";
import { useBooleanLS } from "../../Utils/localStorage";
import BlobPlayer from "../../Components/players/BlobPlayer";
import ChangeCamButton from "../../Components/ChangeCamButton";

interface IProps {
  id: string;
  title: string;
  urlComposer: (streamIndex: number) => string;
  camCount: number;
  fsBtnSx?: SX;
  chCamBtnSx?: SX;
}



function SwitchableBlobVideoImpl({ id, title, urlComposer, camCount, fsBtnSx, chCamBtnSx }: IProps) {
  const [streamIndex, setStreamIndex] = useState(1);
  const url = useMemo(() => urlComposer(streamIndex), [streamIndex]);
  const { isBooleanLSOn: isOn1, toggleBooleanLS: toggleIsOn1 } = useBooleanLS(id);


  return (
    <BlobPlayer
      id={id} isActive={isOn1}
      url={url}
      onToggle={toggleIsOn1}
      title={title}
      fsBtnSx={fsBtnSx}
      specialControls={<ChangeCamButton camIndex={streamIndex} onClick={setStreamIndex} camCount={camCount} sx={chCamBtnSx} />}
    />
  );
}



export default SwitchableBlobVideoImpl;