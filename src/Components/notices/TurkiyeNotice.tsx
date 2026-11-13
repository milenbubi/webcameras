import { Box, Typography } from "@mui/material";
import { SxObject } from "@ffilip/mui-react-utils";

const fontStyle: SxObject = {
  fontWeight: 600,
  textAlign: "center"
};

const layoutStyle: SxObject = {
  maxWidth: 1200,
  mx: "auto",
  px: { xs: 1, sm: 2, md: 5 }
};


const now = new Date();
const month = now.getMonth();
const day = now.getDate();

const isSummer =
  (month === 5 && day >= 15) ||
  month === 6 ||
  month === 7 ||
  (month === 8 && day <= 15);



function TurkiyeNotice() {
  if (isSummer) {
    return null;
  }


  return (
    <Box sx={{ mb: 2, color: "#ffffff" }}>
      <Typography
        variant="h6"
        sx={{ mb: 1, ...fontStyle }}
        children={"ВАЖНО!"}
      />
      <Typography
        variant="subtitle1"
        sx={{ mb: 1, ...fontStyle, ...layoutStyle }}
        children={"Според Министерството на търговията на Турция, камерите на граничните пунктове работят в сезонен режим."}
      />
      <Typography
        variant="subtitle1"
        sx={{ ...fontStyle, ...layoutStyle }}
        children={"Публичното излъчване на live изображения е достъпно само през летния период."}
      />
      <Typography
        variant="subtitle1"
        sx={{ ...fontStyle, ...layoutStyle }}
        children={"(15 юни – 15 септември)"}
      />
    </Box>
  );
}



export default TurkiyeNotice;