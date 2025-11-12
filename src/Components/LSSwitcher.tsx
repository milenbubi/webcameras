import { Box } from "@mui/material";
import StreamModeSwitch from "./StreamModeSwitch";

interface IProps {
  isOn: boolean;
  switchIsOn: VoidFunction;
}



function LSSwitcher({ isOn, switchIsOn }: IProps) {
  return (
    <Box sx={{ position: "absolute", left: -15, top: -38 }}>
      <Box sx={{ transform: "scale(0.5)" }}>
        <StreamModeSwitch isStreaming={isOn !== false} onChange={switchIsOn} doNotPulse />
      </Box>
    </Box>
  );
}



export default LSSwitcher;