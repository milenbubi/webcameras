import { PropsWithChildren } from "react";
import Centered from "../Utils/Centered";
import { rowWrapperCSS } from "./players/styles";



function RowWrapper({ children }: PropsWithChildren) {
  return (
    <Centered sx={rowWrapperCSS}>
      {children}
    </Centered>
  );
}



export default RowWrapper;