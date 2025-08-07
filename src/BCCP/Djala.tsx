import Title from "../Components/Title";
import Centered from "../Utils/Centered";
import FSButton from "../Components/FSButton";
import CameraBlobPlayer from "./CameraBlobPlayer";
import LSSwitcher, { useBooleanLS } from "../Utils/hooks";



function Djala() {
  const { isBooleanLSOn: isOn1, switchBooleanLS: switchIsOn1 } = useBooleanLS("tth");
  const { isBooleanLSOn: isOn2, switchBooleanLS: switchIsOn2 } = useBooleanLS("tts");


  return (  // Ђала
    <Centered gap={6} pt={3} width="100%" flexWrap="wrap">

      <Centered id="tth" sx={{ width: 1, maxHeight: 1, position: "relative", maxWidth: 700 }}>
        <CameraBlobPlayer
          // url="https://live.uzivokamere.com/djala1" 
          url="https://kamere.mup.gov.rs:4443/Djala/djala1.m3u8"  // backup
          isActive={isOn1}
        />
        <LSSwitcher isOn={isOn1} switchIsOn={switchIsOn1} />
        <Title value="Ђала - към Унгария" />
        {isOn1 && <FSButton fsElementId="tth" />}
      </Centered>

      <Centered id="tts" sx={{ width: 1, maxHeight: 1, position: "relative", maxWidth: 700 }}>
        <CameraBlobPlayer
          // url="https://live.uzivokamere.com/djala2" 
          url="https://kamere.mup.gov.rs:4443/Djala/djala2.m3u8"  // backup
          isActive={isOn2}
        />
        <LSSwitcher isOn={isOn2} switchIsOn={switchIsOn2} />
        <Title value="Ђала - към Сърбия" />
        {isOn2 && <FSButton fsElementId="tts" />}
      </Centered>

    </Centered>
  );
}



export default Djala;