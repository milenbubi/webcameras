import { PropsWithChildren } from "react";
import { Centered } from "@ffilip/mui-react-utils/components";
import { rowWrapperCSS } from "../Styles/CSSStyles";



function RowWrapper({ children }: PropsWithChildren) {
  return (
    <Centered sx={rowWrapperCSS}>
      {children}
    </Centered>
  );
}



export default RowWrapper;