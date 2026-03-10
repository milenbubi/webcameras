import { Media } from "./media/Media";
import RowWrapper from "../Components/RowWrapper";
import { Cams, getCam, getCamCount } from "./utils/cams";

const hkuCams: Cams = {
  1: { source: "https://kamere.amss.org.rs/horgos2/horgos2.m3u8" },
  2: { source: "https://kamere.mup.gov.rs:4443/horgos/horgos2.m3u8" }
};

const hksCams: Cams = {
  1: { source: "https://kamere.amss.org.rs/horgos1/horgos1.m3u8" },
  2: { source: "https://kamere.mup.gov.rs:4443/horgos/horgos1.m3u8" }
};



function Horgos() {
  return (  // Хоргош
    <RowWrapper>
      <Media.SwitchableBlobVideo
        id="hth"
        urlComposer={index => getCam(hkuCams, index).source}
        title="Хоргош - към Унгария"
        camCount={getCamCount(hkuCams)}
        chCamBtnSx={{ top: 20 }}
      />

      <Media.SwitchableBlobVideo
        id="hts"
        urlComposer={index => getCam(hksCams, index).source}
        title="Хоргош - към Сърбия"
        camCount={getCamCount(hksCams)}
        chCamBtnSx={{ top: 20 }}
      />
    </RowWrapper>
  );
}



export default Horgos;