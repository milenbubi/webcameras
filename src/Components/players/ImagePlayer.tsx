import { PropsWithChildren } from "react";
import { CardMedia, SxProps, Theme } from "@mui/material";
import { EMPTY_BASE64_IMAGE } from "@ffilip/chan180-utils/env";
import { useDocumentVisibility } from "@ffilip/mui-react-utils/document";
import Title from "../Title";
import FSButton from "../FSButton";
import PlayerWrapper from "./PlayerWrapper";
import StreamToggler from "../StreamToggler";
import { playerCSS } from "../../Styles/CSSStyles";

interface IProps {
  id: string;
  url: string;
  isActive: boolean;
  stretchToFit?: boolean;
  onToggle: VoidFunction;
  title: string;
  updateLabel?: string;
  hideChildrenIfInactive?: boolean;
  fsBtnSx?: SxProps<Theme>;
}



function ImagePlayer({ id, url, isActive, stretchToFit, onToggle, title, updateLabel, children, hideChildrenIfInactive, fsBtnSx }: PropsWithChildren<IProps>) {
  const isVisible = useDocumentVisibility();


  return (
    <PlayerWrapper
      id={id}
      isActive={isActive}
      controls={
        <>
          <StreamToggler isOn={isActive} onToggle={onToggle} />
          <Title value={title} updateLabel={updateLabel} />
          {isActive && (
            <>
              <FSButton fsElementId={id} sx={fsBtnSx} />
              {hideChildrenIfInactive && children}
            </>
          )}
          {!hideChildrenIfInactive && children}
        </>
      }
    >

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