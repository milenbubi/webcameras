import { Media } from "./media/Media";
import RowWrapper from "../Components/RowWrapper";



function Horgos() {
  return (  // Хоргош
    <RowWrapper>
      <Media.SwitchableBlobVideo
        id="hth"
        urlComposer={index => (
          index === 1
            ? "https://kamere.amss.org.rs/horgos2/horgos2.m3u8"
            : "https://kamere.mup.gov.rs:4443/horgos/horgos2.m3u8"
        )}
        title="Хоргош - към Унгария"
        camCount={2} chCamBtnSx={{ top: 20 }}
      />

      <Media.SwitchableBlobVideo
        id="hts"
        urlComposer={index => (
          index === 1
            ? "https://kamere.amss.org.rs/horgos1/horgos1.m3u8"
            : "https://kamere.mup.gov.rs:4443/horgos/horgos1.m3u8"
        )}
        title="Хоргош - към Сърбия"
        camCount={2} chCamBtnSx={{ top: 20 }}
      />
    </RowWrapper>
  );
}



export default Horgos;