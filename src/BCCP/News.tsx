import { Stack } from "@mui/material";
import Title from "../Components/Title";
import Centered from "../Utils/Centered";
import FSButton from "../Components/FSButton";
import CameraBlobPlayer from "./CameraBlobPlayer";
import LSSwitcher, { useBooleanLS } from "../Utils/hooks";



function News() {
  const { isBooleanLSOn: isOn1, switchBooleanLS: switchIsOn1 } = useBooleanLS("euns");
  const { isBooleanLSOn: isOn2, switchBooleanLS: switchisOn2 } = useBooleanLS("skns");
  const { isBooleanLSOn: isOn3, switchBooleanLS: switchisOn3 } = useBooleanLS("blbn");
  const { isBooleanLSOn: isOn4, switchBooleanLS: switchisOn4 } = useBooleanLS("frns");
  const { isBooleanLSOn: isOn5, switchBooleanLS: switchisOn5 } = useBooleanLS("dwns");
  const { isBooleanLSOn: isOn6, switchBooleanLS: switchisOn6 } = useBooleanLS("ecns");


  return (  // News
    <Stack gap={6} pt={3} width="100%" alignItems="center">


      <Centered gap={6} maxHeight="100%" width="100%" flexWrap="wrap">
        {/* Евроком */}
        <Centered id="ecns" sx={{ width: 1, maxHeight: 1, position: "relative", maxWidth: 700 }}>
          <CameraBlobPlayer
            url="https://live.ecomservice.bg/hls"
            m3u8File="stream.m3u8"
            isActive={isOn6}
          />
          <LSSwitcher isOn={isOn6} switchIsOn={switchisOn6} />
          <Title value="Евроком" />
          {isOn6 && <FSButton fsElementId="ecns" />}
        </Centered>

        {/* Deutsche Welle */}
        <Centered id="dwns" sx={{ width: 1, maxHeight: 1, position: "relative", maxWidth: 700 }}>
          <iframe
            src={isOn5 ? `https://www.youtube.com/embed/LuKwFajn37U?autoplay=1&mute=0` : ""}
            style={{ border: isOn5 ? "none" : "2px solid white", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
            allow="autoplay; encrypted-media"
          />
          <LSSwitcher isOn={isOn5} switchIsOn={switchisOn5} />
          <Title value="Deutsche Welle" />
          {isOn5 && <FSButton fsElementId="dwns" sx={{ right: 0, bottom: 0, p: 0 }} />}
        </Centered>
      </Centered>


      <Centered gap={6} maxHeight="100%" width="100%" flexWrap="wrap">
        {/* Euronews */}
        <Centered id="euns" sx={{ width: 1, maxHeight: 1, position: "relative", maxWidth: 700 }}>
          <iframe
            src={isOn1 ? `https://www.youtube.com/embed/pykpO5kQJ98?autoplay=1&mute=0` : ""}
            style={{ border: isOn1 ? "none" : "2px solid white", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
            allow="autoplay; encrypted-media"
          />
          <LSSwitcher isOn={isOn1} switchIsOn={switchIsOn1} />
          <Title value="Euronews" />
          {isOn1 && <FSButton fsElementId="euns" sx={{ right: 0, bottom: 0, p: 0 }} />}
        </Centered>

        {/* Sky News */}
        <Centered id="skns" sx={{ width: 1, maxHeight: 1, position: "relative", maxWidth: 700 }}>
          <iframe
            src={isOn2 ? `https://www.youtube.com/embed/YDvsBbKfLPA?autoplay=1&mute=0` : ""}
            style={{ border: isOn2 ? "none" : "2px solid white", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
            allow="autoplay; encrypted-media"
          />
          <LSSwitcher isOn={isOn2} switchIsOn={switchisOn2} />
          <Title value="Sky News" />
          {isOn2 && <FSButton fsElementId="skns" sx={{ right: 0, bottom: 0, p: 0 }} />}
        </Centered>
      </Centered>


      <Centered gap={6} maxHeight="100%" width="100%" flexWrap="wrap">
        {/* Bloomberg Business News */}
        <Centered id="blbn" sx={{ width: 1, maxHeight: 1, position: "relative", maxWidth: 700 }}>
          <iframe
            src={isOn3 ? `https://www.youtube.com/embed/iEpJwprxDdk?autoplay=1&mute=0` : ""}
            style={{ border: isOn3 ? "none" : "2px solid white", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
            allow="autoplay; encrypted-media"
          />
          <LSSwitcher isOn={isOn3} switchIsOn={switchisOn3} />
          <Title value="Bloomberg Business News" />
          {isOn3 && <FSButton fsElementId="blbn" sx={{ right: 0, bottom: 0, p: 0 }} />}
        </Centered>

        {/* FRANCE 24 */}
        <Centered id="frns" sx={{ width: 1, maxHeight: 1, position: "relative", maxWidth: 700 }}>
          <iframe
            src={isOn4 ? `https://www.youtube.com/embed/Ap-UM1O9RBU?autoplay=1&mute=0` : ""}
            style={{ border: isOn4 ? "none" : "2px solid white", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
            allow="autoplay; encrypted-media"
          />
          <LSSwitcher isOn={isOn4} switchIsOn={switchisOn4} />
          <Title value="FRANCE 24" />
          {isOn4 && <FSButton fsElementId="frns" sx={{ right: 0, bottom: 0, p: 0 }} />}
        </Centered>
      </Centered>


    </Stack>
  );
}



export default News;