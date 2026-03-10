import { useEffect, useRef, useState } from "react";
import { useDocumentVisibility, useLatestRequestGuard } from "@ffilip/mui-react-utils";
import TimeLabel from "../../Components/TimeLabel";
import { useBooleanLS } from "../../Utils/localStorage";
import ImagePlayer from "../../Components/players/ImagePlayer";



function VasilLevskiHut() {
  const imageUrlRef = useRef("");
  const isVisible = useDocumentVisibility();
  const [blobUrl, setBlobUrl] = useState("");
  const { register, isOutdated } = useLatestRequestGuard();
  const [lastModified, setLastModified] = useState<string | null>(null);
  const { isBooleanLSOn: isOn1, toggleBooleanLS: toggleIsOn1 } = useBooleanLS("vslv");


  useEffect(() => {
    if (!isOn1 || !isVisible) {
      return;
    }

    async function fetchImage() {
      const src = `https://meter.ac/gs/nodes/N124/snap.jpg?t=${Date.now()}`;
      const requestId = register();

      try {
        const res = await fetch(src);

        if (isOutdated(requestId)) {  // Abort, if there is a new request
          return;
        }

        const blob = await res.blob();
        const newBlobUrl = URL.createObjectURL(blob);

        URL.revokeObjectURL(imageUrlRef.current);
        imageUrlRef.current = newBlobUrl;
        setLastModified(res.headers.get("Last-Modified"));
        setBlobUrl(newBlobUrl);
      }
      catch (err) {
        URL.revokeObjectURL(imageUrlRef.current);
        imageUrlRef.current = "";
        setLastModified(null);
        setBlobUrl("");
      }
    }

    fetchImage();
    const intervalId = setInterval(fetchImage, 30000);

    return () => {
      clearInterval(intervalId);
      URL.revokeObjectURL(imageUrlRef.current);
      imageUrlRef.current = "";
      setLastModified(null);
      setBlobUrl("");
    };
  }, [isOn1, isVisible]);


  return (
    <ImagePlayer
      onToggle={toggleIsOn1}
      id="vslv" isActive={isOn1}
      title="Хижа Васил Левски" imageUpdateLabel="през 30s"
      url={blobUrl}
      specialControls={<TimeLabel date={lastModified} sx={{ top: 25 }} />}
    />
  );
}



export default VasilLevskiHut;