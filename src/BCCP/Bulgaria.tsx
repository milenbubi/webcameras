import { ENV } from "../Utils/env";
import { Media } from "./media/Media";
import Kalotina from "./customCams/Kalotina";
import { getProxiedM3U8 } from "./utils/cams";
import KulataCams from "./customCams/KulataCams";
import RowWrapper from "../Components/RowWrapper";



function Bulgaria() {
  return (  // България
    <>
      {/* Кулата */}
      {ENV.IS_DEV_MODE && (
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


      <RowWrapper>
        <Media.BlobVideo
          // Дунав мост 1 
          id="rsdm"
          url={getProxiedM3U8("http://s19.r145.nbis.net:8081/or-bul-cam3/tracks-v1/index.fmp4.m3u8")}
          title="Русе - към Дунав Мост"
        />

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