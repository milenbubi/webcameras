import { Box, Typography } from "@mui/material";
import { SxObject } from "@ffilip/mui-react-utils";

const fontStyle: SxObject = {
  px: { xs: 1, sm: 2, md: 5 },
  maxWidth: 1200,
  fontWeight: 1000,
  textAlign: "center",
  lineHeight: "30px"
};



function EasternNewsNotice() {
  return (
    <Box sx={{ mb: 2, color: "#ffffff" }}>
      <Typography
        variant="h6"
        sx={{ ...fontStyle }}
        children={"ВАЖНО! Достъпът до някои от тези излъчвания може да бъде ограничаван или прекъсван поради геополитически и регулаторни мерки."}
      />
    </Box>
  );
}



export default EasternNewsNotice;