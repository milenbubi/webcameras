import { Media } from "../BCCP/media/Media";

const getSource = (streamKulata: number) => {
  switch (streamKulata) {
    case 1: return "01";
    case 2: return "02";
    case 3: return "114";
    default: return "01";
  }
};

const getCamLabel = (streamKulata: number) => {
  switch (streamKulata) {
    case 1: return "700 м преди ГКПП";
    case 2: return "800 м преди ГКПП";
    case 3: return "OMV";
    default: return "... ";
  }
};



function KulataCams() {
  return (
    <Media.SwitchableImageImpl
      id="cklt"
      urlComposer={index => `https://cdn.uab.org/images/cctv/images/cctv/cctv_${getSource(index)}/cctv.jpg?`}
      title={index => `Кулата - ${getCamLabel(index)}`}
      camCount={3} refreshSeconds={1}
    />
  );
}



export default KulataCams;