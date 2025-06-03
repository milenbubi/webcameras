import Title from "../Components/Title";
import Centered from "../Utils/Centered";
import FSButton from "../Components/FSButton";
import CameraBlobPlayer from "./CameraBlobPlayer";
import LSSwitcher, { useBooleanLS } from "../Utils/hooks";



function Kelebia() {
  const { isBooleanLSOn: isOn1, switchBooleanLS: switchIsOn1 } = useBooleanLS("khun");
  const { isBooleanLSOn: isOn2, switchBooleanLS: switchIsOn2 } = useBooleanLS("ksrb");


  return (  // Келебия
    <Centered gap={6} pt={3} width="100%" flexWrap="wrap">

      <Centered id="khun"sx={{ width: 1, maxHeight: 1, position: "relative", maxWidth: 700 }}>
        <CameraBlobPlayer url="https://live.uzivokamere.com/kelebija2" isActive={isOn1} />
        <LSSwitcher isOn={isOn1} switchIsOn={switchIsOn1} />
        <Title value="Келебия - към Унгария" />
        {isOn1 && <FSButton fsElementId="khun" />}
      </Centered>

      <Centered id="ksrb" sx={{ width: 1, maxHeight: 1, position: "relative", maxWidth: 700 }}>
        <CameraBlobPlayer url="https://live.uzivokamere.com/kelebija1" isActive={isOn2} />
        <LSSwitcher isOn={isOn2} switchIsOn={switchIsOn2} />
        <Title value="Келебия - към Сърбия" />
        {isOn2 && <FSButton fsElementId="ksrb" />}
      </Centered>

    </Centered>
  );
}



export default Kelebia;