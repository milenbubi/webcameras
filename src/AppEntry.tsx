import { useState } from "react";
import { Button, Stack, colors } from "@mui/material";
import Djala from "./BCCP/Djala";
import Horgos from "./BCCP/Horgos";
import Kelebia from "./BCCP/Kelebia";
import Bulgaria from "./BCCP/Bulgaria";
import Author from "./Components/Author";
import BCCPLinks from "./Components/BCCPLinks";
import NoStreamTitle from "./Components/NoStreamTitle";
import StreamModeSwitch from "./Components/StreamModeSwitch";

type Place = "Bulgaria" | "Horgos" | "Djala" | "Kelebia";

interface IBccpData {
  place: Place;
  label: string
}

const Buttons: IBccpData[] = [
  { place: "Bulgaria", label: "България" },
  { place: "Horgos", label: "Хоргош" },
  { place: "Djala", label: "Ђала" },
  { place: "Kelebia", label: "Келебия" }
];



function AppEntry() {
  const [isStreaming, setIsStreaming] = useState(localStorage.getItem("streaming") !== "off");

  const [bccp, setBccp] = useState<Place>(() => {
    const target = localStorage.getItem("place");

    switch (target) {
      case "Bulgaria": return target;
      case "Horgos": return target;
      case "Djala": return target;
      case "Kelebia": return target;
      default: return "Bulgaria";
    }
  });


  const handleChangeBCCP = (target: Place) => {
    setBccp(target);
    localStorage.setItem("place", target);
  };


  const handleChangeOnOff = (isOn: boolean) => {
    setIsStreaming(isOn);
    localStorage.setItem("streaming", isOn ? "on" : "off");
  };


  return (
    <Stack gap={4} bgcolor="teal" height={1} py={2} alignItems="center" sx={{ overflowY: "auto", position: "relative", px: { xs: 1, sm: 2 } }}>

      <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={3} sx={{ pt: { xs: 0, md: 2 } }}>
        {Buttons.map(({ place, label }) => (
          <Button
            key={place}
            children={label}
            variant="contained"
            onClick={() => handleChangeBCCP(place)}
            sx={{
              width: { xs: 140, sm: 160 },
              color: "#ffffff",
              fontWeight: 800,
              fontFamily: "Arial",
              fontSize: { xs: 14, sm: 20 },
              letterSpacing: "3px",
              opacity: place === bccp ? 1 : 0.5,
              backgroundColor: colors.blue[900],
              "&:hover": {
                backgroundColor: colors.blue[800]
              }
            }}
          />
        ))}
      </Stack>

      {
        isStreaming ? (
          <>
            {bccp === "Bulgaria" && <Bulgaria />}
            {bccp === "Horgos" && <Horgos />}
            {bccp === "Djala" && <Djala />}
            {bccp === "Kelebia" && <Kelebia />}
          </>
        ) : <NoStreamTitle />
      }

      <Stack sx={{ width: 1, mt: -1 }} gap={2}>
        <Stack direction="row" justifyContent="space-between" sx={{ width: 1, px: 1 }}>
          <Author />
          <StreamModeSwitch isStreaming={isStreaming} onChange={handleChangeOnOff} />
        </Stack>

        <BCCPLinks />
      </Stack>
    </Stack>
  );
}



export default AppEntry;