import { SX } from "@ffilip/mui-react-utils";
import { Box, Typography } from "@mui/material";

const fontStyle: SX = {
  fontWeight: 600,
  lineHeight: "30px",
  textAlign: "center"
};

const layoutStyle: SX = {
  maxWidth: 1200,
  px: { xs: 1, sm: 2, md: 5 }
};

const combinedStyle: SX = {
  ...fontStyle,
  ...layoutStyle
};



function TurkiyeNotice() {
  return (
    <Box mb={4}>
      <Typography
        variant="h4"
        sx={{ mb: 2, ...fontStyle }}
        children="ВАЖНО!"
      />
      <Typography
        variant="h6"
        sx={{ mb: 2, ...combinedStyle }}
        children={"Според информация на Министерството на търговията на Турция, излъчването на камерите на граничните пунктове е сезонно."}
      />
      <Typography
        variant="h6"
        sx={combinedStyle}
        children={"Публичният достъп до live изображенията се осигурява през летния период."}
      />
      <Typography
        variant="h6"
        sx={combinedStyle}
        children={"(15 юни – 15 септември)"}
      />
    </Box>
  );
}



export default TurkiyeNotice;