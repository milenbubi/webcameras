import { Typography } from "@mui/material";
import { Media } from "./media/Media";
import { getProxiedM3U8 } from "./utils/cams";
import RowWrapper from "../Components/RowWrapper";



function EasternNews() {
  return (  // Eastern news
    <>
      <Typography
        variant="h6" align="center" fontWeight={1000} lineHeight="30px"
        sx={{ maxWidth: 1200, px: { xs: 1, sm: 2, md: 5 } }}
        children={"ВАЖНО! Достъпът до някои от тези излъчвания може да бъде ограничаван или прекъсван поради геополитически и регулаторни мерки."}
      />


      <RowWrapper>
        {/* Россия 24 */}
        <Media.BlobVideo
          id="rs24"
          url="https://gtrk-volga.ru/media/hr24/stream1.m3u8"
          //url={getProxiedM3U8("https://streaming.televizor-24-tochka.ru/live/30-req_offset_28000000-req_window_0-1k_v5.m3u8")}
          title="Россия 24"
          withSound
        />

        {/* "Россия 1 */}
        <Media.BlobVideo
          id="rss1"
          // url={getProxiedM3U8("https://live.smotrim.ru/vgtrk/0/russia1-hd/792000_576p.m3u8")}
          url={getProxiedM3U8("https://live.smotrim.ru/vgtrk/0/russia1-hd/1080p.m3u8")}
          title="Россия 1"
          withSound
        />
      </RowWrapper>


      <RowWrapper>
        {/* Канал 1 */}
        <Media.IframeVideo
          id="1kan"
          url="https://ok.ru/videoembed/16745842417379?autoplay=1"
          // url="https://connect.ok.ru/dk?st.cmd=WidgetContent&st.content=https%3A%2F%2Fok.ru%2Flive%2F1115050286838"
          title="1 Канал"
          withSound
        />


        {/*Россия РТР */}
        <Media.BlobVideo
          id="rsrtr"
          url="https://streaming.thestream.cyou/live/211-req_offset_28000000-req_window_0-2k_v5.m3u8"
          // url="https://streaming.thestream.cyou/live/211.m3u8"
          title="Россия РТР"
          withSound
        />
      </RowWrapper>


      <RowWrapper>
        {/* CGTN */}
        <Media.IframeVideo
          id="cgtn"
          url="https://www.youtube.com/embed/0i7n3r01L2U"
          title="CGTN"
          withSound
        />

        {/* Press TV Iran */}
        <Media.BlobVideo
          id="ptvi"
          url="https://live.presstv.co.uk/hls/presstv.m3u8"
          title="Press TV Iran"
          withSound
        />
      </RowWrapper>


      <RowWrapper>
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