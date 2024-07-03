import { useEffect, useRef, useState } from "react";
import { Box, CardMedia, Stack } from "@mui/material";
import FSButton from "./FSButton";



function AppEntry() {
  const Kulata = useRef<HTMLImageElement>(null)
  const [isFs, setIsFs] = useState(false);


  useEffect(() => {
    const ZWH = document.querySelector("div[style]");
    ZWH?.setAttribute("style", "display: none!important")
  }, []);


  useEffect(() => {
    const fullscreenchanged = () => {
      setIsFs(!!document.fullscreenElement);
    };

    fullscreenchanged();
    document.addEventListener("fullscreenchange", fullscreenchanged);

    return () => { document.removeEventListener("fullscreenchange", fullscreenchanged); };
  }, []);


  useEffect(() => {  // Kulata camera
    const refreshCam = () => {
      const src = "https://cdn.uab.org/images/cctv/images/cctv/cctv_114/cctv.jpg?" + Date.now();
      Kulata.current?.setAttribute("src", src);
    };

    refreshCam();
    const interval = setInterval(refreshCam, 30000);

    return () => clearInterval(interval);
  }, []);


  return (
    <Stack gap={3} bgcolor="teal" minHeight="100%" p={2} alignItems="center" sx={{ overflowY: "auto" }}>

      <Box id="aaad" maxHeight="100%" position="relative" justifyContent="center" alignItems="center" display={isFs ? "flex" : "block"}>
        <CardMedia
          ref={Kulata}
          sx={{ objectFit: "contain", maxWidth: isFs ? "100" : 700, maxHeight: "100%" }}
          component="img"
        />
        <FSButton fsElementId="aaad" />
      </Box>


      <Stack gap={3} maxHeight="100%" width="100%" justifyContent="center" alignItems="center" flexDirection="row" flexWrap="wrap" >

        <Box
          id="aaarrr" width="100%" maxHeight="100%" position="relative" justifyContent="center" alignItems="center" display="flex" flexDirection="column"
          sx={{ maxWidth: 700 }}
        >
          <iframe
            src="https://www.youtube.com/embed/oUJnhPJF1_0?rel=0&autoplay=1&mute=1&controls=0"
            style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
          />
          <FSButton fsElementId="aaarrr" />
        </Box>

        <Box
          id="eee" width="100%" maxHeight="100%" position="relative" justifyContent="center" alignItems="center" display="flex" flexDirection="column"
          sx={{ maxWidth: 700 }}
        >
          <iframe
            src="https://www.youtube.com/embed/THHnRR3kRjE?rel=0&autoplay=1&mute=1&controls=0"
            style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
          />
          <FSButton fsElementId="eee" />
        </Box>
      </Stack>




    </Stack>
  );
}



export default AppEntry;