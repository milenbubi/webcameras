import Title from "../Components/Title";
import Centered from "../Utils/Centered";
import FSButton from "../Components/FSButton";
import LSSwitcher, { useBooleanLS } from "../Utils/hooks";



function Kelebia() {
  const { isBooleanLSOn: isOn1, switchBooleanLS: switchIsOn1 } = useBooleanLS("khun");
  const { isBooleanLSOn: isOn2, switchBooleanLS: switchIsOn2 } = useBooleanLS("ksrb");


  return (  // Келебия
    <Centered gap={6} pt={3} width="100%" flexWrap="wrap">

      <Centered id="khun" width="100%" maxHeight="100%" position="relative" sx={{ maxWidth: 700 }}>
        <iframe
          src={isOn1 ? "https://live.uzivokamere.com/kelebija2/" : undefined}
          style={{ border: isOn1 ? "none" : "2px solid white", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
        />
        <LSSwitcher isOn={isOn1} switchIsOn={switchIsOn1} />
        <Title value="Келебия - към Унгария" />
        {isOn1 && <FSButton fsElementId="khun" />}
      </Centered>

      <Centered id="ksrb" width="100%" maxHeight="100%" position="relative" sx={{ maxWidth: 700 }}>
        <iframe
          src={isOn2 ? "https://live.uzivokamere.com/kelebija1" : undefined}
          style={{ border: isOn2 ? "none" : "2px solid white", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
        />
        <LSSwitcher isOn={isOn2} switchIsOn={switchIsOn2} />
        <Title value="Келебия - към Сърбия" />
        {isOn2 && <FSButton fsElementId="ksrb" />}
      </Centered>

    </Centered>
  );
}



export default Kelebia;