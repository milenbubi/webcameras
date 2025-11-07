import { Button, Stack, colors } from "@mui/material";
import { safeLocalStorage } from "@ffilip/chan180-utils/helpers";
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
    safeLocalStorage.set("place", target);
  };


  return (
    <Stack
      sx={{
        flexDirection: "row", flexWrap: "wrap", justifyContent: "center",
        gap: { xs: 2, sm: 3 },
        pt: { xs: 0, md: 2 },
        "& button": {
          pb: "4px",
          width: { xs: 110, md: 160 },
          color: "#ffffff",
          fontWeight: 800,
          fontFamily: "Arial",
          fontSize: { xs: 12, md: 18 },
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
            boxShadow: "none",
            opacity: place === bccp ? 1 : 0.5,
            transition: "background 0.2s",
            background: "#343c44",
            "&:hover": {
              boxShadow: "none",
              background: place === bccp ? "#343c44" : "#000000"
            }
          }}
        />
      ))}

    </Stack>
  );
}



export default PlaceButtons;