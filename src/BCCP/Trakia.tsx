import { Media } from "./media/Media";
import RowWrapper from "../Components/RowWrapper";
import { Cams, composeCamLabel, getCamCount, getCamSource, getProxiedM3U8 } from "./utils/cams";

const dgrCams: Cams = {
  1: { source: "krastovishte-3-mart-1", label: 'кино "Химик"', },
  2: { source: "kula-pazar", label: "кула към пазара" },
  3: { source: "park-marica", label: "парк Марица" },
  4: { source: "usm", label: "към Хасково" },
  5: { source: "kragovo", label: "кръгово" }
};

const haskCams: Cams = {
  1: { source: "12", label: "часовникова кула" },
  2: { source: "14", label: "обреден дом" },
  3: { source: "04", label: 'вход от АМ "Марица"' },
  4: { source: "28", label: "изход към Кърджали" },
  5: { source: "02", label: 'бул. "Съединение"' },
  6: { source: "20", label: "уличка" }
};


const etvCams: Cams = {
  1: { source: "05", label: "Смолян" },
  2: { source: "07", label: "Димитровград" },
  3: { source: "32", label: "Харманли" },
  4: { source: "33", label: "Смолян, табелата с мечето" },
  5: { source: "19", label: "Дълбок Извор" },
  6: { source: "30", label: "Кърджали" },
  7: { source: "11", label: "Свиленград" },
  8: { source: "23", label: "Симеоновград" },
  9: { source: "09", label: "Асеновград" },
  10: { source: "13", label: "Любимец" },
  11: { source: "27", label: "Капитан Андреево" }
};

// https://haskovo.net/cam/cam_e006/video.m3u8  - Харманли, Т маркет
// https://haskovo.net/cam/cam_e010/video.m3u8  - Може би Пловдив?
// https://haskovo.net/cam/cam_e029/video.m3u8  - Някакъв път?
// https://haskovo.net/cam/cam_e031/video.m3u8  - Площадче с големи ели


function getCamUrlDgr(streamIndex: number) {
  const source = getCamSource(dgrCams, streamIndex);
  return getProxiedM3U8(`http://office.dimitrovgrad.ddns.bulsat.com:82/livecam/media/${source}/output.m3u8`);
}

function getCamLabelDgr(streamIndex: number) {
  return composeCamLabel("Димитровград", dgrCams, streamIndex);
}

function getCamUrlHask(streamIndex: number) {
  const source = getCamSource(haskCams, streamIndex);
  return getProxiedM3U8(`https://haskovo.net/cam/cam_e0${source}/video.m3u8`);
  // return `https://haskovo.net/tvs/cam${source}.m3u8`;
}

function getCamLabelHask(streamIndex: number) {
  return composeCamLabel("Хасково", haskCams, streamIndex);
}

function getCamUrlEtv(streamIndex: number) {
  const source = getCamSource(etvCams, streamIndex);
  return getProxiedM3U8(`https://haskovo.net/cam/cam_e0${source}/video.m3u8`);
}

function getCamLabelEtv(streamIndex: number) {
  return composeCamLabel("eTV", etvCams, streamIndex);
}


function Trakia() {
  return (  // Тракия, Южен регион
    <>
      <RowWrapper>
        {/* Димитровград */}
        <Media.SwitchableBlobVideo
          id="dgrd"
          urlComposer={getCamUrlDgr}
          title={getCamLabelDgr}
          camCount={getCamCount(dgrCams)}
        />

        {/* Първомай */}
        <Media.BlobVideo
          id="prwm"
          url={getProxiedM3U8("https://haskovo.net/cam/cam_e008/video.m3u8")}
          title="Първомай, кв.Дебър"
          withSound
        />
      </RowWrapper>


      <RowWrapper>
        {/* Хасково */}
        <Media.SwitchableBlobVideo
          id="hask"
          urlComposer={getCamUrlHask}
          title={getCamLabelHask}
          camCount={getCamCount(haskCams)}
        />

        {/* eTV камери */}
        <Media.SwitchableBlobVideo
          id="etv"
          urlComposer={getCamUrlEtv}
          title={getCamLabelEtv}
          camCount={getCamCount(etvCams)}
        />
      </RowWrapper>


      <RowWrapper>
        {/* Момчилград */}
        <Media.IframeVideo
          id="mmlg"
          url="https://rtsp.me/embed/zQ3neeGn"
          title="Момчилград"
        />

        {/* Ардино */}
        <Media.IframeVideo
          id="ardn"
          url="https://cloud.pavlin.info/streams/stream.html?src=camera5"
          title="Ардино"
        />
      </RowWrapper>
    </>
  );
}



export default Trakia;