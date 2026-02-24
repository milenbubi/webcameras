import RowWrapper from "../Components/RowWrapper";
import { useBooleanLS } from "../Utils/localStorage";
import BlobPlayer from "../Components/players/BlobPlayer";



function Kelebia() {
  const { isBooleanLSOn: isOn1, toggleBooleanLS: toggleIsOn1 } = useBooleanLS("kehu");
  const { isBooleanLSOn: isOn2, toggleBooleanLS: toggleIsOn2 } = useBooleanLS("kese");


  return (  // Келебия
    <RowWrapper>
      <BlobPlayer
        id="kehu" isActive={isOn1}
        // url="https://live.uzivokamere.com/kelebija2/index.m3u8"  //backup
        url="https://kamere.mup.gov.rs:4443/Kelebija/kelebija2.m3u8"
        onToggle={toggleIsOn1}
        title="Келебия - към Унгария"
      />

      <BlobPlayer
        id="kese" isActive={isOn2}
        // url="https://live.uzivokamere.com/kelebija1/index.m3u8"  //backup
        url="https://kamere.mup.gov.rs:4443/Kelebija/kelebija1.m3u8"
        onToggle={toggleIsOn2}
        title="Келебия - към Сърбия"
      />
    </RowWrapper>
  );
}



export default Kelebia;