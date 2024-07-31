import { useState } from "react";
import { Button, Stack, colors } from "@mui/material";
import Djala from "./Djala";
import Horgos from "./Horgos";
import Kelebia from "./Kelebia";
import Bulgaria from "./Bulgaria";
import Author from "./Components/Author";
import BCCPLinks from "./Components/BCCPLinks";

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


  const handleChange = (target: Place) => {
    setBccp(target);
    localStorage.setItem("place", target);
  };


  return (
    <Stack gap={4} bgcolor="teal" minHeight="100%" py={2} alignItems="center" sx={{ overflowY: "auto", position: "relative", px: { xs: 1, sm: 2 } }}>

      <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={3} sx={{ pt: { xs: 0, md: 2 } }}>
        {Buttons.map(({ place, label }) => (
          <Button
            key={place}
            children={label}
            variant="contained"
            onClick={() => handleChange(place)}
            sx={{
              width: { xs: 140, sm: 160 },
              color: "#ffffff",
              fontWeight: 800,
              fontSize: { xs: 14, sm: 20 },
              opacity: place === bccp ? 1 : 0.5,
              backgroundColor: colors.blue[900],
              "&:hover": {
                backgroundColor: colors.blue[800]
              }
            }}
          />
        ))}
      </Stack>

      {bccp === "Bulgaria" && <Bulgaria />}
      {bccp === "Horgos" && <Horgos />}
      {bccp === "Djala" && <Djala />}
      {bccp === "Kelebia" && <Kelebia />}

      <Author />
      <BCCPLinks />

    </Stack>
  );
}



export default AppEntry;