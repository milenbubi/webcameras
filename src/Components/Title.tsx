import { Theme } from "@emotion/react";
import { SxProps, Typography } from "@mui/material";

interface IProps {
  value: string;
  sx?: SxProps<Theme>;
}


function Title({ value, sx }: IProps) {
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
    </Typography>
  );
}



export default Title;