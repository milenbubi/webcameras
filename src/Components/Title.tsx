import { Typography } from "@mui/material";
import { SX } from "@ffilip/mui-react-utils";

interface IProps {
  value: string;
  sx?: SX;
  imageUpdateLabel?: string;
}



function Title({ value, sx, imageUpdateLabel }: IProps) {
  return (
    <Typography
      sx={{
        color: "#ffffff",
        fontWeight: 500,
        position: "absolute",
        left: 61,
        top: -30,
        fontSize: 18,
        ...sx
      }}
    >

      {value}

      {imageUpdateLabel && (
        <Typography sx={{ pl: 2 }} variant="body2" color="text.secondary" component="span">
          {imageUpdateLabel}
        </Typography>
      )}

    </Typography>
  );
}



export default Title;