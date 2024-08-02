import { useEffect, useState } from "react";
import { IconButton, SxProps, Theme } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import { goFullScreen } from "../Utils/fullscreen";

interface IProps {
  fsElementId: string;
  sx?: SxProps<Theme>;
}



function FSButton({ fsElementId, sx }: IProps) {
  const [fsOff, setFsOff] = useState(true);
  const [opacity, setOpacity] = useState(0);


  useEffect(() => {
    const fullscreenchanged = () => {
      if (document.fullscreenElement) setFsOff(false);
      else setFsOff(true);
    };

    const timeout = setTimeout(() => {  // Do not show button immediately
      setOpacity(1);
    }, 800);

    fullscreenchanged();  // Proceed button status if user plays with window size
    document.addEventListener("fullscreenchange", fullscreenchanged);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("fullscreenchange", fullscreenchanged);
    };
  }, []);


  return (
    <IconButton
      sx={{
        color: "yellow",
        position: "absolute",
        bottom: 20,
        right: 0,
        opacity,
        ...sx
      }}
      onClick={() => goFullScreen(fsElementId)}
    >
      {fsOff ? <FullscreenIcon sx={{ fontSize: 50 }} /> : <FullscreenExitIcon sx={{ fontSize: 50 }} />}
    </IconButton>
  );
}



export default FSButton;