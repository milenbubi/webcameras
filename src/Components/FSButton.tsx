import { useEffect, useState } from "react";
import { IconButton, SxProps, Theme } from "@mui/material";
import Iconify from "../Utils/Iconify";
import { goFullScreen } from "../Utils/fullscreen";

interface IProps {
  fsElementId: string;
  sx?: SxProps<Theme>;
}



function FSButton({ fsElementId, sx }: IProps) {
  const [fsOff, setFsOff] = useState(true);


  useEffect(() => {
    const fullscreenchanged = () => {
      if (document.fullscreenElement) setFsOff(false);
      else setFsOff(true);
    };


    fullscreenchanged();  // Proceed button status if user plays with window size
    document.addEventListener("fullscreenchange", fullscreenchanged);

    return () => {
      document.removeEventListener("fullscreenchange", fullscreenchanged);
    };
  }, []);


  return (
    <IconButton
      sx={{
        color: "yellow",
        position: "absolute",
        bottom: 7,
        right: 7,
        ...sx
      }}
      onClick={() => goFullScreen(fsElementId)}
    >
      <Iconify
        width={36}
        icon={fsOff ? "mingcute:fullscreen-fill" : "mingcute:fullscreen-exit-fill"}
      />
    </IconButton>
  );
}



export default FSButton;