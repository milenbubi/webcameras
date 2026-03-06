import { Media } from "./media/Media";
import RowWrapper from "../Components/RowWrapper";



function Djala() {
  return (  // Ђала
    <RowWrapper>
      <Media.BlobVideo
        id="tth"
        // url="https://live.uzivokamere.com/djala1"  // backup
        url="https://kamere.mup.gov.rs:4443/Djala/djala1.m3u8"
        title="Ђала - към Унгария"
      />

      <Media.BlobVideo
        id="tts"
        // url="https://live.uzivokamere.com/djala2"  // backup
        url="https://kamere.mup.gov.rs:4443/Djala/djala2.m3u8"
        title="Ђала - към Сърбия"
      />
    </RowWrapper>
  );
}



export default Djala;