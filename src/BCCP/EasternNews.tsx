import { Media } from "./media/Media";
import { getProxiedM3U8 } from "./utils/cams";
import RowWrapper from "../Components/RowWrapper";



function EasternNews() {
  return (  // Eastern news
    <>
      <RowWrapper>
        <Media.IframeVideo
          id="1kan"
          url="https://ok.ru/videoembed/1115050286838?autoplay=1"
          title="1 Канал"
        />

        {/* "Россия 1 */}
        <Media.BlobVideo
          id="rss1"
          url={getProxiedM3U8("https://vgtrkregion-reg.cdnvideo.ru/vgtrk/0/russia1-hd/1080p.m3u8")}
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