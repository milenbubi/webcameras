import { Media } from "../media/Media";
import { Cams, composeCamLabel, getCamCount, getCamSource } from "../utils/cams";

const cams: Cams = {
  // 0: { source: "01", label: "700 м преди ГКПП" },
  1: { source: "02", label: "800 м преди ГКПП" },
  2: { source: "114", label: "OMV" }
};


function getCamUrl(streamIndex: number) {
  const source = getCamSource(cams, streamIndex);
  return `https://cdn.uab.org/images/cctv/images/cctv/cctv_${source}/cctv.jpg?`;
}

function getCamLabel(streamIndex: number) {
  return composeCamLabel("Кулата", cams, streamIndex);
}



function KulataCams() {
  return (
    <Media.SwitchableImageImpl
      id="cklt"
      urlComposer={getCamUrl}
      title={getCamLabel}
      camCount={getCamCount(cams)}
      refreshSeconds={30}
    />
  );
}



export default KulataCams;