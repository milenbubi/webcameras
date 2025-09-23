import { CardMedia } from "@mui/material";
import { PropsWithChildren } from "react";
import PlayerWrapper from "./PlayerWrapper";
import { playerCSS } from "../../Styles/CSSStyles";
import { useDocumentVisibility } from "../../Utils/documentVisibility";

interface IProps {
  id: string;
  url: string;
  isActive: boolean;
  stretchToFit?: boolean;
}

const EMPTY_BASE64_IMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";



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