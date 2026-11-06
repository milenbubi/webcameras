import { Button } from "@mui/material";
import { IPlaceButton, Place } from "../../Utils/places";
import { placeButtonCustomStyle } from "../../Styles/placeButtonStyles";

interface IProps {
  button: IPlaceButton;
  onClick: (place: Place) => void;
  isExternal: boolean;
  isSelected: boolean;
}



function PlaceSingleButton({ button, onClick, isExternal, isSelected }: IProps) {
  const buttonSX = placeButtonCustomStyle
  [isExternal ? "external" : "internal"]
  [isSelected ? "selected" : "unselected"];


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