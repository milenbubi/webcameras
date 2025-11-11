import { Box } from "@mui/material";
import { PropsWithChildren, ReactNode } from "react";
import { Centered } from "@ffilip/mui-react-utils/components";
import { inactivePlayerCSS, playerWrapperCSS } from "../../Styles/CSSStyles";

interface IProps {
  id: string;
  isActive: boolean;
  controls: ReactNode;
}



function PlayerWrapper({ id, isActive, controls, children }: PropsWithChildren<IProps>) {
  return (
    <Centered id={id} sx={playerWrapperCSS}>

      {isActive ? children : <Box sx={inactivePlayerCSS} />}

      {controls}

    </Centered>
  );
}



export default PlayerWrapper;