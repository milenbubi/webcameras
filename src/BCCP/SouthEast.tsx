import { Media } from "./media/Media";
import RowWrapper from "../Components/RowWrapper";

const getDgrdSource = (streamIndex: number) => {
  switch (streamIndex) {
    case 1: return "krastovishte-3-mart-1";
    case 2: return "kula-pazar";
    case 3: return "park-marica";
    case 4: return "usm";
    case 5: return "kragovo";
    default: return "";
  }
};

const getHaskSource = (streamIndex: number) => {
  switch (streamIndex) {
    case 1: return 1;
    case 2: return 5;
    case 3: return 2;
    default: return "";
  }
};



function SouthEast() {
  return (  // Югоизточна България
    <>
      <RowWrapper>
        <Media.SwitchableBlobVideo
          id="dgrd"
          urlComposer={index => `http://office.dimitrovgrad.ddns.bulsat.com:82/livecam/media/${getDgrdSource(index)}/output.m3u8`}
          title="Димитровград"
          camCount={5}
        />

        <Media.SwitchableBlobVideo
          id="hask"
          urlComposer={index => `https://haskovo.net/tvs/cam${getHaskSource(index)}.m3u8`}
          title="Хасково"
          camCount={3}
        />
      </RowWrapper>
    </>
  );
}



export default SouthEast;