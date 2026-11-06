import { Box, Typography } from "@mui/material";
import { SxObject } from "@ffilip/mui-react-utils";

const fontStyle: SxObject = {
  fontWeight: 600,
  textAlign: "center"
};

const layoutStyle: SxObject = {
  maxWidth: 1200,
  px: { xs: 1, sm: 2, md: 5 }
};


const now = new Date();
const month = now.getMonth();
const day = now.getDate();

const isSummerStartReached = month > 5 || (month === 5 && day >= 15);
const isSummerEndNotReached = month < 8 || (month === 8 && day <= 15);

const isSummer = isSummerStartReached && isSummerEndNotReached;



function TurkiyeNotice() {
  if (isSummer) {
    return null;
  }


  return (
    <Box sx={{ mb: 4, color: "#ffffff" }}>
      <Typography
        variant="h6"
        sx={{ mb: 2, ...fontStyle }}
        children={"ВАЖНО!"}
      />
      <Typography
        variant="subtitle1"
        sx={{ mb: 2, ...fontStyle, ...layoutStyle }}
        children={"Според информация на Министерството на търговията на Турция, излъчването на камерите на граничните пунктове е сезонно."}
      />
      <Typography
        variant="subtitle1"
        sx={{ ...fontStyle, ...layoutStyle }}
        children={"Публичният достъп до live изображенията се осигурява през летния период."}
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