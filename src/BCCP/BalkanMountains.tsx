import { useEffect, useState } from "react";
import { useDocumentVisibility } from "@ffilip/mui-react-utils";
import RowWrapper from "../Components/RowWrapper";
import { useBooleanLS } from "../Utils/localStorage";
import VasilLevskiHut from "../Components/VasilLevskiHut";
import ImagePlayer from "../Components/players/ImagePlayer";

interface IEntityProps {
  id: string;
  title: string;
  url: string;
}



function HutEntity({ id, title, url }: IEntityProps) {
  const [camUrl, setCamUrl] = useState("");
  const isVisible = useDocumentVisibility();
  const { isBooleanLSOn: isOn1, toggleBooleanLS: toggleIsOn1 } = useBooleanLS(id);


  useEffect(() => {
    if (!isOn1 || !isVisible) {
      return;
    }

    const refreshCam = () => {
      setCamUrl(`${url}?t=${Date.now()}`);
    };

    refreshCam();
    const id = setInterval(refreshCam, 30000);

    return () => {
      clearInterval(id);
      setCamUrl("");
    }
  }, [isVisible, isOn1]);


  return (
    <ImagePlayer
      onToggle={toggleIsOn1}
      id={id} isActive={isOn1}
      title={title} imageUpdateLabel="през 30 секунди"
      url={camUrl}
    />
  );
}



function BalkanMountains() {
  return (  // Стара Планина
    <>
      <RowWrapper>
        {/* Мазалат */}
        <HutEntity id="mzlt" title="Хижа Мазалат" url="https://cams.pladi.bg/mazalat.jpg" />

        {/* Рай */}
        <HutEntity id="hraj" title="Хижа Рай" url="https://cams.pladi.bg/ray.jpg" />
      </RowWrapper>


      <RowWrapper>
        {/* Орлово гнездо */}
        {/* <HutEntity id="orgn" title="Заслон Орлово гнездо" url="https://cams.pladi.bg/orlovognezdo.jpg" /> */}

        {/* Дерменка */}
        <HutEntity id="drmn" title="Хижа Дерменка" url="https://cams.pladi.bg/dermenka.jpg" />

        {/* Вежен */}
        <HutEntity id="wejn" title="Хижа Вежен" url="https://cams.pladi.bg/vejen.jpg" />
      </RowWrapper>


      <RowWrapper>
        {/* Васил Левски */}
        <VasilLevskiHut />

        {/* Тъжа */}
        <HutEntity id="tyja" title="Хижа Тъжа" url="https://cams.pladi.bg/taja.jpg" />
      </RowWrapper>
    </>
  );
}



export default BalkanMountains;