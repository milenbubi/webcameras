import { IconButton } from "@mui/material";
import { isNumeric } from "@ffilip/chan180-utils";
import { SX } from "../Utils/types/types";

interface IProps {
  onClick: (streamIndex: number) => void;
  camIndex: number;
  sx?: SX;
  camCount: number;
}



function ChangeCamButton({ onClick, camIndex, sx, camCount }: IProps) {
  const handleClick = () => {
    if (isNumeric(camCount, { isInteger: true, notNegative: true }) && camCount > 0) {
      const newIndex = camIndex + 1;
      onClick(newIndex > camCount ? 1 : newIndex);
    }
  };


  return (
    <IconButton
      sx={{
        color: "yellow",
        position: "absolute",
        width: 66,
        height: 66,
        top: 0,
        right: 1,
        fontSize: 36,
        fontWeight: 600,
        fontFamily: "arial",
        ...sx
      }}
      onClick={handleClick}
    >
      {camIndex}
    </IconButton>
  );
}



export default ChangeCamButton;