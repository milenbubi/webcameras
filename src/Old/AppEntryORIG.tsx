import { useState } from "react";
import { Button, Stack, colors } from "@mui/material";
import Horgos from "../BCCP/Horgos";
import Bulgaria from "../BCCP/Bulgaria";
import Author from "../Components/Author";
import BCCPLinks from "../Components/BCCPLinks";

type Country = "Bulgaria" | "Hungary";



function AppEntry() {
  const [country, setCountry] = useState<Country>(() => {
    const target = localStorage.getItem("country");

    if (target === "Bulgaria" || target === "Hungary") {
      return target;
    }
    else {
      return "Bulgaria";
    }
  });


  const handleChange = (target: Country) => {
    setCountry(target);
    localStorage.setItem("country", target);
  };


  return (
    <Stack gap={4} bgcolor="teal" minHeight="100%" p={2} alignItems="center" sx={{ overflowY: "auto", position: "relative" }}>
      <Stack direction="row" gap={4} sx={{ pt: { xs: 0, md: 2 } }}>
        <Button
          sx={{
            width: { xs: 140, sm: 180 },
            color: "#ffffff",
            fontWeight: 800,
            fontSize: { xs: 14, sm: 20 },
            backgroundColor: colors.blue[900],
            "&:hover": {
              backgroundColor: colors.blue[800]
            },
            opacity: country === "Bulgaria" ? 1 : 0.5
          }}
          children="България"
          variant="contained"
          onClick={() => handleChange("Bulgaria")}
        />

        <Button
          sx={{
            width: { xs: 140, sm: 180 },
            color: "#ffffff",
            fontWeight: 800,
            fontSize: { xs: 14, sm: 20 },
            backgroundColor: colors.blue[900],
            "&:hover": {
              backgroundColor: colors.blue[800]
            },
            opacity: country === "Hungary" ? 1 : 0.5
          }}

          children="Унгария"
          variant="contained"
          onClick={() => handleChange("Hungary")}
        />
      </Stack>

      {country === "Bulgaria" && <Bulgaria />}
      {country === "Hungary" && <Horgos />}

      <Author />
      <BCCPLinks />
    </Stack>
  );
}



export default AppEntry;