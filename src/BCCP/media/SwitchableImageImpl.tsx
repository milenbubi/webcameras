import { useEffect, useMemo, useState } from "react";
import { useDocumentVisibility } from "@ffilip/mui-react-utils";
import { useBooleanLS } from "../../Utils/localStorage";
import ImagePlayer from "../../Components/players/ImagePlayer";
import ChangeCamButton from "../../Components/ChangeCamButton";
import { SX } from "../../Utils/types/types";

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



function SwitchableImageImpl({ id, title, camCount, refreshSeconds = 30, showUpdateInMinutes, urlComposer, stretchToFit, fsBtnSx }: IProps) {
  const [camUrl, setCamUrl] = useState("");
  const isVisible = useDocumentVisibility();
  const [streamIndex, setStreamIndex] = useState(1);

  const { isBooleanLSOn, toggleBooleanLS } = useBooleanLS(id);
  const url = useMemo(() => urlComposer(streamIndex), [streamIndex]);
  const normalizedRefreshSeconds = useMemo(() => Math.max(1, Math.round(refreshSeconds)), [refreshSeconds]);


  const updateLabel = useMemo(() => {
    if (showUpdateInMinutes) {
      const minutes = Math.max(1, Math.round(normalizedRefreshSeconds / 60));
      return `през ${minutes} ${minutes === 1 ? "минута" : "минути"}`;
    }
    else {
      return `през ${normalizedRefreshSeconds} ${normalizedRefreshSeconds === 1 ? "секунда" : "секунди"}`;
    }
  }, [normalizedRefreshSeconds, showUpdateInMinutes]);


  useEffect(() => {
    if (!isBooleanLSOn || !isVisible) {
      return;
    }

    const refreshCam = () => {
      const urlObj = new URL(url);
      urlObj.searchParams.set("t", Date.now().toString());
      setCamUrl(urlObj.toString());
    };

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



export default SwitchableImageImpl;