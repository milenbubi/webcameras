import { CardMedia } from "@mui/material";
import { EMPTY_BASE64_IMAGE } from "@ffilip/chan180-utils";
import { useDocumentVisibility, usePrevious } from "@ffilip/mui-react-utils";
import PlayerWrapper from "./PlayerWrapper";
import { IPlayerProps } from "./utils/utils";
import { playerCSS } from "../../Styles/CSSStyles";
import { useEffect, useMemo, useState } from "react";



function ImagePlayer({ url, stretchToFit, ...props }: IPlayerProps) {
  const oldRef = usePrevious(url);
  const [retry, setRetry] = useState(0);
  const isVisible = useDocumentVisibility();


  useEffect(() => {
    setRetry(0);
  }, [url]);


  const finalUrl = useMemo(() => {
    if (!url) return EMPTY_BASE64_IMAGE;
    if (retry === 0) return url;
    if (url !== oldRef) return url;

    try {
      const u = new URL(url);
      u.searchParams.set("retry", String(retry));
      return u.toString();
    }
    catch {
      return url;
    }
  }, [url, retry]);


  return (
    <PlayerWrapper {...props}>

      {isVisible && (
        <CardMedia
          component="img"
          image={finalUrl}
          sx={{ ...playerCSS, objectFit: stretchToFit ? "cover" : "fill" }}
          onError={e => {
            if (retry > 5) {
              e.currentTarget.src = EMPTY_BASE64_IMAGE;
            }
            else {
              setRetry(r => r + 1);
            }
          }}
        />
      )}

    </PlayerWrapper>
  );
}



export default ImagePlayer;