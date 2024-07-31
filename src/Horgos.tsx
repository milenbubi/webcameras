import { useState } from "react";
import { Box, Stack } from "@mui/material";
import Title from "./Components/Title";
import FSButton from "./Components/FSButton";
import ChangeCamButton from "./Components/ChangeCamButton";



function Horgos() {
  const [streamToHUNG, setStreamToHUNG] = useState(1);
  const [streamToSRB, setStreamToSRB] = useState(1);


  return (  // Хоргош
    <Stack gap={5} pt={3} width="100%" alignItems="center">

      <Stack gap={5} maxHeight="100%" width="100%" justifyContent="center" alignItems="center" flexDirection="row" flexWrap="wrap">
        <Box
          id="hth" width="100%" maxHeight="100%" position="relative" justifyContent="center" alignItems="center" display="flex"
          sx={{ maxWidth: 700 }}
        >
          <iframe
            src={`https://live.uzivokamere.com/${streamToHUNG === 1 ? "amss_" : ""}horgos2`}
            style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
          />
          <Title value="Хоргош - към Унгария" />
          <ChangeCamButton streamIndex={streamToHUNG} sx={{ top: 20 }} onClick={setStreamToHUNG} />
          <FSButton fsElementId="hth" />
        </Box>

        <Box
          id="hts" width="100%" maxHeight="100%" position="relative" justifyContent="center" alignItems="center" display="flex"
          sx={{ maxWidth: 700 }}
        >
          <iframe
            src={`https://live.uzivokamere.com/${streamToSRB === 1 ? "amss_" : ""}horgos1`}
            style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
          />
          <Title value="Хоргош - към Сърбия" />
          <ChangeCamButton streamIndex={streamToSRB} sx={{ top: 20 }} onClick={setStreamToSRB} />
          <FSButton fsElementId="hts" />
        </Box>
      </Stack>

    </Stack>
  );
}



export default Horgos;