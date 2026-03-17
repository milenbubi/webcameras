import { Media } from "../media/Media";
import { Cams, getCamCount, getCamSource } from "../utils/cams";

const kkbCams: Cams = {
  1: { source: "https://kamere.mup.gov.rs:4443/gradina/gradina2.m3u8" },
  2: { source: "https://kamere.amss.org.rs/gradina2/gradina2.m3u8" }
};

const kksCams: Cams = {
  1: { source: "https://kamere.mup.gov.rs:4443/gradina/gradina1.m3u8" },
  2: { source: "https://kamere.amss.org.rs/gradina1/gradina1.m3u8" }
};



function Kalotina() {
  return (  // Калотина
    <>
      <Media.SwitchableBlobVideo
        id="kblg"
        urlComposer={index => getCamSource(kkbCams, index)}
        title="Калотина - посока България"
        camCount={getCamCount(kkbCams)}
      />

      <Media.SwitchableBlobVideo
        id="ksrb"
        urlComposer={index => getCamSource(kksCams, index)}
        title="Калотина - посока Сърбия"
        camCount={getCamCount(kksCams)}
      />
    </>
  );
}



export default Kalotina;