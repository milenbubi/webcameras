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
  stretchToFit?: boolean;
  refreshSeconds: number;
  showUpdateInMinutes?: boolean;
}



function __ImageImpl({ id, title, url, stretchToFit, ...refreshProps }: IProps) {
  const [camUrl, setCamUrl] = useState("");
  const isVisible = useDocumentVisibility();
  const { isBooleanLSOn, toggleBooleanLS } = useBooleanLS(id);
  const { normalizedRefreshMS, updateLabel } = useRefreshInfo(refreshProps);


  useEffect(() => {
    if (!isBooleanLSOn || !isVisible) {
      return;
    }

    const refreshCam = () => {
      const timedUrl = updateCamUrlWithTimestamp(url);
      setCamUrl(timedUrl);
    }

    refreshCam();
    const intervalId = setInterval(refreshCam, normalizedRefreshMS);

    return () => {
      clearInterval(intervalId);
      setCamUrl("");
    }
  }, [isVisible, isBooleanLSOn, normalizedRefreshMS, url]);


  return (
    <ImagePlayer
      onToggle={toggleBooleanLS}
      id={id}
      isActive={isBooleanLSOn}
      title={title}
      imageUpdateLabel={updateLabel}
      url={camUrl}
      stretchToFit={stretchToFit}
    />
  );
}



export { __ImageImpl };