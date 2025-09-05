import Title from "../Components/Title";
import FSButton from "../Components/FSButton";
import RowWrapper from "../Components/RowWrapper";
import BlobPlayer from "../Components/players/BlobPlayer";
import LSSwitcher, { useBooleanLS } from "../Utils/hooks";



function Kelebia() {
  const { isBooleanLSOn: isOn1, switchBooleanLS: switchIsOn1 } = useBooleanLS("khun");
  const { isBooleanLSOn: isOn2, switchBooleanLS: switchIsOn2 } = useBooleanLS("ksrb");


  return (  // Келебия
    <RowWrapper>
      <BlobPlayer
        id="khun"
        // url="https://live.uzivokamere.com/kelebija2/index.m3u8"
        url="https://kamere.mup.gov.rs:4443/Kelebija/kelebija2.m3u8"  //backup
        isActive={isOn1}
      >
        <LSSwitcher isOn={isOn1} switchIsOn={switchIsOn1} />
        <Title value="Келебия - към Унгария" />
        {isOn1 && <FSButton fsElementId="khun" />}
      </BlobPlayer>

      <BlobPlayer
        id="ksrb"
        // url="https://live.uzivokamere.com/kelebija1/index.m3u8"
        url="https://kamere.mup.gov.rs:4443/Kelebija/kelebija1.m3u8"  //backup        
        isActive={isOn2}
      >
        <LSSwitcher isOn={isOn2} switchIsOn={switchIsOn2} />
        <Title value="Келебия - към Сърбия" />
        {isOn2 && <FSButton fsElementId="ksrb" />}
      </BlobPlayer>
    </RowWrapper>
  );
}



export default Kelebia;