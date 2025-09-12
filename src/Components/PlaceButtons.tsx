import { Button, Stack, colors } from "@mui/material";
import Centered from "../Utils/Centered";
import { IPlaceButton, NEWS_ACTIVE, Place } from "../Utils/places";

const NewsButton: IPlaceButton = { place: "News", label: "News" };

const Buttons: IPlaceButton[] = [
  { place: "Bulgaria", label: "България" },
  { place: "Horgos", label: "Хоргош" },
  { place: "Djala", label: "Ђала" },
  { place: "Kelebia", label: "Келебия" },
  { place: "Turkiye", label: "Турция" }
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
    <Stack
      sx={{
        flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 3,
        pt: { xs: 0, md: 2 },
        "& button": {
          pb: "4px",
          width: { xs: 140, sm: 150, md: 160 },
          color: "#ffffff",
          fontWeight: 800,
          fontFamily: "Arial",
          fontSize: { xs: 14, md: 20 },
          letterSpacing: "3px"
        }
      }}
    >

      {NEWS_ACTIVE && (
        <Centered sx={{ width: 1 }}>
          <Button
            children={NewsButton.label}
            variant="contained"
            onClick={() => handleChangeBCCP(NewsButton.place)}
            sx={{
              opacity: NewsButton.place === bccp ? 1 : 0.6,
              backgroundColor: colors.green[900],
              "&:hover": {
                backgroundColor: colors.green[800]
              }
            }}
          />
        </Centered>
      )}

      {Buttons.map(({ place, label }) => (
        <Button
          key={place}
          children={label}
          variant="contained"
          onClick={() => handleChangeBCCP(place)}
          sx={{
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