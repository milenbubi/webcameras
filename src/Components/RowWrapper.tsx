import { PropsWithChildren } from "react";
import { Centered, SX } from "@ffilip/mui-react-utils";
import { rowWrapperCSS } from "../Styles/CSSStyles";

interface IProps {
  sx?: SX;
}



function RowWrapper({ sx, children }: PropsWithChildren<IProps>) {
  return (
    <Centered sx={{ ...rowWrapperCSS, ...sx }}>
      {children}
    </Centered>
  );
}



export default RowWrapper;