import { useState } from "react";
import Title from "../Components/Title";
import FSButton from "../Components/FSButton";
import RowWrapper from "../Components/RowWrapper";
import LSSwitcher from "../Components/LSSwitcher";
import { useBooleanLS } from "../Utils/booleanLS";
import BlobPlayer from "../Components/players/BlobPlayer";
import ChangeCamButton from "../Components/ChangeCamButton";



function Horgos() {
  const [streamToHUNG, setStreamToHUNG] = useState(1);
  const [streamToSRB, setStreamToSRB] = useState(1);
  const { isBooleanLSOn: isOn1, switchBooleanLS: switchIsOn1 } = useBooleanLS("hth");
  const { isBooleanLSOn: isOn2, switchBooleanLS: switchIsOn2 } = useBooleanLS("hts");

  return (  // Хоргош
    <RowWrapper>
      <BlobPlayer
        id="hth"
        url={streamToHUNG === 1 ? "https://kamere.mup.gov.rs:4443/horgos/horgos2.m3u8" : "https://kamere.amss.org.rs/horgos2/horgos2.m3u8"}
        isActive={isOn1}
      >
        <LSSwitcher isOn={isOn1} switchIsOn={switchIsOn1} />
        <Title value="Хоргош - към Унгария" />
        {isOn1 && (<>
          <ChangeCamButton streamIndex={streamToHUNG} sx={{ top: 20 }} onClick={setStreamToHUNG} />
          <FSButton fsElementId="hth" />
        </>)}
      </BlobPlayer>

      <BlobPlayer
        id="hts"
        url={streamToSRB === 1 ? "https://kamere.mup.gov.rs:4443/horgos/horgos1.m3u8" : "https://kamere.amss.org.rs/horgos1/horgos1.m3u8"}
        isActive={isOn2}
      >
        <LSSwitcher isOn={isOn2} switchIsOn={switchIsOn2} />
        <Title value="Хоргош - към Сърбия" />
        {isOn2 && (<>
          <ChangeCamButton streamIndex={streamToSRB} sx={{ top: 20 }} onClick={setStreamToSRB} />
          <FSButton fsElementId="hts" />
        </>)}
      </BlobPlayer>
    </RowWrapper>
  );
}



export default Horgos;