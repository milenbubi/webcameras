import { Media } from "./media/Media";
import { getProxiedUrl } from "./utils/cams";
import RowWrapper from "../Components/RowWrapper";



function RussianNews() {
  return (  // Russian news
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
          title={"Россия 24"}
          withSound
        />

        {/* НТВ */}
        <Media.BlobVideo
          id="ntvr"
          url={getProxiedUrl("https://river-4-432.rtbcdn.ru/stream/genetta-316.m9.rutube.ru/L9Jmcu53xo5MmgWDUBXZvg/1774368970/c37cd74192c6bc3d6cd6077c0c4fd686/1080p_stream.m3u8")}
          title={"НТВ"}
          withSound
        />
      </RowWrapper>
    </>
  );
}



export default RussianNews;