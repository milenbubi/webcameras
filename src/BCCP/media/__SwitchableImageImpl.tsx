import { useEffect, useMemo, useState } from "react";
import { useDocumentVisibility } from "@ffilip/mui-react-utils";
import { SX } from "../../Utils/types/types";
import { useBooleanLS } from "../../Utils/localStorage";
import { useRefreshInfo } from "./tools/useRefreshInfo";
import { updateCamUrlWithTimestamp } from "./tools/helpers";
import ImagePlayer from "../../Components/players/ImagePlayer";
import ChangeCamButton from "../../Components/ChangeCamButton";

interface IProps {
  id: string;
  title: string;
  camCount: number;
  refreshSeconds?: number;
  showUpdateInMinutes?: boolean;
  urlComposer: (streamIndex: number) => string;
  stretchToFit?: boolean;
  fsBtnSx?: SX;
}



function __SwitchableImageImpl({ id, title, camCount, urlComposer, stretchToFit, fsBtnSx, ...refreshProps }: IProps) {
  const [camUrl, setCamUrl] = useState("");
  const isVisible = useDocumentVisibility();
  const [streamIndex, setStreamIndex] = useState(1);

  const { isBooleanLSOn, toggleBooleanLS } = useBooleanLS(id);
  const url = useMemo(() => urlComposer(streamIndex), [streamIndex]);
  const { normalizedRefreshSeconds, updateLabel } = useRefreshInfo(refreshProps);


  useEffect(() => {
    if (!isBooleanLSOn || !isVisible) {
      return;
    }

    const refreshCam = () => updateCamUrlWithTimestamp({ url, setCamUrl });

    refreshCam();
    const id = setInterval(refreshCam, normalizedRefreshSeconds * 1000);

    return () => {
      clearInterval(id);
      setCamUrl("");
    }
  }, [isVisible, isBooleanLSOn, normalizedRefreshSeconds, url]);


  return (
    <ImagePlayer
      onToggle={toggleBooleanLS}
      id={id} isActive={isBooleanLSOn}
      title={title} imageUpdateLabel={updateLabel}
      url={camUrl}
      stretchToFit={stretchToFit}
      fsBtnSx={fsBtnSx}
      specialControls={<ChangeCamButton camIndex={streamIndex} onClick={setStreamIndex} camCount={camCount} />}
    />
  );
}



export { __SwitchableImageImpl };