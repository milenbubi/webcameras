import { Box, Typography } from "@mui/material";
import { SxObject } from "@ffilip/mui-react-utils";

const fontStyle: SxObject = {
  px: { xs: 1, sm: 2, md: 5 },
  maxWidth: 1200,
  fontWeight: 600,
  textAlign: "center"
};



function MakazaNotice() {
  return (
    <Box sx={{ mb: 2, color: "#ffffff" }}>
      <Typography
        variant="subtitle1"
        sx={{ mb: 1, ...fontStyle }}
        children={"Договорът за поддръжка на камерите на ГКПП „Маказа“ е прекратен."}
      />
      <Typography
        variant="subtitle1"
        sx={{ ...fontStyle }}
        children={"Излъчването може да бъде възстановено при осигуряване на необходимото финансиране."}
      />
    </Box>
  );
}



export default MakazaNotice;