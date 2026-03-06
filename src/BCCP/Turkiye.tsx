import { Media } from "./media/Media";
import RowWrapper from "../Components/RowWrapper";

// https://www.canlimobeseizle.com/turkiye-sinir-kapilari-canli-izle
// Cameras from all Turkish border checkpoints.

const getLesovoSource = (streamIndex: number) => {
  switch (streamIndex) {
    case 1: return "6";
    case 2: return "5";
    case 3: return "12";
    default: return "6";
  }
};

const getMTSource = (streamIndex: number) => {
  switch (streamIndex) {
    case 1: return "11";
    case 2: return "13";
    default: return "13";
  }
};

const getCPSource = (streamIndex: number) => {
  switch (streamIndex) {
    case 1: return "8";
    case 2: return "7";
    default: return "8";
  }
};


function Turkiye() {
  return (  // Турция
    <>
      <RowWrapper>
        {/* Капитан Андреево */}
        <Media.SwitchableImageImpl
          id="kpkl" stretchToFit
          urlComposer={index => `https://canlimobeseizle.com/wp-content/uploads/custom-images/resim${index}.jpg`}
          title="Капитан Андреево" camCount={4}
          refreshSeconds={600} showUpdateInMinutes
          fsBtnSx={{ bottom: 45 }}
        />

        {/* Лесово */}
        <Media.SwitchableImageImpl
          id="lesv" stretchToFit
          urlComposer={index => `https://canlimobeseizle.com/wp-content/uploads/custom-images/resim${getLesovoSource(index)}.jpg`}
          title="Лесово" camCount={3}
          refreshSeconds={600} showUpdateInMinutes
          fsBtnSx={{ bottom: 45 }}
        />
      </RowWrapper>


      <RowWrapper>
        {/* Малко Търново */}
        <Media.SwitchableImageImpl
          id="mtnv" stretchToFit
          urlComposer={index => `https://canlimobeseizle.com/wp-content/uploads/custom-images/resim${getMTSource(index)}.jpg`}
          title="Малко Търново" camCount={2}
          refreshSeconds={600} showUpdateInMinutes
          fsBtnSx={{ bottom: 45 }}
        />

        {/* Черекьой - Пазаркуле */}
        <Media.SwitchableImageImpl
          id="chpk" stretchToFit
          urlComposer={index => `https://canlimobeseizle.com/wp-content/uploads/custom-images/resim${getCPSource(index)}.jpg`}
          title="Черекьой - Пазаркуле" camCount={2}
          refreshSeconds={600} showUpdateInMinutes
          fsBtnSx={{ bottom: 45 }}
        />
      </RowWrapper>
    </>
  );
}



export default Turkiye;