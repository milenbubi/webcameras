import { CardMedia } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Title from "./Title";
import FSButton from "./FSButton";
import Centered from "../Utils/Centered";
import { playersCSS } from "./players/styles";
import ChangeCamButton from "./ChangeCamButton";
import PlayerWrapper from "./players/PlayerWrapper";
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
  const Kulata = useRef<HTMLImageElement>(null);
  const [camLabel, setCamLabel] = useState("");
  const [streamKulata, setStreamKulata] = useState(2);
  const { isBooleanLSOn: isOn1, switchBooleanLS: switchIsOn1 } = useBooleanLS("cklt");


  useEffect(() => {  // Kulata camera
    const refreshCam = () => {
      if (!isOn1) {
        return;
      }

      const src = `https://cdn.uab.org/images/cctv/images/cctv/cctv_${getSource(streamKulata)}/cctv.jpg?${Date.now()}`;
      Kulata.current?.setAttribute("src", src);
      setCamLabel(getCamLabel(streamKulata));
    };

    refreshCam();
    const interval = setInterval(refreshCam, 30000);

    return () => clearInterval(interval);
  }, [streamKulata, isOn1]);


  return (
    <Centered id="cklt" sx={{ width: 1, maxHeight: 1, position: "relative", maxWidth: 700 }}>

      <PlayerWrapper isActive={isOn1}>
        <CardMedia ref={Kulata} sx={{ ...playersCSS, objectFit: "contain" }} component="img" />
        <ChangeCamButton streamIndex={streamKulata} onClick={setStreamKulata} indexCount={3} />
        <FSButton fsElementId="cklt" />
      </PlayerWrapper>

      <LSSwitcher isOn={isOn1} switchIsOn={switchIsOn1} />
      <Title value={camLabel} />

    </Centered>
  );
}



export default KulataCams;