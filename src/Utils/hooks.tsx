import { Box } from "@mui/material";
import { useCallback, useState } from "react";
import { safeLocalStorage } from "@ffilip/chan180-utils/helpers";
import StreamModeSwitch from "../Components/StreamModeSwitch";

interface IProps {
  isOn: boolean;
  switchIsOn: VoidFunction;
}



export function useBooleanLS(key: string) {
  const [isBooleanLSOn, setIsBooleanLSOn] = useState(() => {
    const target = safeLocalStorage.get(key);

    switch (target) {
      case "false": return false;
      default: return true;
    }
  });


  const switchBooleanLS = useCallback(() => {
    const target = safeLocalStorage.get(key);
    const newValue = target === "false" ? "true" : "false";

    setIsBooleanLSOn(newValue !== "false");
    safeLocalStorage.set(key, newValue);
  }, []);


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