import { Media } from "./media/Media";
import RowWrapper from "../Components/RowWrapper";



function News() {
  return (  // News
    <>
      <RowWrapper>
        {/* Tagesschau */}
        <Media.BlobVideo
          id="ecns"
          url="https://tagesschau.akamaized.net/hls/live/2020115/tagesschau/tagesschau_1/master.m3u8"
          title="Tagesschau"
        />

        {/* Deutsche Welle */}
        <Media.IframeVideo
          id="dwns"
          url={"https://www.youtube.com/embed/LuKwFajn37U"}
          title="Deutsche Welle"
        />
      </RowWrapper>


      <RowWrapper>
        {/* Euronews */}
        <Media.IframeVideo
          id="euns"
          url={"https://www.youtube.com/embed/pykpO5kQJ98"}
          title="Euronews"
        />

        {/* Sky News */}
        <Media.IframeVideo
          id="skns"
          url={"https://www.youtube.com/embed/YDvsBbKfLPA"}
          title="Sky News"
        />
      </RowWrapper>


      <RowWrapper>
        {/* Bloomberg Business News */}
        <Media.IframeVideo
          id="blbn"
          url={"https://www.youtube.com/embed/iEpJwprxDdk"}
          title="Bloomberg Business News"
        />

        {/* FRANCE 24 */}
        <Media.IframeVideo
          id="frns"
          url={"https://www.youtube.com/embed/Ap-UM1O9RBU"}
          title="FRANCE 24"
        />
      </RowWrapper>
    </>
  );
}



export default News;