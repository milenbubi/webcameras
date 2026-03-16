import APP from "../Utils/APP";
import { Media } from "./media/Media";
import Kalotina from "./customCams/Kalotina";
import KulataCams from "./customCams/KulataCams";
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
        <Kalotina />
      </RowWrapper>
    </>
  );
}



export default Bulgaria;