import { useEffect, useState } from "react";
import { Media } from "./media/Media";
import RowWrapper from "../Components/RowWrapper";
import { getProxiedM3U8, resolveStreamSource } from "./utils/cams";


function Aton() {
  const [tripiti, setTripiti] = useState("");


  useEffect(() => {
    async function loadTripitiSource() {
      const rss = await resolveStreamSource("https://www.webcamgreece.com/webcam-tripiti-halkidiki.html");
      setTripiti(rss);
    }

    loadTripitiSource();
  }, []);


  return (  // Атон
    <>
      <RowWrapper>
        {/* Ферибот Трипити */}
        <Media.BlobVideo
          id="fbtr"
          title="Порт Трипити"
          url={getProxiedM3U8(tripiti)}
        />

        {/* Ферибот Амуляни */}
        <Media.Image
          id="fbam"
          title="Порт Амуляни"
          url="https://www.meteology.gr/cam/ammouliani3"
          refreshSeconds={10}
        />
      </RowWrapper>


      <RowWrapper>
        {/* Ферибот Уранополи */}
        <Media.BlobVideo
          id="urnp"
          title="Порт Уранополи"
          url={getProxiedM3U8("https://pluto13.cybex.gr/hls/mc154cx936045.m3u8")}
        />

        {/* Амуляни, към връх Атон */}
        <Media.Image
          id="amwa"
          title="Амуляни - връх Атон"
          url="https://www.meteology.gr/cam/ammouliani2"
          refreshSeconds={30}
        />
      </RowWrapper>
    </>
  );
}



export default Aton;