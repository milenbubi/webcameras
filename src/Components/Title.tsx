import { Theme } from "@emotion/react";
import { SxProps, Typography } from "@mui/material";

interface IProps {
  value: string;
  sx?: SxProps<Theme>;
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