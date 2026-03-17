import { Media } from "./media/Media";
import RowWrapper from "../Components/RowWrapper";
import { Cams, getCamCount, getCamSource } from "./utils/cams";

// https://www.canlimobeseizle.com/turkiye-sinir-kapilari-canli-izle
// Cameras from all Turkish border checkpoints.

const kaCams: Cams = {
  1: { source: "1" },
  2: { source: "2" },
  3: { source: "3" },
  4: { source: "4" }
};

const lesovoCams: Cams = {
  1: { source: "6" },
  2: { source: "5" },
  3: { source: "12" }
};

const mtCams: Cams = {
  1: { source: "11" },
  2: { source: "13" }
};

const cpCams: Cams = {
  1: { source: "8" },
  2: { source: "7" }
};

function getCamUrl(cams: Cams, index: number) {
  const source = getCamSource(cams, index);
  return `https://canlimobeseizle.com/wp-content/uploads/custom-images/resim${source}.jpg`;
}


function Turkiye() {
  return (  // Турция
    <>
      <RowWrapper>
        {/* Капитан Андреево */}
        <Media.SwitchableImageImpl
          id="kpkl" stretchToFit
          urlComposer={index => getCamUrl(kaCams, index)}
          title="Капитан Андреево" camCount={getCamCount(kaCams)}
          refreshSeconds={600} showUpdateInMinutes
          fsBtnSx={{ bottom: 45 }}
        />

        {/* Лесово */}
        <Media.SwitchableImageImpl
          id="lesv" stretchToFit
          urlComposer={index => getCamUrl(lesovoCams, index)}
          title="Лесово" camCount={getCamCount(lesovoCams)}
          refreshSeconds={600} showUpdateInMinutes
          fsBtnSx={{ bottom: 45 }}
        />
      </RowWrapper>


      <RowWrapper>
        {/* Малко Търново */}
        <Media.SwitchableImageImpl
          id="mtnv" stretchToFit
          urlComposer={index => getCamUrl(mtCams, index)}
          title="Малко Търново" camCount={getCamCount(mtCams)}
          refreshSeconds={600} showUpdateInMinutes
          fsBtnSx={{ bottom: 45 }}
        />

        {/* Черекьой - Пазаркуле */}
        <Media.SwitchableImageImpl
          id="chpk" stretchToFit
          urlComposer={index => getCamUrl(cpCams, index)}
          title="Черекьой - Пазаркуле" camCount={getCamCount(cpCams)}
          refreshSeconds={600} showUpdateInMinutes
          fsBtnSx={{ bottom: 45 }}
        />
      </RowWrapper>
    </>
  );
}



export default Turkiye;