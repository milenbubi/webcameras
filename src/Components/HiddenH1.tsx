import Typography from '@mui/material/Typography';



function HiddenH1() {
  return (
    <Typography
      variant="h1"
      sx={{
        position: "absolute",
        width: "1px",
        height: "1px",
        top: 0,
        left: 0,
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clipPath: "inset(50%)",
        whiteSpace: "nowrap",
        border: 0
      }}
    >
      {"Гледай на живо камери от ГКПП в България и Югоизточна Европа. Получавай информация в реално време от най-важните гранични пунктове"}
    </Typography>
  );
}


export default HiddenH1;