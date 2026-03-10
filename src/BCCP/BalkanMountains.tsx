import { Media } from "./media/Media";
import RowWrapper from "../Components/RowWrapper";
import VasilLevskiHut from "./customCams/VasilLevskiHut";



function BalkanMountains() {
  return (  // Стара Планина
    <>
      <RowWrapper>
        {/* Мазалат */}
        <Media.Image id="mzlt" title="Хижа Мазалат" url="https://cams.pladi.bg/mazalat.jpg" />

        {/* Рай */}
        <Media.Image id="hraj" title="Хижа Рай" url="https://cams.pladi.bg/ray.jpg" />
      </RowWrapper>


      <RowWrapper>
        {/* Орлово гнездо */}
        {/* <HutEntity id="orgn" title="Заслон Орлово гнездо" url="https://cams.pladi.bg/orlovognezdo.jpg" /> */}

        {/* Дерменка */}
        <Media.Image id="drmn" title="Хижа Дерменка" url="https://cams.pladi.bg/dermenka.jpg" />

        {/* Вежен */}
        <Media.Image id="wejn" title="Хижа Вежен" url="https://cams.pladi.bg/vejen.jpg" />
      </RowWrapper>


      <RowWrapper>
        {/* Васил Левски */}
        <VasilLevskiHut />

        {/* Тъжа */}
        <Media.Image id="tyja" title="Хижа Тъжа" url="https://cams.pladi.bg/taja.jpg" />
      </RowWrapper>


      <RowWrapper>
        {/* Заслон Ботев */}
        <Media.Image id="zsbt" title="Заслон Ботев" url="https://cams.pladi.bg/zaslon.jpg" />

        {/* Триглав */}
        <Media.Image id="trgl" title="Хижа Триглав" url="https://cams.pladi.bg/triglav.jpg" />
      </RowWrapper>


      <RowWrapper>
        {/* Плевен */}
        <Media.Image id="plvn" title="Хижа Плевен" url="https://cams.pladi.bg/pleven.jpg" />

        {/* Чумерна */}
        <Media.BlobVideo id="chmr" url="https://lon.rtsp.me/eYrqm9hJ32qPZ-GV6Ki9CQ/1772721693/hls/ErrH8sb3.m3u8" title="Хижа Чумерна" />
      </RowWrapper>
    </>
  );
}



export default BalkanMountains;