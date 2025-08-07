import { useState } from "react";
import { Stack } from "@mui/material";
import Title from "../Components/Title";
import Centered from "../Utils/Centered";
import { useIsMobile } from "../Utils/theme";
import FSButton from "../Components/FSButton";
import KulataCams from "../Components/KulataCams";
import CameraBlobPlayer from "./CameraBlobPlayer";
import LSSwitcher, { useBooleanLS } from "../Utils/hooks";
import ChangeCamButton from "../Components/ChangeCamButton";



function Bulgaria() {
  const isMobile = useIsMobile();
  const [streamKalotinaToBG, setStreamKalotinaToBG] = useState(2);
  const [streamKalotinaToSRB, setStreamKalotinaToSRB] = useState(2);
  const { isBooleanLSOn: isOn2, switchBooleanLS: switchIsOn2 } = useBooleanLS("mkrd");
  const { isBooleanLSOn: isOn3, switchBooleanLS: switchIsOn3 } = useBooleanLS("mgkp");
  const { isBooleanLSOn: isOn4, switchBooleanLS: switchIsOn4 } = useBooleanLS("kblg");
  const { isBooleanLSOn: isOn5, switchBooleanLS: switchIsOn5 } = useBooleanLS("ksrb");


  return (  // България
    <Stack gap={6} pt={3} width="100%" alignItems="center">


      <Centered gap={6} maxHeight="100%" width="100%" flexWrap="wrap">
        {/* Кулата */}
        <KulataCams />
      </Centered>


      {/* Маказа */}
      <Centered gap={6} maxHeight="100%" width="100%" flexWrap="wrap">
        <Centered id="mkrd" sx={{ width: 1, maxHeight: 1, position: "relative", maxWidth: 700 }}>
          <iframe
            src={isOn2 ? `https://www.youtube.com/embed/pnr0lhrqRAc?autoplay=1&mute=1&controls=${isMobile ? 0 : 1}` : ""}
            style={{ border: isOn2 ? "none" : "2px solid white", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
            allow="autoplay; encrypted-media"
          />
          <LSSwitcher isOn={isOn2} switchIsOn={switchIsOn2} />
          <Title value="Маказа - посока Кърджали" />
          {isOn2 && <FSButton fsElementId="mkrd" />}
        </Centered>


        <Centered id="mgkp" sx={{ width: 1, maxHeight: 1, position: "relative", maxWidth: 700 }}>
          <iframe
            src={isOn3 ? `https://www.youtube.com/embed/YXN19ZEpIkc?autoplay=1&mute=1&controls=${isMobile ? 0 : 1}` : ""}
            style={{ border: isOn3 ? "none" : "2px solid white", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
            allow="autoplay; encrypted-media"
          />
          <LSSwitcher isOn={isOn3} switchIsOn={switchIsOn3} />
          <Title value="Маказа - посока ГКПП" />
          {isOn3 && <FSButton fsElementId="mgkp" />}
        </Centered>
      </Centered>


      {/* Калотина */}
      <Centered gap={6} maxHeight="100%" width="100%" flexWrap="wrap">
        <Centered id="kblg" sx={{ width: 1, maxHeight: 1, position: "relative", maxWidth: 700 }}>
          <CameraBlobPlayer
            // url={`https://live.uzivokamere.com/${streamKalotinaToBG === 1 ? "amss_" : ""}gradina2/index.m3u8`}
            url={streamKalotinaToBG === 1 ? "https://live.uzivokamere.com/amss_gradina2/index.m3u8" : "https://kamere.mup.gov.rs:4443/Gradina/gradina2.m3u8"}  // backup
            isActive={isOn4}
          />
          <LSSwitcher isOn={isOn4} switchIsOn={switchIsOn4} />
          <Title value="Калотина - посока България" />
          {isOn4 && (<>
            <ChangeCamButton streamIndex={streamKalotinaToBG} onClick={setStreamKalotinaToBG} />
            <FSButton fsElementId="kblg" />
          </>)}
        </Centered>


        <Centered id="ksrb" sx={{ width: 1, maxHeight: 1, position: "relative", maxWidth: 700 }}>
          <CameraBlobPlayer
            // url={`https://live.uzivokamere.com/${streamKalotinaToSRB === 1 ? "amss_" : ""}gradina1/index.m3u8`}
            url={streamKalotinaToSRB === 1 ? "https://live.uzivokamere.com/amss_gradina1/index.m3u8" : "https://kamere.mup.gov.rs:4443/Gradina/gradina1.m3u8"}  // backup
            isActive={isOn5}
          />
          <LSSwitcher isOn={isOn5} switchIsOn={switchIsOn5} />
          <Title value="Калотина - посока Сърбия" />
          {isOn5 && (<>
            <ChangeCamButton streamIndex={streamKalotinaToSRB} onClick={setStreamKalotinaToSRB} />
            <FSButton fsElementId="ksrb" />
          </>)}
        </Centered>
      </Centered>


    </Stack>
  );
}



export default Bulgaria;