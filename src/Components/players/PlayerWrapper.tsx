import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import { inactivePlayerCSS } from "./styles";

interface IProps {
  isActive: boolean;
}


function PlayerWrapper({ isActive, children }: PropsWithChildren<IProps>) {
  return (
    isActive ? children : <Box sx={inactivePlayerCSS} />
  );
}


export default PlayerWrapper;