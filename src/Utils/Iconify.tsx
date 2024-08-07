import { forwardRef } from "react";
import { Icon } from "@iconify/react";
import Box, { BoxProps } from "@mui/material/Box";

// flaticon.com
interface IProps extends BoxProps {
  icon?: string;
}


function Iconify({ icon, width = 20, sx, ...other }: IProps) {
  return (
    <Box
      component={Icon}
      icon={icon}
      sx={{
        width,
        height: width,
        ...sx
      }}
      {...other}
    />
  );
}



export default Iconify;