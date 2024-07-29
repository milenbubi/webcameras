import { useState } from "react";
import { Box, Stack } from "@mui/material";
import Title from "./Title";
import FSButton from "./FSButton";
import BCCPLinks from "./BCCPLinks";
import ChangeCamButton from "./ChangeCamButton";



function Hungary() {
  const [streamHorgosToHUNG, setStreamHorgosToHUNG] = useState(1);
  const [streamHorgosToSRB, setStreamHorgosToSRB] = useState(1);


  return (
    <Stack gap={5} pt={3} width="100%" alignItems="center">


      {/* Хоргош */}
      <Stack gap={5} maxHeight="100%" width="100%" justifyContent="center" alignItems="center" flexDirection="row" flexWrap="wrap">
        <Box
          id="hth" width="100%" maxHeight="100%" position="relative" justifyContent="center" alignItems="center" display="flex" flexDirection="column"
          sx={{ maxWidth: 700 }}
        >
          <iframe
            src={`https://live.uzivokamere.com/${streamHorgosToHUNG === 1 ? "amss_" : ""}horgos2`}
            style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
          />
          <Title value="Хоргош - към Унгария" />
          <ChangeCamButton streamIndex={streamHorgosToHUNG} sx={{ top: 20 }} onClick={setStreamHorgosToHUNG} />
          <FSButton fsElementId="hth" />
        </Box>

        <Box
          id="hts" width="100%" maxHeight="100%" position="relative" justifyContent="center" alignItems="center" display="flex" flexDirection="column"
          sx={{ maxWidth: 700 }}
        >
          <iframe
            src={`https://live.uzivokamere.com/${streamHorgosToSRB === 1 ? "amss_" : ""}horgos1`}
            style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
          />
          <Title value="Хоргош - към Сърбия" />
          <ChangeCamButton streamIndex={streamHorgosToSRB} sx={{ top: 20 }} onClick={setStreamHorgosToSRB} />
          <FSButton fsElementId="hts" />
        </Box>
      </Stack>


      {/* Тала */}
      <Stack gap={5} maxHeight="100%" width="100%" justifyContent="center" alignItems="center" flexDirection="row" flexWrap="wrap">
        <Box
          id="tth" width="100%" maxHeight="100%" position="relative" justifyContent="center" alignItems="center" display="flex" flexDirection="column"
          sx={{ maxWidth: 700 }}
        >
          <iframe
            src="https://live.uzivokamere.com/djala1"
            style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
          />
          <Title value="Ђала - към Унгария" />
          <FSButton fsElementId="tth" />
        </Box>

        <Box
          id="tts" width="100%" maxHeight="100%" position="relative" justifyContent="center" alignItems="center" display="flex" flexDirection="column"
          sx={{ maxWidth: 700 }}
        >
          <iframe
            src="https://live.uzivokamere.com/djala2"
            style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
          />
          <Title value="Ђала - към Сърбия" />
          <FSButton fsElementId="tts" />
        </Box>
      </Stack>


      {/* Келебия */}
      <Stack gap={5} maxHeight="100%" width="100%" justifyContent="center" alignItems="center" flexDirection="row" flexWrap="wrap">
        <Box
          id="ksrb" width="100%" maxHeight="100%" position="relative" justifyContent="center" alignItems="center" display="flex" flexDirection="column"
          sx={{ maxWidth: 700 }}
        >
          <iframe
            src="https://live.uzivokamere.com/kelebija1"
            style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
          />
          <Title value="Келебия - към Сърбия" />
          <FSButton fsElementId="ksrb" />
        </Box>

        <Box
          id="khun" width="100%" maxHeight="100%" position="relative" justifyContent="center" alignItems="center" display="flex" flexDirection="column"
          sx={{ maxWidth: 700 }}
        >
          <iframe
            src="https://live.uzivokamere.com/kelebija2/"
            style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
          />
          <Title value="Келебия - към Унгария" />
          <FSButton fsElementId="khun" />
        </Box>
      </Stack>


      <BCCPLinks />


    </Stack>
  );
}



export default Hungary;