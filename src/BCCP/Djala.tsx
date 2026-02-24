import RowWrapper from "../Components/RowWrapper";
import { useBooleanLS } from "../Utils/localStorage";
import BlobPlayer from "../Components/players/BlobPlayer";



function Djala() {
  const { isBooleanLSOn: isOn1, toggleBooleanLS: toggleIsOn1 } = useBooleanLS("tth");
  const { isBooleanLSOn: isOn2, toggleBooleanLS: toggleIsOn2 } = useBooleanLS("tts");


  return (  // Ђала
    <RowWrapper>
      <BlobPlayer
        id="tth" isActive={isOn1}
        // url="https://live.uzivokamere.com/djala1"  // backup
        url="https://kamere.mup.gov.rs:4443/Djala/djala1.m3u8"
        onToggle={toggleIsOn1}
        title="Ђала - към Унгария"
      />

      <BlobPlayer
        id="ттс" isActive={isOn2}
        // url="https://live.uzivokamere.com/djala2"  // backup
        url="https://kamere.mup.gov.rs:4443/Djala/djala2.m3u8"
        onToggle={toggleIsOn2}
        title="Ђала - към Сърбия"
      />
    </RowWrapper>
  );
}



export default Djala;