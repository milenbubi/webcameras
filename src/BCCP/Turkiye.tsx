import { Cam } from "./utils/cams";
import { Media } from "./media/Media";
import RowWrapper from "../Components/RowWrapper";

// https://www.canlimobeseizle.com/turkiye-sinir-kapilari-canli-izle
// https://mobesekamerasi.com/sinir-kapilari/turkiye-sinir-kapisi
// https://trakya.iscoz.com/kapikule/yolcugiris.jpg
// Cameras from all Turkish border checkpoints.

const kaCams: Cam[] = [
  { source: "yolcugiris", label: "Вход към Турция" },
  { source: "edirnekapi", label: "Изход към Турция" },
  { source: "yolcucikis", label: "Вход към България" },
  { source: "yolcucikis1", label: "Изход към България" }
];

const lesovoCams: Cam[] = [
  { source: "yolcugiris", label: "Вход към Турция" },
  { source: "turkiyeyolu", label: "Изход към Турция" },
  { source: "yolcucikis", label: "Вход към България" }
];

const mtCams: Cam[] = [
  { source: "turkiyekapi", label: "Вход към Турция" },
  { source: "hudutkapi", label: "Вход към България" }
];

const cpCams: Cam[] = [
  { source: "yolcugiris", label: "Изход към Гърция" },
  { source: "yolcucikis", label: "Изход към Турция" }
];

function getCamUrl(prefix: string, source: string) {
  return `https://trakya.iscoz.com/${prefix}/${source}.jpg`;
}



function Turkiye() {
  return (  // Турция
    <>
      <RowWrapper sx={{ alignItems: "stretch", rowGap: 9, mb: 3 }}>
        {/* Капитан Андреево */}
        <Media.CameraLauncher
          cams={kaCams}
          urlComposer={source => getCamUrl("kapikule", source)}
          title="Капитан Андреево"
          refreshSeconds={720} showUpdateInMinutes
        />

        {/* Лесово */}
        <Media.CameraLauncher
          cams={lesovoCams}
          urlComposer={source => getCamUrl("hamzabeyli", source)}
          title="Лесово - Хамзабейли"
          refreshSeconds={720} showUpdateInMinutes
        />
      </RowWrapper>


      <RowWrapper sx={{ alignItems: "stretch", rowGap: 9 }}>
        {/* Малко Търново */}
        <Media.CameraLauncher
          cams={mtCams}
          urlComposer={source => getCamUrl("derekoy", source)}
          title="Малко Търново - Дерекьой"
          refreshSeconds={720} showUpdateInMinutes
        />

        {/* Черекьой - Пазаркуле */}
        <Media.CameraLauncher
          cams={cpCams}
          urlComposer={source => getCamUrl("pazarkule", source)}
          title="Черекьой - Пазаркуле"
          refreshSeconds={720} showUpdateInMinutes
        />
      </RowWrapper>
    </>
  );
}



export default Turkiye;