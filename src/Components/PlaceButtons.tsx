import { Button, Stack, colors } from "@mui/material";
import { IPlaceButton, Place } from "../Utils/places";

const Buttons: IPlaceButton[] = [
  { place: "Bulgaria", label: "България" },
  { place: "Horgos", label: "Хоргош" },
  { place: "Djala", label: "Ђала" },
  { place: "Kelebia", label: "Келебия" }
];

interface IProps {
  bccp: Place;
  onChangeBccp: (target: Place) => void;
}



function PlaceButtons({ bccp, onChangeBccp }: IProps) {
  const handleChangeBCCP = (target: Place) => {
    onChangeBccp(target);
    localStorage.setItem("place", target);
  };


  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={3} sx={{ pt: { xs: 0, md: 2 } }}>
      {Buttons.map(({ place, label }) => (
        <Button
          key={place}
          children={label}
          variant="contained"
          onClick={() => handleChangeBCCP(place)}
          sx={{
            width: { xs: 140, sm: 150, md: 160 },
            color: "#ffffff",
            fontWeight: 800,
            fontFamily: "Arial",
            fontSize: { xs: 14, md: 20 },
            letterSpacing: "3px",
            opacity: place === bccp ? 1 : 0.6,
            backgroundColor: colors.blue[900],
            "&:hover": {
              backgroundColor: colors.blue[800]
            }
          }}
        />
      ))}
    </Stack>
  );
}



export default PlaceButtons;