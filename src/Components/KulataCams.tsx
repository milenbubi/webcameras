import { CardMedia } from "@mui/material";
import { Fragment, useEffect, useRef, useState } from "react";
import Title from "./Title";
import FSButton from "./FSButton";
import Centered from "../Utils/Centered";
import ChangeCamButton from "./ChangeCamButton";
import LSSwitcher, { useBooleanLS } from "../Utils/hooks";



function KulataCams() {
  const Kulata = useRef<HTMLImageElement>(null);
  const [streamKulata, setStreamKulata] = useState(1);
  const { isBooleanLSOn: isOn1, switchBooleanLS: switchIsOn1 } = useBooleanLS("cklt");


  useEffect(() => {  // Kulata camera
    const refreshCam = () => {
      if (!isOn1) {
        return;
      }

      const src = `https://cdn.uab.org/images/cctv/images/cctv/cctv_${streamKulata === 1 ? "01" : 114}/cctv.jpg?${Date.now()}`;
      Kulata.current?.setAttribute("src", src);
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
          <ChangeCamButton streamIndex={streamKulata} onClick={setStreamKulata} />
          <FSButton fsElementId="cklt" />
        </Centered>
      )}
      <LSSwitcher isOn={isOn1} switchIsOn={switchIsOn1} />
      <Title value={`Кулата - ${streamKulata === 1 ? "800" : "OMV, 2500"}м преди Гърция`} />
    </Fragment>
  );
}



export default KulataCams;