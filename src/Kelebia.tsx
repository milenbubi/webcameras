import { Box, Stack } from "@mui/material";
import Title from "./Components/Title";
import FSButton from "./Components/FSButton";



function Kelebia() {
  return (  // Келебия
    <Stack gap={5} pt={3} width="100%" alignItems="center">

      <Stack gap={5} maxHeight="100%" width="100%" justifyContent="center" alignItems="center" flexDirection="row" flexWrap="wrap">
        <Box
          id="ksrb" width="100%" maxHeight="100%" position="relative" justifyContent="center" alignItems="center" display="flex"
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
          id="khun" width="100%" maxHeight="100%" position="relative" justifyContent="center" alignItems="center" display="flex"
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

    </Stack>
  );
}



export default Kelebia;