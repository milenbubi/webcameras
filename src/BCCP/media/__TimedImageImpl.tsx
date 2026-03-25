import { useEffect, useRef, useState } from "react";
import { useDocumentVisibility, useLatestRequestGuard } from "@ffilip/mui-react-utils";
import TimeLabel from "../../Components/TimeLabel";
import { useBooleanLS } from "../../Utils/localStorage";
import { useRefreshInfo } from "./tools/useRefreshInfo";
import ImagePlayer from "../../Components/players/ImagePlayer";

interface IProps {
  id: string;
  title: string;
  url: string;
  stretchToFit?: boolean;
  refreshSeconds: number;
  showUpdateInMinutes?: boolean;
}



function __TimedImageImpl({ id, title, url, stretchToFit, ...refreshProps }: IProps) {
  const imageUrlRef = useRef("");
  const isVisible = useDocumentVisibility();
  const [blobUrl, setBlobUrl] = useState("");
  const lastModified = useRef<string | null>(null);
  const { register, isOutdated } = useLatestRequestGuard();
  const { isBooleanLSOn, toggleBooleanLS } = useBooleanLS(id);
  const { normalizedRefreshMS, updateLabel } = useRefreshInfo(refreshProps);


  useEffect(() => {
    if (!isBooleanLSOn || !isVisible) {
      return;
    }

    function resetImage() {
      URL.revokeObjectURL(imageUrlRef.current);
      imageUrlRef.current = "";
      lastModified.current = null;
      setBlobUrl("");
    }

    async function fetchImage() {
      const src = `${url}?t=${Date.now()}`;
      const requestId = register();

      try {
        const res = await fetch(src);

        if (isOutdated(requestId)) {  // Abort, if there is a new request
          return;
        }

        const newLastModified = res.headers.get("Last-Modified");

        if (newLastModified && newLastModified === lastModified.current) {  // Skip update if image hasn’t changed
          return;
        }

        const blob = await res.blob();
        const newBlobUrl = URL.createObjectURL(blob);

        URL.revokeObjectURL(imageUrlRef.current);
        imageUrlRef.current = newBlobUrl;
        lastModified.current = newLastModified;
        setBlobUrl(newBlobUrl);
      }
      catch (err) {
        resetImage();
      }
    }

    fetchImage();
    const intervalId = setInterval(fetchImage, normalizedRefreshMS);

    return () => {
      clearInterval(intervalId);
      resetImage();
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
      specialControls={<TimeLabel date={lastModified.current} sx={{ top: 25 }} />}
    />
  );
}



export { __TimedImageImpl };  