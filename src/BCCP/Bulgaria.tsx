import { useState } from "react";
import { Stack } from "@mui/material";
import Title from "../Components/Title";
import Centered from "../Utils/Centered";
import FSButton from "../Components/FSButton";
import LSSwitcher, { useBooleanLS } from "../Utils/hooks";
import ChangeCamButton from "../Components/ChangeCamButton";



function Bulgaria() {
  const [streamKalotinaToBG, setStreamKalotinaToBG] = useState(1);
  const [streamKalotinaToSRB, setStreamKalotinaToSRB] = useState(1);
  const { isBooleanLSOn: isOn1, switchBooleanLS: switchIsOn1 } = useBooleanLS("kblg");
  const { isBooleanLSOn: isOn2, switchBooleanLS: switchIsOn2 } = useBooleanLS("ksrb");


  return (
    <Stack gap={5} pt={3} width="100%" alignItems="center">


      {/* Калотина */}
      <Centered gap={5} maxHeight="100%" width="100%" flexWrap="wrap">
        <Centered id="kblg" width="100%" maxHeight="100%" position="relative" sx={{ maxWidth: 700 }}>
          <iframe
            src={isOn1 ? `https://live.uzivokamere.com/${streamKalotinaToBG === 1 ? "amss_" : ""}gradina2` : undefined}
            style={{ border: isOn1 ? "none" : "2px solid white", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
          />

          <LSSwitcher isOn={isOn1} switchIsOn={switchIsOn1} />
          <Title value="Калотина - посока България" />
          {isOn1 && (<>
            <ChangeCamButton streamIndex={streamKalotinaToBG} onClick={setStreamKalotinaToBG} />
            <FSButton fsElementId="kblg" />
          </>)}
        </Centered>


        <Centered id="ksrb" width="100%" maxHeight="100%" position="relative" sx={{ maxWidth: 700 }}>
          <iframe
            src={isOn2 ? `https://live.uzivokamere.com/${streamKalotinaToSRB === 1 ? "amss_" : ""}gradina1` : undefined}
            style={{ border: isOn2 ? "none" : "2px solid white", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
          />
          <LSSwitcher isOn={isOn2} switchIsOn={switchIsOn2} />
          <Title value="Калотина - посока Сърбия" />
          {isOn2 && (<>
            <ChangeCamButton streamIndex={streamKalotinaToSRB} onClick={setStreamKalotinaToSRB} />
            <FSButton fsElementId="ksrb" />
          </>)}
        </Centered>
      </Centered>


    </Stack>
  );
}



export default Bulgaria;