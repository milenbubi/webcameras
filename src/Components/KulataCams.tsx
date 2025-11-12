import { useEffect, useMemo, useState } from "react";
import Title from "./Title";
import FSButton from "./FSButton";
import ImagePlayer from "./players/ImagePlayer";
import ChangeCamButton from "./ChangeCamButton";
import LSSwitcher from "../Components/LSSwitcher";
import { useBooleanLS } from "../Utils/booleanLS";

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
  const { isBooleanLSOn: isOn1, switchBooleanLS: switchIsOn1 } = useBooleanLS("cklt");


  useEffect(() => {  // Frame refresh
    const refreshCam = () => {
      if (isOn1) {
        const src = `https://cdn.uab.org/images/cctv/images/cctv/cctv_${getSource(streamKulata)}/cctv.jpg?${Date.now()}`;
        setCamUrl(src);
      }
    };

    refreshCam();
    const interval = setInterval(refreshCam, 30000);

    return () => clearInterval(interval);
  }, [streamKulata, isOn1]);


  return (
    <ImagePlayer id="cklt" isActive={isOn1} url={camUrl}>
      <LSSwitcher isOn={isOn1} switchIsOn={switchIsOn1} />
      <Title value={camLabel} updateLabel="през 30s" />
      {isOn1 && (<>
        <ChangeCamButton streamIndex={streamKulata} onClick={setStreamKulata} indexCount={3} />
        <FSButton fsElementId="cklt" />
      </>)}
    </ImagePlayer>
  );
}



export default KulataCams;