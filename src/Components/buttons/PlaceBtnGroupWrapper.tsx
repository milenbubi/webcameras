import { Stack } from "@mui/material";
import { PropsWithChildren } from "react";
import { placeBtnWrapperStyle } from "../../Styles/placeButtonStyles";



function PlaceBtnGroupWrapper({ children }: PropsWithChildren) {
  if (!children) {
    return null;
  }


  return (
    <Stack sx={placeBtnWrapperStyle}>
      {children}
    </Stack>
  );
}



export default PlaceBtnGroupWrapper;