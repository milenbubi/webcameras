import { CardMedia } from "@mui/material";
import { PropsWithChildren } from "react";
import { EMPTY_BASE64_IMAGE } from "@ffilip/chan180-utils/env";
import { useDocumentVisibility } from "@ffilip/mui-react-utils/document";
import PlayerWrapper from "./PlayerWrapper";
import { playerCSS } from "../../Styles/CSSStyles";

interface IProps {
  id: string;
  url: string;
  isActive: boolean;
  stretchToFit?: boolean;
}



function ImagePlayer({ id, url, isActive, stretchToFit, children }: PropsWithChildren<IProps>) {
  const isVisible = useDocumentVisibility();


  return (
    <PlayerWrapper id={id} isActive={isActive} controls={children}>
      {isVisible && (
        <CardMedia
          src={url || EMPTY_BASE64_IMAGE}
          sx={{ ...playerCSS, objectFit: stretchToFit ? "cover" : "contain" }} component="img"
          onError={e => e.currentTarget.src = EMPTY_BASE64_IMAGE}
        />
      )}
    </PlayerWrapper>
  );
}



export default ImagePlayer;