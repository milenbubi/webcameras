import Title from "../Components/Title";
import FSButton from "../Components/FSButton";
import LSToggler from "../Components/LSToggler";
import RowWrapper from "../Components/RowWrapper";
import { useBooleanLS } from "../Utils/localStorage";
import BlobPlayer from "../Components/players/BlobPlayer";



function Djala() {
  const { isBooleanLSOn: isOn1, toggleBooleanLS: toggleIsOn1 } = useBooleanLS("tth");
  const { isBooleanLSOn: isOn2, toggleBooleanLS: toggleIsOn2 } = useBooleanLS("tts");


  return (  // Ђала
    <RowWrapper>
      <BlobPlayer
        id="tth"
        // url="https://live.uzivokamere.com/djala1" 
        url="https://kamere.mup.gov.rs:4443/Djala/djala1.m3u8"  // backup
        isActive={isOn1}
      >
        <LSToggler isOn={isOn1} onToggle={toggleIsOn1} />
        <Title value="Ђала - към Унгария" />
        {isOn1 && <FSButton fsElementId="tth" />}
      </BlobPlayer>

      <BlobPlayer
        id="tts"
        // url="https://live.uzivokamere.com/djala2" 
        url="https://kamere.mup.gov.rs:4443/Djala/djala2.m3u8"  // backup
        isActive={isOn2}
      >
        <LSToggler isOn={isOn2} onToggle={toggleIsOn2} />
        <Title value="Ђала - към Сърбия" />
        {isOn2 && <FSButton fsElementId="tts" />}
      </BlobPlayer>
    </RowWrapper>
  );
}



export default Djala;