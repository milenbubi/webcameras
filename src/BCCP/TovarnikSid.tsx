import { Media } from "./media/Media";
import RowWrapper from "../Components/RowWrapper";



function TovarnikSid() {
  return (
    <>
      {/* Товарник  */}
      <RowWrapper>
        <Media.Image
          id="tvks"
          url="https://m.hak.hr/cam.asp?id=419"
          title="Товарник - към Сърбия"
          refreshSeconds={10}
        />

        <Media.Image
          id="tvkh"
          title="Товарник - към Хърватия"
          url="https://m.hak.hr/cam.asp?id=420"
          refreshSeconds={10}
        />
      </RowWrapper>


      {/* Шид  */}
      <RowWrapper>
        <Media.BlobVideo
          id="sks"
          url="https://kamere.mup.gov.rs:4443/Sid/sid1.m3u8"
          title="Шид - към Сърбия"
        />

        <Media.BlobVideo
          id="skh"
          url="https://kamere.mup.gov.rs:4443/Sid/sid2.m3u8"
          title="Шид - към Хърватия"
        />
      </RowWrapper>
    </>
  );
}



export default TovarnikSid;