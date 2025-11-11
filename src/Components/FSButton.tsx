import { useEffect, useState } from "react";
import { goFullScreen } from "@ffilip/chan180-utils/env";
import { IconButton, SxProps, Theme } from "@mui/material";

interface IProps {
  fsElementId: string;
  sx?: SxProps<Theme>;
  size?: number;
}

const fsOffIcon = "M17.5 6.5H20a1.5 1.5 0 0 1 0 3h-3A2.5 2.5 0 0 1 14.5 7V4a1.5 1.5 0 0 1 3 0zM4 6.5h2.5V4a1.5 1.5 0 1 1 3 0v3A2.5 2.5 0 0 1 7 9.5H4a1.5 1.5 0 1 1 0-3m0 11h2.5V20a1.5 1.5 0 0 0 3 0v-3A2.5 2.5 0 0 0 7 14.5H4a1.5 1.5 0 0 0 0 3m16 0h-2.5V20a1.5 1.5 0 0 1-3 0v-3a2.5 2.5 0 0 1 2.5-2.5h3a1.5 1.5 0 0 1 0 3";
const fsOnIcon = "M18.5 5.5H16a1.5 1.5 0 0 1 0-3h3A2.5 2.5 0 0 1 21.5 5v3a1.5 1.5 0 0 1-3 0zM8 5.5H5.5V8a1.5 1.5 0 1 1-3 0V5A2.5 2.5 0 0 1 5 2.5h3a1.5 1.5 0 1 1 0 3m0 13H5.5V16a1.5 1.5 0 0 0-3 0v3A2.5 2.5 0 0 0 5 21.5h3a1.5 1.5 0 0 0 0-3m8 0h2.5V16a1.5 1.5 0 0 1 3 0v3a2.5 2.5 0 0 1-2.5 2.5h-3a1.5 1.5 0 0 1 0-3";



function FSButton({ fsElementId, sx, size = 36 }: IProps) {
  const [fsOn, setFsOn] = useState(false);


  useEffect(() => {
    const fullscreenchanged = () => {
      setFsOn(!!document.fullscreenElement);
    };

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
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
        <g>
          <path
            fill="currentColor"
            d={fsOn ? fsOffIcon : fsOnIcon}
          />
        </g>
      </svg>
    </IconButton>
  );
}



export default FSButton;