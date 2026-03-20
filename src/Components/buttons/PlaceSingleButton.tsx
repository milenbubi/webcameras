import { useMemo } from "react";
import { yellow } from "@mui/material/colors";
import { Button, SxProps } from "@mui/material";
import { IPlaceButton, Place } from "../../Utils/places";

interface IProps {
  button: IPlaceButton;
  onClick: (place: Place) => void;
  isExternal: boolean;
  isSelected: boolean;
}



function PlaceSingleButton({ button, onClick, isExternal, isSelected }: IProps) {
  const buttonSX = useMemo<SxProps>(() => {
    if (isExternal) {
      return {
        color: "#000000",
        opacity: isSelected ? 1 : 0.5,
        backgroundColor: yellow[isSelected ? 600 : 500],
        "&:hover": {
          backgroundColor: yellow[isSelected ? 600 : "A700"],
          opacity: isSelected ? 1 : 0.8
        }
      }
    }
    else {
      return {
        opacity: isSelected ? 1 : 0.5,
        background: isSelected ? "#191d21" : "#000000",
        "&:hover": {
          background: isSelected ? "#191d21" : "rgba(0, 0, 0, 0.83)",
          opacity: isSelected ? 1 : 0.8
        }
      }
    }
  }, [isSelected]);


  return (
    <Button
      children={button.label}
      variant="contained"
      onClick={() => onClick(button.place)}
      disableFocusRipple={isSelected}
      disableTouchRipple
      disableElevation
      sx={buttonSX}
    />
  );
}



export default PlaceSingleButton;