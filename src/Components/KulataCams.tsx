import { useEffect, useState } from "react";
import Title from "./Title";
import FSButton from "./FSButton";
import ImagePlayer from "./players/ImagePlayer";
import ChangeCamButton from "./ChangeCamButton";
import LSSwitcher, { useBooleanLS } from "../Utils/hooks";

const getSource = (streamKulata: number) => {
  switch (streamKulata) {
    case 1: return "01";
    case 2: return "02";
    case 3: return "114";
    default: return "01";
  };
};

const getCamLabel = (streamKulata: number) => {
  let distance: string;

  switch (streamKulata) {
    case 1: distance = "700"; break;
    case 2: distance = "800"; break;
    case 3: distance = "OMV, 2500"; break;
    default: distance = "... ";
  };

  return `Кулата - ${distance}м преди Гърция`;
};



function KulataCams() {
  const [camLabel, setCamLabel] = useState("");
  const [camUrl, setCamUrl] = useState("");
  const [streamKulata, setStreamKulata] = useState(2);
  const { isBooleanLSOn: isOn1, switchBooleanLS: switchIsOn1 } = useBooleanLS("cklt");


  useEffect(() => {  // Frame refresh
    const refreshCam = () => {
      if (isOn1) {
        const src = `https://cdn.uab.org/images/cctv/images/cctv/cctv_${getSource(streamKulata)}/cctv.jpg?${Date.now()}`;
        setCamUrl(src);
        setCamLabel(getCamLabel(streamKulata));
      }
    };

    refreshCam();
    const interval = setInterval(refreshCam, 30000);

    return () => clearInterval(interval);
  }, [streamKulata, isOn1]);


  return (
    <ImagePlayer id="cklt" isActive={isOn1} url={camUrl}>
      <LSSwitcher isOn={isOn1} switchIsOn={switchIsOn1} />
      <Title value={camLabel} />
      {isOn1 && (<>
        <ChangeCamButton streamIndex={streamKulata} onClick={setStreamKulata} indexCount={3} />
        <FSButton fsElementId="cklt" />
      </>)}
    </ImagePlayer>
  );
}



export default KulataCams;