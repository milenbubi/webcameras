import { Box, Stack } from "@mui/material";
import Title from "./Components/Title";
import FSButton from "./Components/FSButton";



function Djala() {
  return (  // Ђала
    <Stack gap={5} pt={3} width="100%" alignItems="center">

      <Stack gap={5} maxHeight="100%" width="100%" justifyContent="center" alignItems="center" flexDirection="row" flexWrap="wrap">
        <Box
          id="tth" width="100%" maxHeight="100%" position="relative" justifyContent="center" alignItems="center" display="flex"
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
          id="tts" width="100%" maxHeight="100%" position="relative" justifyContent="center" alignItems="center" display="flex"
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

    </Stack>
  );
}



export default Djala;