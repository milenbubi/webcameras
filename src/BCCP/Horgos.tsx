import { useState } from "react";
import Title from "../Components/Title";
import Centered from "../Utils/Centered";
import FSButton from "../Components/FSButton";
import LSSwitcher, { useBooleanLS } from "../Utils/hooks";
import ChangeCamButton from "../Components/ChangeCamButton";



function Horgos() {
  const [streamToHUNG, setStreamToHUNG] = useState(1);
  const [streamToSRB, setStreamToSRB] = useState(1);
  const { isBooleanLSOn: isOn1, switchBooleanLS: switchIsOn1 } = useBooleanLS("hth");
  const { isBooleanLSOn: isOn2, switchBooleanLS: switchIsOn2 } = useBooleanLS("hts");

  return (  // Хоргош
    <Centered gap={6} pt={3} width="100%" flexWrap="wrap">

      <Centered id="hth" width="100%" maxHeight="100%" position="relative" sx={{ maxWidth: 700 }}>
        <iframe
          src={isOn1 ? `https://live.uzivokamere.com/${streamToHUNG === 1 ? "amss_" : ""}horgos2` : undefined}
          style={{ border: isOn1 ? "none" : "2px solid white", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
        />
        <LSSwitcher isOn={isOn1} switchIsOn={switchIsOn1} />
        <Title value="Хоргош - към Унгария" />
        {isOn1 && (<>
          <ChangeCamButton streamIndex={streamToHUNG} sx={{ top: 20 }} onClick={setStreamToHUNG} />
          <FSButton fsElementId="hth" />
        </>)}
      </Centered>

      <Centered id="hts" width="100%" maxHeight="100%" position="relative" sx={{ maxWidth: 700 }}>
        <iframe
          src={isOn2 ? `https://live.uzivokamere.com/${streamToSRB === 1 ? "amss_" : ""}horgos1` : undefined}
          style={{ border: isOn2 ? "none" : "2px solid white", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
        />
        <LSSwitcher isOn={isOn2} switchIsOn={switchIsOn2} />
        <Title value="Хоргош - към Сърбия" />
        {isOn2 && (<>
          <ChangeCamButton streamIndex={streamToSRB} sx={{ top: 20 }} onClick={setStreamToSRB} />
          <FSButton fsElementId="hts" />
        </>)}
      </Centered>

    </Centered>
  );
}



export default Horgos;