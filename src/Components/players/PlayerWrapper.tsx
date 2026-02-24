import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import { Centered } from "@ffilip/mui-react-utils/components";
import Title from "../Title";
import FSButton from "../FSButton";
import StreamToggler from "../StreamToggler";
import { IPlayerProps } from "./utils/utils";
import { inactivePlayerCSS, playerWrapperCSS } from "../../Styles/CSSStyles";

type IProps = PropsWithChildren<
  Omit<
    IPlayerProps,
    "url" | "stretchToFit"
  >
>;


function PlayerWrapper({ id, isActive, onToggle, title, imageUpdateLabel, hideSpecialControlsIfInactive, fsBtnSx, specialControls, children }: IProps) {
  return (
    <Centered id={id} sx={playerWrapperCSS}>

      {isActive ? children : <Box sx={inactivePlayerCSS} />}

      <StreamToggler isOn={isActive} onToggle={onToggle} />
      <Title value={title} imageUpdateLabel={imageUpdateLabel} />
      {isActive && <FSButton fsElementId={id} sx={fsBtnSx} />}
      {(isActive || !hideSpecialControlsIfInactive) && specialControls}

    </Centered>
  );
}



export default PlayerWrapper;