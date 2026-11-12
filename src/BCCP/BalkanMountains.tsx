import { Media } from "./media/Media";
import RowWrapper from "../Components/RowWrapper";
import { getProxiedImg, getProxiedM3U8 } from "./utils/cams";

const pladiReferer = "https://cams.pladi.bg";

export function getPladiCam(camName: string) {
  return getProxiedImg(`${pladiReferer}/${camName}.jpg`, pladiReferer);
}



function BalkanMountains() {
  return (  // Стара Планина
    <>
      <RowWrapper>
        {/* Орлово гнездо */}
        <Media.Image id="orgn" title="Заслон Орлово гнездо" url={getPladiCam("orlovognezdo")} refreshSeconds={2} />

        {/* Бузлуджа */}
        <Media.BlobVideo id="bzldj" url={"https://huts.bg/video/dd7789e1-d2af-4c1b-b66e-ee2378f1ded3_output_0.m3u8"} title="Хижа Бузлуджа" />
      </RowWrapper>


      <RowWrapper>
        {/* Мазалат */}
        <Media.Image id="mzlt" title="Хижа Мазалат" url={getPladiCam("mazalat")} refreshSeconds={8} />

        {/* Рай */}
        <Media.Image id="hraj" title="Хижа Рай" url={getPladiCam("ray")} refreshSeconds={8} />
      </RowWrapper>


      <RowWrapper>
        {/* Плевен */}
        <Media.Image id="plvn" title="Хижа Плевен" url={getPladiCam("pleven")} refreshSeconds={7} />

        {/* Добрила */}
        <Media.BlobVideo id="dbrl" url={getProxiedM3U8("https://dobrila.darkpsy.space/secure-stream/index.m3u8")} title="Хижа Добрила" />
      </RowWrapper>


      <RowWrapper>
        {/* Дерменка */}
        <Media.Image id="drmn" title="Хижа Дерменка" url={getPladiCam("dermenka")} refreshSeconds={3} />

        {/* Вежен */}
        <Media.Image id="wejn" title="Хижа Вежен" url={getPladiCam("vejen")} refreshSeconds={3} />
      </RowWrapper>


      <RowWrapper>
        {/* Васил Левски */}
        <Media.TimedImage id="vslv" title="Хижа Васил Левски" url={getProxiedImg("https://meter.ac/gs/nodes/N124/snap.jpg", "https://meter.ac")} refreshSeconds={30} />

        {/* Тъжа */}
        <Media.Image id="tyja" title="Хижа Тъжа" url={getPladiCam("taja")} refreshSeconds={5} />
      </RowWrapper>


      <RowWrapper>
        {/* Заслон Ботев */}
        <Media.Image id="zsbt" title="Заслон Ботев" url={getPladiCam("zaslon")} refreshSeconds={4} />

        {/* Триглав */}
        <Media.Image id="trgl" title="Хижа Триглав" url={getPladiCam("triglav")} refreshSeconds={4} />
      </RowWrapper>


      <RowWrapper>
        {/* Боженци */}
        <Media.Image id="bjnc" title="Боженци" url="https://home-solutions.bg/cams/bojenci.jpg" refreshSeconds={5} />

        {/* Чумерна */}
        <Media.BlobVideo id="chmr" url={("https://lon.rtsp.me/eYrqm9hJ32qPZ-GV6Ki9CQ/1772721693/hls/ErrH8sb3.m3u8")} title="Хижа Чумерна" />
      </RowWrapper>
    </>
  );
}



export default BalkanMountains; 5