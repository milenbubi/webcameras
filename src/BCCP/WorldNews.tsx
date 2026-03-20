import { Media } from "./media/Media";
import RowWrapper from "../Components/RowWrapper";
import { Cams, getCamCount, getCamLabel, getCamSource } from "./utils/cams";

const ytCams: Cams = {
  1: { source: "LuKwFajn37U", label: "Deutsche Welle" },
  2: { source: "pykpO5kQJ98", label: "Euronews" },
  3: { source: "YDvsBbKfLPA", label: "Sky News" },
  4: { source: "iEpJwprxDdk", label: "Bloomberg Business News" },
  5: { source: "Ap-UM1O9RBU", label: "FRANCE 24" },
  6: { source: "gCNeDWCI0vo", label: "Al Jazeera English" }
};


function getCamUrlYT(streamIndex: number) {
  return `https://www.youtube.com/embed/${getCamSource(ytCams, streamIndex)}`;
}

function getCamLabelYT(streamIndex: number) {
  return getCamLabel(ytCams, streamIndex);
}



function WorldNews() {
  return (  // World news
    <RowWrapper>
      {/* Tagesschau */}
      <Media.BlobVideo
        id="ecns"
        url="https://tagesschau.akamaized.net/hls/live/2020115/tagesschau/tagesschau_1/master.m3u8"
        title="Tagesschau"
        withSound
      />

      {/* YouTube news media */}
      <Media.SwitchableIframeVideo
        id="ytns"
        urlComposer={getCamUrlYT}
        title={getCamLabelYT}
        camCount={getCamCount(ytCams)}
        withSound
      />
    </RowWrapper>
  );
}



export default WorldNews;