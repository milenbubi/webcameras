import { Box } from "@mui/material";
import StreamModeToggler from "./StreamModeToggler";

interface IProps {
  isOn: boolean;
  onToggle: VoidFunction;
}



function LSToggler({ isOn, onToggle }: IProps) {
  return (
    <Box sx={{ position: "absolute", left: -7, top: -30 }}>
      <StreamModeToggler isStreaming={isOn !== false} onToggle={onToggle} doNotPulse width={40} />
    </Box>
  );
}



export default LSToggler;