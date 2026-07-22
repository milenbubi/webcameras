import { Media } from "./media/Media";
import RowWrapper from "../Components/RowWrapper";
import { Cams, getCamCount, getCamSource } from "./utils/cams";

const kaCams: Cams = {
  1: { source: "kapikule1" },
  2: { source: "kapikule4" },
  3: { source: "kapikule3" },
  4: { source: "kapikule2" }
};

const lesovoCams: Cams = {
  1: { source: "hamzabeyli1" },
  2: { source: "hamzabeyli2" },
  3: { source: "hamzabeyli3" }
};

const mtCams: Cams = {
  1: { source: "derekoy1" },
  2: { source: "derekoy2" }
};

const cpCams: Cams = {
  2: { source: "pazarkule2" },
  1: { source: "pazarkule1" }
};

function getCamUrl(cams: Cams, index: number) {
  const source = getCamSource(cams, index);
  return `https://mobesekamerasi.com/?mobese_camera=${source}`;
}



function Turkiye_old() {
  return (  // Турция
    <>
      <RowWrapper>
        {/* Капитан Андреево */}
        <Media.SwitchableImage
          id="kpklo"
          urlComposer={index => getCamUrl(kaCams, index)}
          title="Капитан Андреево" camCount={getCamCount(kaCams)}
          refreshSeconds={600} showUpdateInMinutes
          fsBtnSx={{ bottom: 45 }}
        />

        {/* Лесово */}
        <Media.SwitchableImage
          id="lesvo"
          urlComposer={index => getCamUrl(lesovoCams, index)}
          title="Лесово" camCount={getCamCount(lesovoCams)}
          refreshSeconds={600} showUpdateInMinutes
          fsBtnSx={{ bottom: 45 }}
        />
      </RowWrapper>


      <RowWrapper>
        {/* Малко Търново */}
        <Media.SwitchableImage
          id="mtnvo"
          urlComposer={index => getCamUrl(mtCams, index)}
          title="Малко Търново" camCount={getCamCount(mtCams)}
          refreshSeconds={600} showUpdateInMinutes
          fsBtnSx={{ bottom: 45 }}
        />

        {/* Черекьой - Пазаркуле */}
        <Media.SwitchableImage
          id="chpko"
          urlComposer={index => getCamUrl(cpCams, index)}
          title="Черекьой - Пазаркуле" camCount={getCamCount(cpCams)}
          refreshSeconds={600} showUpdateInMinutes
          fsBtnSx={{ bottom: 45 }}
        />
      </RowWrapper>
    </>
  );
}



export default Turkiye_old;