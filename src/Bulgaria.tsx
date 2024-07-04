import { useEffect, useRef, useState } from "react";
import { Box, CardMedia, Stack } from "@mui/material";
import Title from "./Title";
import FSButton from "./FSButton";



function Bulgaria() {
  const Kulata = useRef<HTMLImageElement>(null)
  const [isFs, setIsFs] = useState(false);


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
    <Stack gap={5} pt={3} width="100%" alignItems="center" >


      {/* Кулата  */}
      <Box id="cklt" maxHeight="100%" position="relative" justifyContent="center" alignItems="center" display={isFs ? "flex" : "block"}>
        <CardMedia
          ref={Kulata}
          sx={{ objectFit: "contain", maxWidth: isFs ? "100%" : 700, maxHeight: "100%" }}
          component="img"
        />
        <Title value="OMV - 2 км преди границата" />
        <FSButton fsElementId="cklt" />
      </Box>


      {/* Маказа */}
      <Stack gap={5} maxHeight="100%" width="100%" justifyContent="center" alignItems="center" flexDirection="row" flexWrap="wrap" >
        <Box
          id="mkrd" width="100%" maxHeight="100%" position="relative" justifyContent="center" alignItems="center" display="flex" flexDirection="column"
          sx={{ maxWidth: 700 }}
        >
          <iframe
            src="https://www.youtube.com/embed/oUJnhPJF1_0?rel=0&autoplay=1&mute=1&controls=0"
            style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
          />
          <Title value="Маказа - посока Кърджали" />
          <FSButton fsElementId="mkrd" />
        </Box>

        <Box
          id="mgkp" width="100%" maxHeight="100%" position="relative" justifyContent="center" alignItems="center" display="flex" flexDirection="column"
          sx={{ maxWidth: 700 }}
        >
          <iframe
            src="https://www.youtube.com/embed/THHnRR3kRjE?rel=0&autoplay=1&mute=1&controls=0"
            style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
          />
          <Title value="Маказа - посока ГКПП" />
          <FSButton fsElementId="mgkp" />
        </Box>
      </Stack>


      {/* Калотина */}
      <Stack gap={3} maxHeight="100%" width="100%" justifyContent="center" alignItems="center" flexDirection="row" flexWrap="wrap">
        <Box
          id="kblg" width="100%" maxHeight="100%" position="relative" justifyContent="center" alignItems="center" display="flex" flexDirection="column"
          sx={{ maxWidth: 720 }}
        >
          <iframe
            src="https://weather-webcam.eu/cams/gradina2.html"
            style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9.16" }}
          />
          <Title value="Калотина - посока България" sx={{ top: -18 }} />
          <FSButton fsElementId="kblg" sx={{ right: 9, bottom: 8 }} />
        </Box>

        <Box
          id="ksrb" width="100%" maxHeight="100%" position="relative" justifyContent="center" alignItems="center" display="flex" flexDirection="column"
          sx={{ maxWidth: 720 }}
        >
          <iframe
            src="https://weather-webcam.eu/cams/gradina1.html"
            style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9.16" }}
          />
          <Title value="Калотина - посока Сърбия" sx={{ top: -18 }} />
          <FSButton fsElementId="ksrb" sx={{ right: 9, bottom: 8 }} />
        </Box>
      </Stack>


    </Stack>
  );
}



export default Bulgaria;