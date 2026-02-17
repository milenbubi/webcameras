import { Stack } from "@mui/material";
import { PropsWithChildren } from "react";



function PlaceBtnGroupWrapper({ children }: PropsWithChildren) {
  if (!children) {
    return null;
  }


  return (
    <Stack
      sx={{
        flexDirection: "row", flexWrap: "wrap", justifyContent: "center",
        gap: { xs: 2, sm: 3 },
        "& button": {
          transition: "opacity 0.3s",
          pb: "4px",
          width: { xs: 110, md: 160 },
          fontWeight: 800,
          fontFamily: "Arial",
          fontSize: { xs: 12, md: 18 },
          letterSpacing: "3px"
        }
      }}
    >
      {children}
    </Stack>
  );
}



export default PlaceBtnGroupWrapper;