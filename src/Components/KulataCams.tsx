import { CardMedia } from "@mui/material";
import { Fragment, useEffect, useRef, useState } from "react";
import Title from "./Title";
import FSButton from "./FSButton";
import Centered from "../Utils/Centered";
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
    default: distance = "n/A ";
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
    <Fragment>
      <iframe
        src={undefined}
        style={{ border: "2px solid white", width: "100%", aspectRatio: "16/9", opacity: isOn1 ? 0 : 1 }}
      />
      {isOn1 && (
        <Centered sx={{ position: "absolute", inset: 1 }}>
          <CardMedia ref={Kulata} sx={{ width: "100%", height: "100%", objectFit: "contain" }} component="img" />
          <ChangeCamButton streamIndex={streamKulata} onClick={setStreamKulata} indexCount={3} />
          <FSButton fsElementId="cklt" />
        </Centered>
      )}
      <LSSwitcher isOn={isOn1} switchIsOn={switchIsOn1} />
      <Title value={camLabel} />
    </Fragment>
  );
}



export default KulataCams;