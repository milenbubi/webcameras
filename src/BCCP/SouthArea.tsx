import { Media } from "./media/Media";
import RowWrapper from "../Components/RowWrapper";
import { Cams, composeCamLabel, getCamCount, getCamSource, getProxiedM3U8 } from "./utils/cams";

const dgrCams: Cams = {
  1: { source: "krastovishte-3-mart-1", label: 'кино "Химик"' },
  2: { source: "kula-pazar", label: "кула към пазара" },
  3: { source: "park-marica", label: "парк Марица" },
  4: { source: "usm", label: "към Хасково" },
  5: { source: "kragovo", label: "кръгово" }
};

const haskCams: Cams = {
  1: { source: "1", label: "часовникова кула" },
  2: { source: "2", label: 'бул. "Съединение"' },
  3: { source: "5", label: 'вход от АМ "Марица"' },
  4: { source: "6", label: "изход към Кърджали" }
};


function getCamUrlDgr(streamIndex: number) {
  const source = getCamSource(dgrCams, streamIndex);
  return getProxiedM3U8(`http://office.dimitrovgrad.ddns.bulsat.com:82/livecam/media/${source}/output.m3u8`);
}

function getCamLabelDgr(streamIndex: number) {
  return composeCamLabel("Димитровград", dgrCams, streamIndex);
}

function getCamUrlHask(streamIndex: number) {
  const source = getCamSource(haskCams, streamIndex);
  return `https://haskovo.net/tvs/cam${source}.m3u8`;
  // return `http://195.24.89.20/tvs/cam${source}.m3u8`;
}

function getCamLabelHask(streamIndex: number) {
  return composeCamLabel("Хасково", haskCams, streamIndex);
}



function SouthArea() {
  return (  // Южен регион
    <>
      <RowWrapper>
        <Media.SwitchableBlobVideo
          id="dgrd"
          urlComposer={getCamUrlDgr}
          title={getCamLabelDgr}
          camCount={getCamCount(dgrCams)}
        />

        <Media.SwitchableBlobVideo
          id="hask"
          urlComposer={getCamUrlHask}
          title={getCamLabelHask}
          camCount={getCamCount(haskCams)}
        />
      </RowWrapper>


      <RowWrapper>
        <Media.IframeVideo
          id="mmlg"
          url="https://rtsp.me/embed/zQ3neeGn"
          title="Момчилград"
        />

        <Media.IframeVideo
          id="ardn"
          url="https://cloud.pavlin.info/streams/stream.html?src=camera5"
          title="Ардино"
        />
      </RowWrapper>
    </>
  );
}



export default SouthArea;