import { useState } from "react";
import { Box } from "@mui/material";
import StreamModeSwitch from "../Components/StreamModeSwitch";

interface IProps {
  isOn: boolean;
  switchIsOn: VoidFunction;
}



export function useBooleanLS(key: string) {
  const [isBooleanLSOn, setIsBooleanLSOn] = useState<boolean>(() => {
    const target = localStorage.getItem(key);

    switch (target) {
      case "false": return false;
      default: return true;
    }
  });


  const switchBooleanLS = () => {
    const target = localStorage.getItem(key);
    const newValue = target === "false" ? "true" : "false";

    setIsBooleanLSOn(newValue !== "false");
    localStorage.setItem(key, newValue);
  };


  return { isBooleanLSOn, switchBooleanLS };
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