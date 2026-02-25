import { useEffect, useState } from "react";
import TimeLabel from "./TimeLabel";
import ImagePlayer from "./players/ImagePlayer";
import { useBooleanLS } from "../Utils/localStorage";



function VasilLevskiHut() {
  const [blobUrl, setBlobUrl] = useState("");
  const [lastModified, setLastModified] = useState<string | null>(null);
  const { isBooleanLSOn: isOn1, toggleBooleanLS: toggleIsOn1 } = useBooleanLS("vslv");


  useEffect(() => {
    if (!isOn1) {
      return;
    }

    async function fetchImage() {
      const src = `https://meter.ac/gs/nodes/N124/snap.jpg?t=${Date.now()}`;

      try {
        const res = await fetch(src);
        const blob = await res.blob();
        const newBlobUrl = URL.createObjectURL(blob);

        setLastModified(res.headers.get("Last-Modified"));

        setBlobUrl(prev => {
          URL.revokeObjectURL(prev);
          return newBlobUrl;
        });

      }
      catch (err) {
        setLastModified(null);

        setBlobUrl(prev => {
          URL.revokeObjectURL(prev);
          return "";
        });
      }
    }

    fetchImage();
    const intervalId = setInterval(fetchImage, 5000);

    return () => {
      clearInterval(intervalId);
      URL.revokeObjectURL(blobUrl);
      setLastModified(null);
      setBlobUrl("");
    };
  }, [isOn1]);


  return (
    <ImagePlayer
      onToggle={toggleIsOn1}
      id="vslv" isActive={isOn1}
      title="Хижа Васил Левски" imageUpdateLabel="през 5s"
      url={blobUrl}
      hideSpecialControlsIfInactive
      specialControls={<TimeLabel date={lastModified} sx={{ bottom: 25 }} />}
    />
  );
}



export default VasilLevskiHut;