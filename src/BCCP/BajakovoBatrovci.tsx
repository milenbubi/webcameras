import { Media } from "./media/Media";
import RowWrapper from "../Components/RowWrapper";
import { Cams, getCamCount, getCamSource } from "./utils/cams";

const bjToSrbCams: Cams = {
  1: { source: "1" },
  2: { source: "3" }
};

const bjToHrCams: Cams = {
  1: { source: "2" }
};

function getBjCamUrl(cams: Cams, index: number) {
  const source = getCamSource(cams, index);
  return `https://m.hak.hr/cam.asp?id=${source}`;
}


const btToSrbCams: Cams = {
  1: { source: "https://kamere.mup.gov.rs:4443/batrovci/batrovci1.m3u8" },
  2: { source: "https://kamere.amss.org.rs/batrovci1/batrovci1.m3u8" }
};

const btToHrCams: Cams = {
  1: { source: "https://kamere.mup.gov.rs:4443/batrovci/batrovci2.m3u8" },
  2: { source: "https://kamere.amss.org.rs/batrovci2/batrovci2.m3u8" }
};



function BajakovoBatrovci() {
  return (
    <>
      {/* Баяково  */}
      <RowWrapper>
        <Media.SwitchableImage
          id="bjks"
          urlComposer={index => getBjCamUrl(bjToSrbCams, index)}
          title="Баяково - към Сърбия"
          camCount={getCamCount(bjToSrbCams)}
          chCamBtnSx={{ top: 20 }}
          refreshSeconds={15}
        />

        <Media.Image
          id="bjkh"
          title="Баяково - към Хърватия"
          url={getBjCamUrl(bjToHrCams, 1)}
          refreshSeconds={10}
        />
      </RowWrapper>


      {/* Батровци  */}
      <RowWrapper>
        <Media.SwitchableBlobVideo
          id="btks"
          urlComposer={index => getCamSource(btToSrbCams, index)}
          title="Батровци - към Сърбия"
          camCount={getCamCount(btToSrbCams)}
          chCamBtnSx={{ top: 20 }}
        />

        <Media.SwitchableBlobVideo
          id="btkh"
          urlComposer={index => getCamSource(btToHrCams, index)}
          title="Батровци - към Хърватия"
          camCount={getCamCount(btToHrCams)}
          chCamBtnSx={{ top: 20 }}
        />
      </RowWrapper>
    </>
  );
}



export default BajakovoBatrovci;