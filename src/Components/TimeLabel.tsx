import { useMemo } from "react";
import { SxProps, Theme, Typography } from "@mui/material";
import { formatUTCDateToLocalDateString, DateSource } from "@ffilip/chan180-utils";

interface IProps {
  date: DateSource;
  sx?: SxProps<Theme>;
}



function TimeLabel({ date, sx }: IProps) {
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
      sx={{
        color: "#f3f051ff",
        position: "absolute",
        top: 10,
        left: 10,
        fontSize: { xs: 10, sm: 14 },
        ...sx
      }}
      children={dateLabel}
    />
  );
}



export default TimeLabel;