import { Button, Stack, colors } from "@mui/material";
import { MouseEvent, PropsWithChildren } from "react";
import { safeLocalStorage } from "@ffilip/chan180-utils/helpers";
import { IPlaceButton, isPlaceValid, Place, PLACES_CONFIG } from "../Utils/places";

interface IProps {
  bccp: Place;
  onChangeBccp: (target: Place) => void;
}

const ACTIVE_PLACES = PLACES_CONFIG.filter(p => p.active);

const ExternalButtons: IPlaceButton[] = ACTIVE_PLACES
  .filter(p => p.isExternal)
  .map(p => ({ place: p.name, label: p.label }));

const MainButtons: IPlaceButton[] = ACTIVE_PLACES
  .filter(p => !p.isExternal)
  .map(p => ({ place: p.name, label: p.label }));



function BtnGroupWrapper({ children }: PropsWithChildren) {
  if (!children) {
    return null;
  }

  return (
    <Stack
      sx={{
        flexDirection: "row", flexWrap: "wrap", justifyContent: "center",
        gap: { xs: 2, sm: 3 },
        "& button": {
          transition: "opacity 0.3s",
          pb: "4px",
          width: { xs: 110, md: 160 },
          fontWeight: 800,
          fontFamily: "Arial",
          fontSize: { xs: 12, md: 18 },
          letterSpacing: "3px"
        }
      }}
    >
      {children}
    </Stack>
  );
}


function PlaceButtons({ bccp, onChangeBccp }: IProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const place = e.currentTarget.dataset.place as Place | undefined;

    if (place && isPlaceValid(place)) {
      onChangeBccp(place);
      safeLocalStorage.set("place", place);
    }
  };


  return (
    <Stack sx={{ gap: { xs: 2, sm: 3 }, pt: { xs: 0, md: 2 } }}>
      <BtnGroupWrapper>
        {ExternalButtons.length > 0 && ExternalButtons.map(({ place, label }, index) => {
          const isSelected = place === bccp;

          return (
            <Button
              data-place={place}
              key={index}
              children={label}
              variant="contained"
              onClick={handleClick}
              disableFocusRipple={isSelected}
              disableTouchRipple
              disableElevation
              sx={{
                color: "#000000",
                opacity: isSelected ? 1 : 0.5,
                backgroundColor: colors.yellow[isSelected ? 600 : 500],
                "&:hover": {
                  backgroundColor: colors.yellow[isSelected ? 600 : "A700"],
                  opacity: isSelected ? 1 : 0.8
                }
              }}
            />
          );
        })}
      </BtnGroupWrapper>


      <BtnGroupWrapper>
        {MainButtons.length > 0 && MainButtons.map(({ place, label }, index) => {
          const isSelected = place === bccp;

          return (
            <Button
              key={index}
              data-place={place}
              children={label}
              variant="contained"
              onClick={handleClick}
              disableFocusRipple={isSelected}
              disableTouchRipple
              disableElevation
              sx={{
                opacity: isSelected ? 1 : 0.4,
                background: isSelected ? "#191d21" : "#000000",
                "&:hover": {
                  background: isSelected ? "#191d21" : "rgba(0, 0, 0, 0.83)",
                  opacity: isSelected ? 1 : 0.8
                }
              }}
            />
          );
        })}
      </BtnGroupWrapper>
    </Stack>
  );
}



export default PlaceButtons;