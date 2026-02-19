import { Box } from "@mui/material";
import Toggler, { ITogglerProps } from "./Toggler";



function StreamToggler({ isOn, onToggle }: ITogglerProps) {
  return (
    <Box sx={{ position: "absolute", left: -7, top: -30 }}>
      <Toggler
        isOn={isOn}
        onToggle={onToggle}
        pulseEnabled={false}
        width={40}
      />
    </Box>
  );
}



export default StreamToggler;