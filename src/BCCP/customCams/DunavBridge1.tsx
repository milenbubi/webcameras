import { Media } from "../media/Media";
import { Cams, composeCamLabel, getCamCount, getCamSource, getProxiedM3U8 } from "../utils/cams";

const rousseCams: Cams = {
  1: { source: "3", label: "към Румъния" },
  2: { source: "2", label: "към Тутракан" },
  3: { source: "4", label: "към България" }
};


function getCamUrlRousse(streamIndex: number) {
  const source = getCamSource(rousseCams, streamIndex);
  return getProxiedM3U8(`http://s19.r145.nbis.net:8081/or-bul-cam${source}/tracks-v1/index.fmp4.m3u8`);
}

function getCamLabelRousse(streamIndex: number) {
  return composeCamLabel("Русе, Дунав мост", rousseCams, streamIndex);
}



function DunavBridge1() {
  return (  // Дунав мост 1
    <Media.SwitchableBlobVideo
      id="dgrd"
      urlComposer={getCamUrlRousse}
      title={getCamLabelRousse}
      camCount={getCamCount(rousseCams)}
    />
  );
}



export default DunavBridge1;