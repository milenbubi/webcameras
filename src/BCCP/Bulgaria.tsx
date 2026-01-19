import { useState } from "react";
import { useIsMUIMobile } from "@ffilip/mui-react-utils/mui";
import Title from "../Components/Title";
import FSButton from "../Components/FSButton";
import KulataCams from "../Components/KulataCams";
import RowWrapper from "../Components/RowWrapper";
import LSSwitcher from "../Components/LSSwitcher";
import { useBooleanLS } from "../Utils/booleanLS";
import BlobPlayer from "../Components/players/BlobPlayer";
import ChangeCamButton from "../Components/ChangeCamButton";
import IframePlayer from "../Components/players/IframePlayer";



function Bulgaria() {
  const isMobile = useIsMUIMobile();
  const [streamKalotinaToBG, setStreamKalotinaToBG] = useState(1);
  const [streamKalotinaToSRB, setStreamKalotinaToSRB] = useState(1);
  const { isBooleanLSOn: isOn2, switchBooleanLS: switchIsOn2 } = useBooleanLS("mkrd");
  const { isBooleanLSOn: isOn3, switchBooleanLS: switchIsOn3 } = useBooleanLS("mgkp");
  const { isBooleanLSOn: isOn4, switchBooleanLS: switchIsOn4 } = useBooleanLS("kblg");
  const { isBooleanLSOn: isOn5, switchBooleanLS: switchIsOn5 } = useBooleanLS("ksrb");


  return (  // България
    <>
      {/* Кулата */}
      <RowWrapper>
        <KulataCams />
      </RowWrapper>


      {/* Маказа */}
      <RowWrapper>
        <IframePlayer
          id="mkrd"
          isActive={isOn2}
          url={`https://www.youtube.com/embed/pnr0lhrqRAc?autoplay=1&mute=1&controls=${isMobile ? 0 : 1}`}
        >
          <LSSwitcher isOn={isOn2} switchIsOn={switchIsOn2} />
          <Title value="Маказа - посока Кърджали" />
          {isOn2 && <FSButton fsElementId="mkrd" />}
        </IframePlayer>

        <IframePlayer
          id="mgkp"
          isActive={isOn3}
          url={`https://www.youtube.com/embed/YXN19ZEpIkc?autoplay=1&mute=1&controls=${isMobile ? 0 : 1}`}
        >
          <LSSwitcher isOn={isOn3} switchIsOn={switchIsOn3} />
          <Title value="Маказа - посока ГКПП" />
          {isOn3 && <FSButton fsElementId="mgkp" />}
        </IframePlayer>
      </RowWrapper>


      {/* Калотина */}
      <RowWrapper>
        <BlobPlayer
          id="kblg"
          url={streamKalotinaToBG === 1 ? "https://kamere.mup.gov.rs:4443/gradina/gradina2.m3u8" : "https://kamere.amss.org.rs/gradina2/gradina2.m3u8"}
          isActive={isOn4}
        >
          <LSSwitcher isOn={isOn4} switchIsOn={switchIsOn4} />
          <Title value="Калотина - посока България" />
          {isOn4 && (<>
            <ChangeCamButton streamIndex={streamKalotinaToBG} onClick={setStreamKalotinaToBG} />
            <FSButton fsElementId="kblg" />
          </>)}
        </BlobPlayer>

        <BlobPlayer
          id="ksrb"
          url={streamKalotinaToSRB === 1 ? "https://kamere.mup.gov.rs:4443/gradina/gradina1.m3u8" : "https://kamere.amss.org.rs/gradina1/gradina1.m3u8"}
          isActive={isOn5}
        >
          <LSSwitcher isOn={isOn5} switchIsOn={switchIsOn5} />
          <Title value="Калотина - посока Сърбия" />
          {isOn5 && (<>
            <ChangeCamButton streamIndex={streamKalotinaToSRB} onClick={setStreamKalotinaToSRB} />
            <FSButton fsElementId="ksrb" />
          </>)}
        </BlobPlayer>
      </RowWrapper>
    </>
  );
}



export default Bulgaria;