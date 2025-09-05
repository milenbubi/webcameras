import Title from "../Components/Title";
import FSButton from "../Components/FSButton";
import RowWrapper from "../Components/RowWrapper";
import BlobPlayer from "../Components/players/BlobPlayer";
import LSSwitcher, { useBooleanLS } from "../Utils/hooks";
import IframePlayer from "../Components/players/IframePlayer";



function News() {
  const { isBooleanLSOn: isOn1, switchBooleanLS: switchIsOn1 } = useBooleanLS("euns");
  const { isBooleanLSOn: isOn2, switchBooleanLS: switchisOn2 } = useBooleanLS("skns");
  const { isBooleanLSOn: isOn3, switchBooleanLS: switchisOn3 } = useBooleanLS("blbn");
  const { isBooleanLSOn: isOn4, switchBooleanLS: switchisOn4 } = useBooleanLS("frns");
  const { isBooleanLSOn: isOn5, switchBooleanLS: switchisOn5 } = useBooleanLS("dwns");
  const { isBooleanLSOn: isOn6, switchBooleanLS: switchisOn6 } = useBooleanLS("ecns");


  return (  // News
    <>

      <RowWrapper>
        {/* Tagesschau */}
        <BlobPlayer
          id="ecns"
          url="https://tagesschau.akamaized.net/hls/live/2020115/tagesschau/tagesschau_1/master.m3u8"
          isActive={isOn6}
        >
          <LSSwitcher isOn={isOn6} switchIsOn={switchisOn6} />
          <Title value="Tagesschau" />
          {isOn6 && <FSButton fsElementId="ecns" />}
        </BlobPlayer>

        {/* Deutsche Welle */}
        <IframePlayer
          id="dwns"
          isActive={isOn5}
          url={"https://www.youtube.com/embed/LuKwFajn37U?autoplay=1&mute=0"}
        >
          <LSSwitcher isOn={isOn5} switchIsOn={switchisOn5} />
          <Title value="Deutsche Welle" />
          {isOn5 && <FSButton fsElementId="dwns" sx={{ right: 0, bottom: 0, p: 0 }} />}
        </IframePlayer>
      </RowWrapper>


      <RowWrapper>
        {/* Euronews */}
        <IframePlayer
          id="euns"
          isActive={isOn1}
          url={"https://www.youtube.com/embed/pykpO5kQJ98?autoplay=1&mute=0"}
        >
          <LSSwitcher isOn={isOn1} switchIsOn={switchIsOn1} />
          <Title value="Euronews" />
          {isOn1 && <FSButton fsElementId="euns" sx={{ right: 0, bottom: 0, p: 0 }} />}
        </IframePlayer>

        {/* Sky News */}
        <IframePlayer
          id="skns"
          isActive={isOn2}
          url={"https://www.youtube.com/embed/YDvsBbKfLPA?autoplay=1&mute=0"}
        >
          <LSSwitcher isOn={isOn2} switchIsOn={switchisOn2} />
          <Title value="Sky News" />
          {isOn2 && <FSButton fsElementId="skns" sx={{ right: 0, bottom: 0, p: 0 }} />}
        </IframePlayer>
      </RowWrapper>


      <RowWrapper>
        {/* Bloomberg Business News */}
        <IframePlayer
          id="blbn"
          isActive={isOn3}
          url={"https://www.youtube.com/embed/iEpJwprxDdk?autoplay=1&mute=0"}
        >
          <LSSwitcher isOn={isOn3} switchIsOn={switchisOn3} />
          <Title value="Bloomberg Business News" />
          {isOn3 && <FSButton fsElementId="blbn" sx={{ right: 0, bottom: 0, p: 0 }} />}
        </IframePlayer>

        {/* FRANCE 24 */}
        <IframePlayer
          id="frns"
          isActive={isOn4}
          url={"https://www.youtube.com/embed/Ap-UM1O9RBU?autoplay=1&mute=0"}
        >
          <LSSwitcher isOn={isOn4} switchIsOn={switchisOn4} />
          <Title value="FRANCE 24" />
          {isOn4 && <FSButton fsElementId="frns" sx={{ right: 0, bottom: 0, p: 0 }} />}
        </IframePlayer>
      </RowWrapper>

    </>
  );
}



export default News;