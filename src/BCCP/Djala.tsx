import Title from "../Components/Title";
import Centered from "../Utils/Centered";
import FSButton from "../Components/FSButton";
import LSSwitcher, { useBooleanLS } from "../Utils/hooks";



function Djala() {
  const { isBooleanLSOn: isOn1, switchBooleanLS: switchIsOn1 } = useBooleanLS("tth");
  const { isBooleanLSOn: isOn2, switchBooleanLS: switchIsOn2 } = useBooleanLS("tts");


  return (  // Ђала
    <Centered gap={5} pt={3} width="100%" flexWrap="wrap">


      <Centered id="tth" width="100%" maxHeight="100%" position="relative" sx={{ maxWidth: 700 }}>
        <iframe
          src={isOn1 ? "https://live.uzivokamere.com/djala1" : undefined}
          style={{ border: isOn1 ? "none" : "2px solid white", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
        />
        <LSSwitcher isOn={isOn1} switchIsOn={switchIsOn1} />
        <Title value="Ђала - към Унгария" />
        {isOn1 && (<>
          <FSButton fsElementId="tth" />
        </>)}
      </Centered>


      <Centered id="tts" width="100%" maxHeight="100%" position="relative" sx={{ maxWidth: 700 }}>
        <iframe
          src={isOn2 ? "https://live.uzivokamere.com/djala2" : undefined}
          style={{ border: isOn2 ? "none" : "2px solid white", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
        />
        <LSSwitcher isOn={isOn2} switchIsOn={switchIsOn2} />
        <Title value="Ђала - към Сърбия" />
        {isOn2 && (<>
          <FSButton fsElementId="tts" />
        </>)}
      </Centered>


    </Centered>
  );
}



export default Djala;