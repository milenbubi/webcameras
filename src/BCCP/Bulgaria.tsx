import { useState } from "react";
import { Stack } from "@mui/material";
import Title from "../Components/Title";
import Centered from "../Utils/Centered";
import { useIsMobile } from "../Utils/theme";
import FSButton from "../Components/FSButton";
import KulataCams from "../Components/KulataCams";
import LSSwitcher, { useBooleanLS } from "../Utils/hooks";
import ChangeCamButton from "../Components/ChangeCamButton";



function Bulgaria() {
  const isMobile = useIsMobile();
  const [streamKalotinaToBG, setStreamKalotinaToBG] = useState(1);
  const [streamKalotinaToSRB, setStreamKalotinaToSRB] = useState(1);
  const { isBooleanLSOn: isOn2, switchBooleanLS: switchIsOn2 } = useBooleanLS("mkrd");
  const { isBooleanLSOn: isOn3, switchBooleanLS: switchIsOn3 } = useBooleanLS("mgkp");
  const { isBooleanLSOn: isOn4, switchBooleanLS: switchIsOn4 } = useBooleanLS("kblg");
  const { isBooleanLSOn: isOn5, switchBooleanLS: switchIsOn5 } = useBooleanLS("ksrb");


  return (
    <Stack gap={5} pt={3} width="100%" alignItems="center">


      {/* Кулата */}
      <Centered gap={5} maxHeight="100%" width="100%" flexWrap="wrap">
        <Centered id="cklt" width="100%" maxHeight="100%" position="relative" sx={{ maxWidth: 700 }}>
          <KulataCams />
        </Centered>
      </Centered>


      {/* Маказа */}
      <Centered gap={5} maxHeight="100%" width="100%" flexWrap="wrap">
        <Centered id="mkrd" width="100%" maxHeight="100%" position="relative" sx={{ maxWidth: 700 }}>
          <iframe loading="lazy"
            src={isOn2 ? `https://www.youtube.com/embed/73VhS77uoVs?autoplay=1&mute=1&controls=${isMobile ? 0 : 1}` : undefined}
            style={{ border: isOn2 ? "none" : "2px solid white", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
          />
          <LSSwitcher isOn={isOn2} switchIsOn={switchIsOn2} />
          <Title value="Маказа - посока Кърджали" />
          {isOn2 && <FSButton fsElementId="mkrd" />}
        </Centered>


        <Centered id="mgkp" width="100%" maxHeight="100%" position="relative" sx={{ maxWidth: 700 }}>
          <iframe
            src={isOn3 ? `https://www.youtube.com/embed/N-3MpZBd6QE?autoplay=1&mute=1&controls=${isMobile ? 0 : 1}` : undefined}
            style={{ border: isOn3 ? "none" : "2px solid white", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
          />
          <LSSwitcher isOn={isOn3} switchIsOn={switchIsOn3} />
          <Title value="Маказа - посока ГКПП" />
          {isOn3 && <FSButton fsElementId="mgkp" />}
        </Centered>
      </Centered>


      {/* Калотина */}
      <Centered gap={5} maxHeight="100%" width="100%" flexWrap="wrap">
        <Centered id="kblg" width="100%" maxHeight="100%" position="relative" sx={{ maxWidth: 700 }}>
          <iframe
            src={isOn4 ? `https://live.uzivokamere.com/${streamKalotinaToBG === 1 ? "amss_" : ""}gradina2` : undefined}
            style={{ border: isOn4 ? "none" : "2px solid white", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
          />

          <LSSwitcher isOn={isOn4} switchIsOn={switchIsOn4} />
          <Title value="Калотина - посока България" />
          {isOn4 && (<>
            <ChangeCamButton streamIndex={streamKalotinaToBG} onClick={setStreamKalotinaToBG} />
            <FSButton fsElementId="kblg" />
          </>)}
        </Centered>


        <Centered id="ksrb" width="100%" maxHeight="100%" position="relative" sx={{ maxWidth: 700 }}>
          <iframe
            src={isOn5 ? `https://live.uzivokamere.com/${streamKalotinaToSRB === 1 ? "amss_" : ""}gradina1` : undefined}
            style={{ border: isOn5 ? "none" : "2px solid white", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
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