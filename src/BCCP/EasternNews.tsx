import { Media } from "./media/Media";
import { getProxiedUrl } from "./utils/cams";
import RowWrapper from "../Components/RowWrapper";



function EasternNews() {
  return (  // Eastern news
    <>
      <RowWrapper>
        {/* 1 Канал */}
        <Media.BlobVideo
          id="1kan"
          url="https://pkvc-hls7.cdnvideo.ru/pkvc/pk/tracks-v1a1/mono.ts.m3u8"
          title="1 Канал"
          withSound
        />

        {/* "Россия 1 */}
        <Media.BlobVideo
          id="rss1"
          url={getProxiedUrl("https://vgtrkregion-reg.cdnvideo.ru/vgtrk/0/russia1-hd/1080p.m3u8")}
          title="Россия 1"
          withSound
        />
      </RowWrapper>


      <RowWrapper>
        {/* Россия 24 */}
        <Media.BlobVideo
          id="rs24"
          url="https://gtrk-volga.ru/media/hr24/stream1.m3u8"
          title="Россия 24"
          withSound
        />

        {/* CGTN */}
        <Media.IframeVideo
          id="cgtn"
          url="https://www.youtube.com/embed/BOy2xDU1LC8"
          title="CGTN"
          withSound
        />
      </RowWrapper>


      <RowWrapper>
        {/* Press TV Iran */}
        <Media.BlobVideo
          id="ptvi"
          url="https://live.presstv.ir/hls/presstv_5_482/index.m3u8"
          title="Press TV Iran"
          withSound
        />

        {/* TRT World */}
        <Media.BlobVideo
          id="trtw"
          url="https://tv-trtworld.medya.trt.com.tr/master_360.m3u8"
          title="TRT World"
          withSound
        />
      </RowWrapper>
    </>
  );
}



export default EasternNews;