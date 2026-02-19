import { useState } from "react";
import Title from "../Components/Title";
import FSButton from "../Components/FSButton";
import LSToggler from "../Components/LSToggler";
import RowWrapper from "../Components/RowWrapper";
import { useBooleanLS } from "../Utils/localStorage";
import BlobPlayer from "../Components/players/BlobPlayer";
import ChangeCamButton from "../Components/ChangeCamButton";



function Horgos() {
  const [streamToHUNG, setStreamToHUNG] = useState(1);
  const [streamToSRB, setStreamToSRB] = useState(1);
  const { isBooleanLSOn: isOn1, toggleBooleanLS: toggleIsOn1 } = useBooleanLS("hth");
  const { isBooleanLSOn: isOn2, toggleBooleanLS: toggleIsOn2 } = useBooleanLS("hts");

  return (  // Хоргош
    <RowWrapper>
      <BlobPlayer
        id="hth"
        url={streamToHUNG === 2 ? "https://kamere.mup.gov.rs:4443/horgos/horgos2.m3u8" : "https://kamere.amss.org.rs/horgos2/horgos2.m3u8"}
        isActive={isOn1}
      >
        <LSToggler isOn={isOn1} onToggle={toggleIsOn1} />
        <Title value="Хоргош - към Унгария" />
        {isOn1 && (<>
          <ChangeCamButton streamIndex={streamToHUNG} sx={{ top: 20 }} onClick={setStreamToHUNG} />
          <FSButton fsElementId="hth" />
        </>)}
      </BlobPlayer>

      <BlobPlayer
        id="hts"
        url={streamToSRB === 2 ? "https://kamere.mup.gov.rs:4443/horgos/horgos1.m3u8" : "https://kamere.amss.org.rs/horgos1/horgos1.m3u8"}
        isActive={isOn2}
      >
        <LSToggler isOn={isOn2} onToggle={toggleIsOn2} />
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