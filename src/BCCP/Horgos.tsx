import { useState } from "react";
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
        id="hth" isActive={isOn1}
        url={streamToHUNG === 2 ? "https://kamere.mup.gov.rs:4443/horgos/horgos2.m3u8" : "https://kamere.amss.org.rs/horgos2/horgos2.m3u8"}
        onToggle={toggleIsOn1}
        title="Хоргош - към Унгария"
        hideSpecialControlsIfInactive
        specialControls={<ChangeCamButton streamIndex={streamToHUNG} sx={{ top: 20 }} onClick={setStreamToHUNG} />}
      />

      <BlobPlayer
        id="hts" isActive={isOn2}
        url={streamToSRB === 2 ? "https://kamere.mup.gov.rs:4443/horgos/horgos1.m3u8" : "https://kamere.amss.org.rs/horgos1/horgos1.m3u8"}
        onToggle={toggleIsOn2}
        title="Хоргош - към Сърбия"
        hideSpecialControlsIfInactive
        specialControls={<ChangeCamButton streamIndex={streamToSRB} sx={{ top: 20 }} onClick={setStreamToSRB} />}
      />
    </RowWrapper>
  );
}



export default Horgos;