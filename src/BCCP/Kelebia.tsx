import { Media } from "./media/Media";
import RowWrapper from "../Components/RowWrapper";



function Kelebia() {
  return (  // Келебия
    <RowWrapper>
      <Media.BlobVideo
        id="kehu"
        // url="https://live.uzivokamere.com/kelebija2/index.m3u8"  //backup
        url="https://kamere.mup.gov.rs:4443/Kelebija/kelebija2.m3u8"
        title="Келебия - към Унгария"
      />

      <Media.BlobVideo
        id="kese"
        // url="https://live.uzivokamere.com/kelebija1/index.m3u8"  //backup
        url="https://kamere.mup.gov.rs:4443/Kelebija/kelebija1.m3u8"
        title="Келебия - към Сърбия"
      />
    </RowWrapper>
  );
}



export default Kelebia;