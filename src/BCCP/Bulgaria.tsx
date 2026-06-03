import { Media } from "./media/Media";
import Kalotina from "./customCams/Kalotina";
import KulataCams from "./customCams/KulataCams";
import RowWrapper from "../Components/RowWrapper";
import DunavBridge1 from "./customCams/DunavBridge1";



function Bulgaria() {
  return (  // България
    <>
      {/* Кулата */}
      <RowWrapper>
        <KulataCams />
      </RowWrapper>


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


      <RowWrapper>
        {/* Дунав мост 1 */}
        <DunavBridge1 />

        <Media.BlobVideo
          // Деве Баир
          id="dvbb"
          url="https://streaming1.neotel.net.mk/stream/deve_bair.m3u8"
          title="Деве Баир - към България"
        />
      </RowWrapper>
    </>
  );
}



export default Bulgaria;