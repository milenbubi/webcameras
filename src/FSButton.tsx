import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import { goFullScreen } from "./Utils/fullscreen";

interface IProps {
  fsElementId: string;
}



function FSButton({ fsElementId }: IProps) {
  const [fsOff, setFsOff] = useState(true);


  useEffect(() => {
    const fullscreenchanged = () => {
      if (document.fullscreenElement) setFsOff(false);
      else setFsOff(true);
    };

    fullscreenchanged();  // Proceed button status if user plays with window size
    document.addEventListener("fullscreenchange", fullscreenchanged);

    return () => { document.removeEventListener("fullscreenchange", fullscreenchanged); };
  }, []);


  return (
    <IconButton
      sx={{ color: "yellow", position: "absolute", bottom: 0, right: 0 }}
      onClick={() => goFullScreen(fsElementId)}
    >
      {fsOff ? <FullscreenIcon sx={{ fontSize: 50 }} /> : <FullscreenExitIcon sx={{ fontSize: 50 }} />}
    </IconButton>
  );
}



export default FSButton;