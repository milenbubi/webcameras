import { Box, Stack } from "@mui/material";
import Title from "./Title";
import FSButton from "./FSButton";

// https://uzivokamere.com/granicni-prelaz-horgos-madjarska-srbija/



function Hungary() {
  return (
    <Stack gap={5} pt={3} width="100%" alignItems="center">


      {/* Хоргош - към Сърбия */}
      <Stack gap={5} maxHeight="100%" width="100%" justifyContent="center" alignItems="center" flexDirection="row" flexWrap="wrap" >
        <Box
          id="hks1" width="100%" maxHeight="100%" position="relative" justifyContent="center" alignItems="center" display="flex" flexDirection="column"
          sx={{ maxWidth: 700 }}
        >
          <iframe
            src="https://live.uzivokamere.com/horgos1"
            style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
          />
          <Title value="Хоргош - към Сърбия 1" />
          <FSButton fsElementId="hks1" />
        </Box>

        <Box
          id="hks2" width="100%" maxHeight="100%" position="relative" justifyContent="center" alignItems="center" display="flex" flexDirection="column"
          sx={{ maxWidth: 700 }}
        >
          <iframe
            src="https://live.uzivokamere.com/amss_horgos1"
            style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
          />
          <Title value="Хоргош - към Сърбия 2" />
          <FSButton fsElementId="hks2" />
        </Box>
      </Stack>


      {/* Хоргош - към Унгария */}
      <Stack gap={5} maxHeight="100%" width="100%" justifyContent="center" alignItems="center" flexDirection="row" flexWrap="wrap" >
        <Box
          id="hkh1" width="100%" maxHeight="100%" position="relative" justifyContent="center" alignItems="center" display="flex" flexDirection="column"
          sx={{ maxWidth: 700 }}
        >
          <iframe
            src="https://live.uzivokamere.com/horgos2"
            style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
          />
          <Title value="Хоргош - към Унгария 1" />
          <FSButton fsElementId="hkh1" />
        </Box>

        <Box
          id="hkh2" width="100%" maxHeight="100%" position="relative" justifyContent="center" alignItems="center" display="flex" flexDirection="column"
          sx={{ maxWidth: 700 }}
        >
          <iframe
            src="https://live.uzivokamere.com/amss_horgos2"
            style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
          />
          <Title value="Хоргош - към Унгария 2" />
          <FSButton fsElementId="hkh2" />
        </Box>
      </Stack>


      {/* Келебия */}
      <Stack gap={5} maxHeight="100%" width="100%" justifyContent="center" alignItems="center" flexDirection="row" flexWrap="wrap" >
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


    </Stack>
  );
}



export default Hungary;