import { Media } from "./media/Media";
import { getProxiedM3U8 } from "./utils/cams";
import RowWrapper from "../Components/RowWrapper";



function BalkanMountains() {
  return (  // Стара Планина
    <>
      <RowWrapper>
        {/* Орлово гнездо */}
        <Media.Image id="orgn" title="Заслон Орлово гнездо" url="https://cams.pladi.bg/orlovognezdo.jpg" refreshSeconds={2} />

        {/* Бузлуджа */}
        <Media.BlobVideo id="bzldj" url={"https://huts.bg/video/dd7789e1-d2af-4c1b-b66e-ee2378f1ded3_output_0.m3u8"} title="Хижа Бузлуджа" />
      </RowWrapper>


      <RowWrapper>
        {/* Мазалат */}
        <Media.Image id="mzlt" title="Хижа Мазалат" url="https://cams.pladi.bg/mazalat.jpg" refreshSeconds={8} />

        {/* Рай */}
        <Media.Image id="hraj" title="Хижа Рай" url="https://cams.pladi.bg/ray.jpg" refreshSeconds={8} />
      </RowWrapper>


      <RowWrapper>
        {/* Плевен */}
        <Media.Image id="plvn" title="Хижа Плевен" url="https://cams.pladi.bg/pleven.jpg" refreshSeconds={7} />

        {/* Добрила */}
        <Media.BlobVideo id="dbrl" url={getProxiedM3U8("https://dobrila.darkpsy.space/secure-stream/index.m3u8")} title="Хижа Добрила" />
      </RowWrapper>


      <RowWrapper>
        {/* Дерменка */}
        <Media.Image id="drmn" title="Хижа Дерменка" url="https://cams.pladi.bg/dermenka.jpg" refreshSeconds={3} />

        {/* Вежен */}
        <Media.Image id="wejn" title="Хижа Вежен" url="https://cams.pladi.bg/vejen.jpg" refreshSeconds={3} />
      </RowWrapper>


      <RowWrapper>
        {/* Васил Левски */}
        <Media.TimedImage id="vslv" title="Хижа Васил Левски" url="https://meter.ac/gs/nodes/N124/snap.jpg" refreshSeconds={30} />

        {/* Тъжа */}
        <Media.Image id="tyja" title="Хижа Тъжа" url="https://cams.pladi.bg/taja.jpg" refreshSeconds={5} />
      </RowWrapper>


      <RowWrapper>
        {/* Заслон Ботев */}
        <Media.Image id="zsbt" title="Заслон Ботев" url="https://cams.pladi.bg/zaslon.jpg" refreshSeconds={4} />

        {/* Триглав */}
        <Media.Image id="trgl" title="Хижа Триглав" url="https://cams.pladi.bg/triglav.jpg" refreshSeconds={4} />
      </RowWrapper>


      <RowWrapper>
        {/* Боженци */}
        <Media.Image id="bjnc" title="Боженци" url="https://home-solutions.bg/cams/bojenci.jpg" refreshSeconds={5} />

        {/* Чумерна */}
        <Media.BlobVideo id="chmr" url={getProxiedM3U8("https://lon.rtsp.me/eYrqm9hJ32qPZ-GV6Ki9CQ/1772721693/hls/ErrH8sb3.m3u8")} title="Хижа Чумерна" />
      </RowWrapper>
    </>
  );
}



export default BalkanMountains; 5