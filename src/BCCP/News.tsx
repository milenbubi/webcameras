import RowWrapper from "../Components/RowWrapper";
import { useBooleanLS } from "../Utils/localStorage";
import BlobPlayer from "../Components/players/BlobPlayer";
import IframePlayer from "../Components/players/IframePlayer";



function News() {
  const { isBooleanLSOn: isOn1, toggleBooleanLS: toggleIsOn1 } = useBooleanLS("euns");
  const { isBooleanLSOn: isOn2, toggleBooleanLS: toggleIsOn2 } = useBooleanLS("skns");
  const { isBooleanLSOn: isOn3, toggleBooleanLS: toggleIsOn3 } = useBooleanLS("blbn");
  const { isBooleanLSOn: isOn4, toggleBooleanLS: toggleIsOn4 } = useBooleanLS("frns");
  const { isBooleanLSOn: isOn5, toggleBooleanLS: toggleIsOn5 } = useBooleanLS("dwns");
  const { isBooleanLSOn: isOn6, toggleBooleanLS: toggleIsOn6 } = useBooleanLS("ecns");


  return (  // News
    <>
      <RowWrapper>
        {/* Tagesschau */}
        <BlobPlayer
          id="ecns" isActive={isOn6}
          url="https://tagesschau.akamaized.net/hls/live/2020115/tagesschau/tagesschau_1/master.m3u8"
          onToggle={toggleIsOn6}
          title="Tagesschau"
        />

        {/* Deutsche Welle */}
        <IframePlayer
          id="dwns" isActive={isOn5}
          url={"https://www.youtube.com/embed/LuKwFajn37U?autoplay=1&mute=0"}
          onToggle={toggleIsOn5}
          title="Deutsche Welle"
        />
      </RowWrapper>


      <RowWrapper>
        {/* Euronews */}
        <IframePlayer
          id="euns" isActive={isOn1}
          url={"https://www.youtube.com/embed/pykpO5kQJ98?autoplay=1&mute=0"}
          onToggle={toggleIsOn1}
          title="Euronews"
        />

        {/* Sky News */}
        <IframePlayer
          id="skns" isActive={isOn2}
          url={"https://www.youtube.com/embed/YDvsBbKfLPA?autoplay=1&mute=0"}
          onToggle={toggleIsOn2}
          title="Sky News"
        />
      </RowWrapper>


      <RowWrapper>
        {/* Bloomberg Business News */}
        <IframePlayer
          id="blbn" isActive={isOn3}
          url={"https://www.youtube.com/embed/iEpJwprxDdk?autoplay=1&mute=0"}
          onToggle={toggleIsOn3}
          title="Bloomberg Business News"
        />

        {/* FRANCE 24 */}
        <IframePlayer
          id="frns" isActive={isOn4}
          url={"https://www.youtube.com/embed/Ap-UM1O9RBU?autoplay=1&mute=0"}
          onToggle={toggleIsOn4}
          title="FRANCE 24"
        />
      </RowWrapper>
    </>
  );
}



export default News;