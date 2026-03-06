import APP from "../Utils/APP";
import { Media } from "./media/Media";
import KulataCams from "../Components/KulataCams";
import RowWrapper from "../Components/RowWrapper";



function Bulgaria() {
  return (  // България
    <>
      {/* Кулата */}
      {APP.IS_DEV_MODE && (
        <RowWrapper>
          <KulataCams />
        </RowWrapper>
      )}


      {/* Маказа */}
      <RowWrapper>
        <Media.IframeVideo
          id="mkrd"
          url="https://www.youtube.com/embed/ztW62j3-jl8"
          title="Маказа - посока Кърджали"
        />

        <Media.IframeVideo
          id="mgkp"
          url="https://www.youtube.com/embed/mLtxlaGgGfo?"
          title="Маказа - посока ГКПП"
        />
      </RowWrapper>


      {/* Калотина */}
      <RowWrapper>
        <Media.SwitchableBlobVideo
          id="kblg"
          urlComposer={index => (
            index === 1
              ? "https://kamere.mup.gov.rs:4443/gradina/gradina2.m3u8"
              : "https://kamere.amss.org.rs/gradina2/gradina2.m3u8"
          )}
          title="Калотина - посока България"
          camCount={2}
        />

        <Media.SwitchableBlobVideo
          id="ksrb"
          urlComposer={index => (
            index === 1
              ? "https://kamere.mup.gov.rs:4443/gradina/gradina1.m3u8"
              : "https://kamere.amss.org.rs/gradina1/gradina1.m3u8"
          )}
          title="Калотина - посока Сърбия"
          camCount={2}
        />
      </RowWrapper>
    </>
  );
}



export default Bulgaria;