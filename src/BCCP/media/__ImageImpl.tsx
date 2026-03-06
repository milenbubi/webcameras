import { useEffect, useState } from "react";
import { useDocumentVisibility } from "@ffilip/mui-react-utils";
import { useBooleanLS } from "../../Utils/localStorage";
import { useRefreshInfo } from "./tools/useRefreshInfo";
import { updateCamUrlWithTimestamp } from "./tools/helpers";
import ImagePlayer from "../../Components/players/ImagePlayer";

interface IProps {
  id: string;
  title: string;
  url: string;
  refreshSeconds?: number;
  showUpdateInMinutes?: boolean;
  stretchToFit?: boolean;
}



function __ImageImpl({ id, title, url, stretchToFit, ...refreshProps }: IProps) {
  const [camUrl, setCamUrl] = useState("");
  const isVisible = useDocumentVisibility();
  const { isBooleanLSOn, toggleBooleanLS } = useBooleanLS(id);
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
    />
  );
}



export { __ImageImpl };