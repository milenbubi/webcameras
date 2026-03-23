import { ENV } from "../Utils/env";
import { Media } from "./media/Media";
import { getProxiedUrl } from "./utils/cams";
import RowWrapper from "../Components/RowWrapper";



function BalkanMountains() {
  return (  // Стара Планина
    <>
      {ENV.IS_DEV_MODE && (
        <>
          {/* Орлово гнездо */}
          <Media.Image id="orgn" title="Заслон Орлово гнездо" url="https://cams.pladi.bg/orlovognezdo.jpg" />
        </>
      )}


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
        <Media.BlobVideo id="dbrl" url={getProxiedUrl("https://dobrila.darkpsy.space/secure-stream/index.m3u8")} title="Хижа Добрила" />
      </RowWrapper>


      <RowWrapper>
        {/* Дерменка */}
        <Media.Image id="drmn" title="Хижа Дерменка" url="https://cams.pladi.bg/dermenka.jpg" refreshSeconds={3} />

        {/* Вежен */}
        <Media.Image id="wejn" title="Хижа Вежен" url="https://cams.pladi.bg/vejen.jpg" refreshSeconds={3} />
      </RowWrapper>


      <RowWrapper>
        {/* Васил Левски */}
        <Media.TimedImage id="vslvvski" title="Хижа Васил Левски" url="https://meter.ac/gs/nodes/N124/snap.jpg" refreshSeconds={30} />

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
        <Media.BlobVideo id="chmr" url={getProxiedUrl("https://lon.rtsp.me/eYrqm9hJ32qPZ-GV6Ki9CQ/1772721693/hls/ErrH8sb3.m3u8")} title="Хижа Чумерна" />
      </RowWrapper>
    </>
  );
}



export default BalkanMountains; 5