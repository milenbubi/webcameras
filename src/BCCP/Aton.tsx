import { Media } from "./media/Media";
import { getProxiedM3U8 } from "./utils/cams";
import RowWrapper from "../Components/RowWrapper";



function Aton() {
  return (  // Амуляни
    <RowWrapper>
      {/* Ферибот Трипити */}
      <Media.BlobVideo
        id="fbtr"
        title="Порт Трипити"
        url={getProxiedM3U8("https://pluto13.cybex.gr/hls/mc153342241427238503.m3u8")}
      />

      {/* Ферибот Амуляни */}
      <Media.Image
        id="fbam"
        title="Порт Амуляни"
        url="https://www.meteology.gr/cam/ammouliani3/"
        refreshSeconds={10}
      />

      {/* Уранополи */}
      <Media.BlobVideo
        id="urnp"
        title="Уранополи"
        url={getProxiedM3U8("https://pluto13.cybex.gr/hls/mc154cx936045.m3u8")}
      />
    </RowWrapper>
  );
}



export default Aton;