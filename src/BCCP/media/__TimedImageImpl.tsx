import { useEffect, useRef, useState } from "react";
import { useDocumentVisibility, useLatestRequestGuard } from "@ffilip/mui-react-utils";
import TimeLabel from "../../Components/TimeLabel";
import { useBooleanLS } from "../../Utils/localStorage";
import ImagePlayer from "../../Components/players/ImagePlayer";
import { useRefreshInfo } from "./tools/useRefreshInfo";

interface IProps {
  id: string;
  title: string;
  url: string;
  stretchToFit?: boolean;
  refreshSeconds?: number;
  showUpdateInMinutes?: boolean;
}

function __TimedImageImpl({ id, title, url, stretchToFit, ...refreshProps }: IProps) {
  const imageUrlRef = useRef("");
  const isVisible = useDocumentVisibility();
  const [blobUrl, setBlobUrl] = useState("");
  const { register, isOutdated } = useLatestRequestGuard();
  const { isBooleanLSOn, toggleBooleanLS } = useBooleanLS(id);
  const [lastModified, setLastModified] = useState<string | null>(null);
  const { normalizedRefreshMS, updateLabel } = useRefreshInfo(refreshProps);


  useEffect(() => {
    if (!isBooleanLSOn || !isVisible) {
      return;
    }

    async function fetchImage() {
      const src = `${url}?t=${Date.now()}`;
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
    const intervalId = setInterval(fetchImage, normalizedRefreshMS);

    return () => {
      clearInterval(intervalId);
      URL.revokeObjectURL(imageUrlRef.current);
      imageUrlRef.current = "";
      setLastModified(null);
      setBlobUrl("");
    };
  }, [isBooleanLSOn, isVisible, normalizedRefreshMS, url]);


  return (
    <ImagePlayer
      onToggle={toggleBooleanLS}
      id={id}
      isActive={isBooleanLSOn}
      title={title}
      imageUpdateLabel={updateLabel}
      url={blobUrl}
      specialControls={<TimeLabel date={lastModified} sx={{ top: 25 }} />}
    />
  );
}



export { __TimedImageImpl };