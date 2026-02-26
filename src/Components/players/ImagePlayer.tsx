import { CardMedia } from "@mui/material";
import { EMPTY_BASE64_IMAGE } from "@ffilip/chan180-utils/env";
import { useDocumentVisibility } from "@ffilip/mui-react-utils/document";
import PlayerWrapper from "./PlayerWrapper";
import { IPlayerProps } from "./utils/utils";
import { playerCSS } from "../../Styles/CSSStyles";



function ImagePlayer({ url, stretchToFit, ...props }: IPlayerProps) {
  const isVisible = useDocumentVisibility();


  return (
    <PlayerWrapper {...props}>

      {isVisible && (
        <CardMedia
          component="img"
          image={url || EMPTY_BASE64_IMAGE}
          sx={{ ...playerCSS, objectFit: stretchToFit ? "cover" : "contain" }}
          onError={e => e.currentTarget.src = EMPTY_BASE64_IMAGE}
        />
      )}

    </PlayerWrapper>
  );
}



export default ImagePlayer;