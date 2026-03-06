import { useEffect, useState } from "react";
import { useDocumentVisibility } from "@ffilip/mui-react-utils";
import { useBooleanLS } from "../../Utils/localStorage";
import ImagePlayer from "../../Components/players/ImagePlayer";

interface IProps {
  id: string;
  title: string;
  url: string;
  refreshSeconds?: number;
  updateLabel?: string;
}



function ImageImpl({ id, title, url, refreshSeconds = 30, updateLabel }: IProps) {
  const [camUrl, setCamUrl] = useState("");
  const isVisible = useDocumentVisibility();
  const { isBooleanLSOn: isOn1, toggleBooleanLS: toggleIsOn1 } = useBooleanLS(id);


  useEffect(() => {
    if (!isOn1 || !isVisible) {
      return;
    }

    const refreshCam = () => {
      setCamUrl(`${url}?t=${Date.now()}`);
    };

    refreshCam();
    const id = setInterval(refreshCam, refreshSeconds * 1000);

    return () => {
      clearInterval(id);
      setCamUrl("");
    }
  }, [isVisible, isOn1, refreshSeconds]);


  return (
    <ImagePlayer
      onToggle={toggleIsOn1}
      id={id} isActive={isOn1}
      title={title} imageUpdateLabel={updateLabel || `през ${refreshSeconds} секунди`}
      url={camUrl}
    />
  );
}



export default ImageImpl;