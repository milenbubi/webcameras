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
          pt: "5px", pb: { xs: "3px", md: "2px" },
          minWidth: { xs: 100, md: 160 },
          fontWeight: 800,
          fontFamily: "Arial",
          fontSize: { xs: 12, md: 17 },
          letterSpacing: { xs: "1px", md: "3px" }
        }
      }}
    >
      {children}
    </Stack>
  );
}



export default PlaceBtnGroupWrapper;