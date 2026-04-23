import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import { Centered } from "@ffilip/mui-react-utils";
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


function PlayerWrapper({ id, isActive, onToggle, title, imageUpdateLabel, fsBtnSx, specialControls, children }: IProps) {
  return (
    <Centered id={id} sx={playerWrapperCSS}>

      {/* Controls layer */}
      <StreamToggler isOn={isActive} onToggle={onToggle} />
      <Title value={title} imageUpdateLabel={imageUpdateLabel} />

      {/* Player layer */}
      {isActive ? children : null}
      {!isActive && <Box sx={inactivePlayerCSS} />}

      {/* Active-only layer */}
      {isActive && (
        <>
          <FSButton fsElementId={id} sx={fsBtnSx} />
          {specialControls}
        </>
      )}

    </Centered>
  );
}



export default PlayerWrapper;