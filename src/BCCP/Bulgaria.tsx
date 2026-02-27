import { useState } from "react";
import { useIsMUIMobile } from "@ffilip/mui-react-utils/mui";
import KulataCams from "../Components/KulataCams";
import RowWrapper from "../Components/RowWrapper";
import { useBooleanLS } from "../Utils/localStorage";
import BlobPlayer from "../Components/players/BlobPlayer";
import ChangeCamButton from "../Components/ChangeCamButton";
import IframePlayer from "../Components/players/IframePlayer";



function Bulgaria() {
  const isMobile = useIsMUIMobile();
  const [streamKalotinaToBG, setStreamKalotinaToBG] = useState(1);
  const [streamKalotinaToSRB, setStreamKalotinaToSRB] = useState(1);
  const { isBooleanLSOn: isOn1, toggleBooleanLS: toggleIsOn1 } = useBooleanLS("mkrd");
  const { isBooleanLSOn: isOn2, toggleBooleanLS: toggleIsOn2 } = useBooleanLS("mgkp");
  const { isBooleanLSOn: isOn3, toggleBooleanLS: toggleIsOn3 } = useBooleanLS("kblg");
  const { isBooleanLSOn: isOn4, toggleBooleanLS: toggleIsOn4 } = useBooleanLS("ksrb");


  return (  // България
    <>
      {/* Кулата */}
      <RowWrapper>
        <KulataCams />
      </RowWrapper>


      {/* Маказа */}
      <RowWrapper>
        <IframePlayer
          id="mkrd" isActive={isOn1}
          url={`https://www.youtube.com/embed/ztW62j3-jl8?autoplay=1&mute=1&controls=${isMobile ? 0 : 1}`}
          onToggle={toggleIsOn1}
          title="Маказа - посока Кърджали"
        />

        <IframePlayer
          id="mgkp" isActive={isOn2}
          url={`https://www.youtube.com/embed/mLtxlaGgGfo?autoplay=1&mute=1&controls=${isMobile ? 0 : 1}`}
          onToggle={toggleIsOn2}
          title="Маказа - посока ГКПП"
        />
      </RowWrapper>


      {/* Калотина */}
      <RowWrapper>
        <BlobPlayer
          id="kblg" isActive={isOn3}
          url={streamKalotinaToBG === 1 ? "https://kamere.mup.gov.rs:4443/gradina/gradina2.m3u8" : "https://kamere.amss.org.rs/gradina2/gradina2.m3u8"}
          onToggle={toggleIsOn3}
          title="Калотина - посока България"
          hideSpecialControlsIfInactive
          specialControls={<ChangeCamButton streamIndex={streamKalotinaToBG} onClick={setStreamKalotinaToBG} />}
        />

        <BlobPlayer
          id="ksrb" isActive={isOn4}
          url={streamKalotinaToSRB === 1 ? "https://kamere.mup.gov.rs:4443/gradina/gradina1.m3u8" : "https://kamere.amss.org.rs/gradina1/gradina1.m3u8"}
          onToggle={toggleIsOn4}
          title="Калотина - посока Сърбия"
          hideSpecialControlsIfInactive
          specialControls={<ChangeCamButton streamIndex={streamKalotinaToSRB} onClick={setStreamKalotinaToSRB} />}
        />
      </RowWrapper>
    </>
  );
}



export default Bulgaria;