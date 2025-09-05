import { CardMedia } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Title from "./Title";
import FSButton from "./FSButton";
import { playerCSS } from "./players/styles";
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


  useEffect(() => {  // Frame refresh
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
    <PlayerWrapper id="cklt" isActive={isOn1}
      controls={
        <>
          <LSSwitcher isOn={isOn1} switchIsOn={switchIsOn1} />
          <Title value={camLabel} />
          {isOn1 && (<>
            <ChangeCamButton streamIndex={streamKulata} onClick={setStreamKulata} indexCount={3} />
            <FSButton fsElementId="cklt" />
          </>)}
        </>
      }
    >
      <CardMedia ref={Kulata} sx={{ ...playerCSS, objectFit: "contain" }} component="img" />
    </PlayerWrapper>
  );
}



export default KulataCams;