import { useEffect, useRef, useState } from "react";
import { Box, CardMedia, Stack } from "@mui/material";
import Title from "./Components/Title";
import FSButton from "./Components/FSButton";
import ChangeCamButton from "./Components/ChangeCamButton";



function Bulgaria() {
  const [isFs, setIsFs] = useState(false);
  const Kulata = useRef<HTMLImageElement>(null)
  const [streamKalotinaToBG, setStreamKalotinaToBG] = useState(1);
  const [streamKalotinaToSRB, setStreamKalotinaToSRB] = useState(1);


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
    <Stack gap={5} pt={3} width="100%" alignItems="center">


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
      <Stack gap={5} maxHeight="100%" width="100%" justifyContent="center" alignItems="center" flexDirection="row" flexWrap="wrap">
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
      <Stack gap={5} maxHeight="100%" width="100%" justifyContent="center" alignItems="center" flexDirection="row" flexWrap="wrap">
        <Box
          id="kblg" width="100%" maxHeight="100%" position="relative" justifyContent="center" alignItems="center" display="flex" flexDirection="column"
          sx={{ maxWidth: 700 }}
        >
          <iframe
            src={`https://live.uzivokamere.com/${streamKalotinaToBG === 1 ? "amss_" : ""}gradina2`}
            style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
          />
          <Title value="Калотина - посока България" />
          <ChangeCamButton streamIndex={streamKalotinaToBG} onClick={setStreamKalotinaToBG} />
          <FSButton fsElementId="kblg" />
        </Box>

        <Box
          id="ksrb" width="100%" maxHeight="100%" position="relative" justifyContent="center" alignItems="center" display="flex" flexDirection="column"
          sx={{ maxWidth: 700 }}
        >
          <iframe
            src={`https://live.uzivokamere.com/${streamKalotinaToSRB === 1 ? "amss_" : ""}gradina1`}
            style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
          />
          <Title value="Калотина - посока Сърбия" />
          <ChangeCamButton streamIndex={streamKalotinaToSRB} onClick={setStreamKalotinaToSRB} />
          <FSButton fsElementId="ksrb" />
        </Box>
      </Stack>


    </Stack>
  );
}



export default Bulgaria;