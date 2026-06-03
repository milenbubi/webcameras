import { Media } from "../media/Media";
import { Cams, composeCamLabel, getCamCount, getCamSource, getProxiedM3U8 } from "../utils/cams";

const cams: Cams = {
  1: { source: "3", label: "към Румъния" },
  2: { source: "2", label: "към Тутракан" },
  3: { source: "4", label: "към България" }
};


function getCamUrl(streamIndex: number) {
  const source = getCamSource(cams, streamIndex);
  return getProxiedM3U8(`http://s19.r145.nbis.net:8081/or-bul-cam${source}/tracks-v1/index.fmp4.m3u8`);
}

function getCamLabel(streamIndex: number) {
  return composeCamLabel("Русе, Дунав мост", cams, streamIndex);
}



function DunavBridge1() {
  return (  // Дунав мост 1
    <Media.SwitchableBlobVideo
      id="dgrd"
      urlComposer={getCamUrl}
      title={getCamLabel}
      camCount={getCamCount(cams)}
    />
  );
}



export default DunavBridge1;