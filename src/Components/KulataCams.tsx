import { useEffect, useMemo, useState } from "react";
import ImagePlayer from "./players/ImagePlayer";
import ChangeCamButton from "./ChangeCamButton";
import { useBooleanLS } from "../Utils/localStorage";

const getSource = (streamKulata: number) => {
  switch (streamKulata) {
    case 1: return "01";
    case 2: return "02";
    case 3: return "114";
    default: return "01";
  }
};

const getCamLabel = (streamKulata: number) => {
  let label: string;

  switch (streamKulata) {
    case 1: label = "700 м преди ГКПП"; break;
    case 2: label = "800 м преди ГКПП"; break;
    case 3: label = "OMV"; break;
    default: label = "... ";
  }

  return `Кулата - ${label}`;
};



function KulataCams() {
  const [camUrl, setCamUrl] = useState("");
  const [streamKulata, setStreamKulata] = useState(2);
  const camLabel = useMemo(() => getCamLabel(streamKulata), [streamKulata]);
  const { isBooleanLSOn: isOn1, toggleBooleanLS: toggleIsOn1 } = useBooleanLS("cklt");


  useEffect(() => {  // Frame refresh
    if (!isOn1) {
      return;
    }

    const refreshCam = () => {
      const src = `https://cdn.uab.org/images/cctv/images/cctv/cctv_${getSource(streamKulata)}/cctv.jpg?t=${Date.now()}`;
      setCamUrl(src);
    };

    refreshCam();
    const interval = setInterval(refreshCam, 30000);

    return () => {
      clearInterval(interval);
      setCamUrl("");
    }
  }, [streamKulata, isOn1]);


  return (
    <ImagePlayer
      id="cklt" isActive={isOn1}
      url={camUrl} onToggle={toggleIsOn1}
      title={camLabel} imageUpdateLabel="през 30s"
      hideSpecialControlsIfInactive
      specialControls={<ChangeCamButton streamIndex={streamKulata} onClick={setStreamKulata} indexCount={3} />}
    />
  );
}



export default KulataCams;