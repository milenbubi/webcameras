import { CardMedia, Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Title from "../Components/Title";
import Centered from "../Utils/Centered";
import FSButton from "../Components/FSButton";
import ChangeCamButton from "../Components/ChangeCamButton";



function Bulgaria() {
  const Kulata = useRef<HTMLImageElement>(null)
  const [streamKulata, setStreamKulata] = useState(1);
  const [streamKalotinaToBG, setStreamKalotinaToBG] = useState(1);
  const [streamKalotinaToSRB, setStreamKalotinaToSRB] = useState(1);


  // useEffect(() => {  // Kulata camera
  //   const refreshCam = () => {
  //     const src = `https://cdn.uab.org/images/cctv/images/cctv/cctv_${streamKulata === 1 ? "01" : 114}/cctv.jpg?${Date.now()}`;
  //     Kulata.current?.setAttribute("src", src);
  //   };

  //   refreshCam();
  //   const interval = setInterval(refreshCam, 30000);

  //   return () => clearInterval(interval);
  // }, [streamKulata]);


  return (
    <Stack gap={5} pt={3} width="100%" alignItems="center">


      {/* Кулата */}
      {/* <Centered id="cklt" maxHeight="100%" maxWidth={700} position="relative">
        <CardMedia
          ref={Kulata}
          sx={{ objectFit: "contain", maxHeight: "100%" }}
          component="img"
        />
        <Title value={`Кулата - ${streamKulata === 1 ? "800" : "OMV, 2500"}м преди Гърция`} />
        <ChangeCamButton streamIndex={streamKulata} onClick={setStreamKulata} />
        <FSButton fsElementId="cklt" />
      </Centered> */}


      {/* Маказа */}
      {/* <Centered gap={5} maxHeight="100%" width="100%" flexWrap="wrap">
        <Centered id="mkrd" width="100%" maxHeight="100%" position="relative" sx={{ maxWidth: 700 }}>
          <iframe
            src="https://www.youtube.com/embed/oUJnhPJF1_0?rel=0&autoplay=1&mute=1&controls=0"
            style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
          />
          <Title value="Маказа - посока Кърджали" />
          <FSButton fsElementId="mkrd" />
        </Centered>

        <Centered id="mgkp" width="100%" maxHeight="100%" position="relative" sx={{ maxWidth: 700 }}>
          <iframe
            src="https://www.youtube.com/embed/THHnRR3kRjE?rel=0&autoplay=1&mute=1&controls=0"
            style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
          />
          <Title value="Маказа - посока ГКПП" />
          <FSButton fsElementId="mgkp" />
        </Centered>
      </Centered> */}


      {/* Калотина */}
      <Centered gap={5} maxHeight="100%" width="100%" flexWrap="wrap">
        <Centered id="kblg" width="100%" maxHeight="100%" position="relative" sx={{ maxWidth: 700 }}>
          <iframe
            src={`https://live.uzivokamere.com/${streamKalotinaToBG === 1 ? "amss_" : ""}gradina2`}
            style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
          />
          <Title value="Калотина - посока България" />
          <ChangeCamButton streamIndex={streamKalotinaToBG} onClick={setStreamKalotinaToBG} />
          <FSButton fsElementId="kblg" />
        </Centered>

        <Centered id="ksrb" width="100%" maxHeight="100%" position="relative" sx={{ maxWidth: 700 }}>
          <iframe
            src={`https://live.uzivokamere.com/${streamKalotinaToSRB === 1 ? "amss_" : ""}gradina1`}
            style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
          />
          <Title value="Калотина - посока Сърбия" />
          <ChangeCamButton streamIndex={streamKalotinaToSRB} onClick={setStreamKalotinaToSRB} />
          <FSButton fsElementId="ksrb" />
        </Centered>
      </Centered>


    </Stack>
  );
}



export default Bulgaria;