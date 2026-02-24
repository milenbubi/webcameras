import { useEffect, useState } from "react";
import { useDocumentVisibility } from "@ffilip/mui-react-utils";
import RowWrapper from "../Components/RowWrapper";
import { useBooleanLS } from "../Utils/localStorage";
import ImagePlayer from "../Components/players/ImagePlayer";



function BalkanMountains() {
  const [time, setTime] = useState(0);
  const isVisible = useDocumentVisibility();
  const { isBooleanLSOn: isOn1, toggleBooleanLS: toggleIsOn1 } = useBooleanLS("mzlt");
  const { isBooleanLSOn: isOn2, toggleBooleanLS: toggleIsOn2 } = useBooleanLS("hraj");
  const { isBooleanLSOn: isOn3, toggleBooleanLS: toggleIsOn3 } = useBooleanLS("orgn");
  const { isBooleanLSOn: isOn4, toggleBooleanLS: toggleIsOn4 } = useBooleanLS("drmn");

  const hasActiveStream = isOn1 || isOn2 || isOn3 || isOn4;


  useEffect(() => {
    if (!isVisible || !hasActiveStream) return;

    const refreshCam = () => {
      setTime(Date.now());
    };

    refreshCam();
    const id = setInterval(refreshCam, 1000);

    return () => clearInterval(id);
  }, [isVisible, hasActiveStream]);


  return (  // Стара Планина
    <>
      <RowWrapper>
        {/* Мазалат */}
        <ImagePlayer
          onToggle={toggleIsOn1}
          id="mzlt" isActive={isOn1}
          title="Хижа Мазалат" updateLabel="през 1s"
          url={time ? `https://cams.pladi.bg/mazalat.jpg?t=${time}` : ""}
        />

        {/* Рай */}
        <ImagePlayer
          onToggle={toggleIsOn2}
          id="hraj" isActive={isOn2}
          title="Хижа Рай" updateLabel="през 1s"
          url={time ? `https://cams.pladi.bg/ray.jpg?t=${time}` : ""}
        />
      </RowWrapper>


      <RowWrapper>
        {/* Орлово гнездо */}
        <ImagePlayer
          onToggle={toggleIsOn3}
          id="orgn" isActive={isOn3}
          title="Заслон Орлово гнездо" updateLabel="през 1s"
          url={time ? `https://cams.pladi.bg/orlovognezdo.jpg?t=${time}` : ""}
        />

        {/* Дерменка */}
        <ImagePlayer
          onToggle={toggleIsOn4}
          id="drmn" isActive={isOn4}
          title="Хижа Дерменка" updateLabel="през 1s"
          url={time ? `https://cams.pladi.bg/dermenka.jpg?t=${time}` : ""}
        />
      </RowWrapper>
    </>
  );
}



export default BalkanMountains;