import { useMemo } from "react";
import { SxProps, Theme, Typography } from "@mui/material";
import { formatUTCDateToLocalDateString, DateSource } from "@ffilip/chan180-utils/time";

interface IProps {
  date: DateSource;
  sx?: SxProps<Theme>;
  color?: string;
}



function TimeLabel({ date, sx, color = "#f3f051ff" }: IProps) {
  const dateLabel = useMemo(() => {
    const formattedDate = formatUTCDateToLocalDateString({
      source: date,
      unit: "camStyle",
      returnEmptyInsteadOfNA: true
    })

    return formattedDate;
  }, [date]);



  return (
    <Typography
      variant="h6"
      sx={{
        color,
        position: "absolute",
        bottom: 0,
        left: 10,
        ...sx
      }}
      children={dateLabel}
    />
  );
}



export default TimeLabel;