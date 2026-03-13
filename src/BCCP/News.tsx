import { Media } from "./media/Media";
import RowWrapper from "../Components/RowWrapper";
import { Cams, getCam, getCamCount, getCamLabel } from "./utils/cams";

const ytCams: Cams = {
  1: { source: "LuKwFajn37U", label: "Deutsche Welle" },
  2: { source: "pykpO5kQJ98", label: "Euronews" },
  3: { source: "YDvsBbKfLPA", label: "Sky News" },
  4: { source: "iEpJwprxDdk", label: "Bloomberg Business News" },
  5: { source: "Ap-UM1O9RBU", label: "FRANCE 24" }
};


function getCamUrlYT(streamIndex: number) {
  const source = getCam(ytCams, streamIndex).source;
  return `https://www.youtube.com/embed/${source}`;
}

function getCamLabelYT(streamIndex: number) {
  return getCamLabel(ytCams, streamIndex);
}



function News() {
  return (  // News
    <RowWrapper>
      {/* Tagesschau */}
      <Media.BlobVideo
        id="ecns"
        url="https://tagesschau.akamaized.net/hls/live/2020115/tagesschau/tagesschau_1/master.m3u8"
        title="Tagesschau"
      />

      {/* YouTube news media */}
      <Media.SwitchableIframeVideo
        id="ytns"
        urlComposer={getCamUrlYT}
        title={getCamLabelYT}
        camCount={getCamCount(ytCams)}
      />
    </RowWrapper>
  );
}



export default News;