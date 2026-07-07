import { Stack } from "@mui/material";
import { safeLocalStorage } from "@ffilip/chan180-utils";
import PlaceSingleButton from "./PlaceSingleButton";
import { LS_PLACE_KEY } from "../../Utils/localStorage";
import PlaceBtnGroupWrapper from "./PlaceBtnGroupWrapper";
import { recordPlaceChange } from "../../BCCP/utils/cams";
import { IPlaceButton, isPlaceValid, Place, PLACES_CONFIG } from "../../Utils/places";

interface IProps {
  place: Place;
  onChangePlace: (newPlace: Place) => void;
}

const ACTIVE_PLACES = PLACES_CONFIG.filter(p => p.active);

const ExternalButtons: IPlaceButton[] = ACTIVE_PLACES
  .filter(p => p.isExternal)
  .map(p => ({ place: p.name, label: p.label }));

const MainButtons: IPlaceButton[] = ACTIVE_PLACES
  .filter(p => !p.isExternal)
  .map(p => ({ place: p.name, label: p.label }));



function PlaceButtons({ place, onChangePlace }: IProps) {
  const handleClick = (newPlace: Place) => {
    if (isPlaceValid(newPlace) && newPlace !== place) {
      onChangePlace(newPlace);
      recordPlaceChange(newPlace);
      safeLocalStorage.set(LS_PLACE_KEY, newPlace);
    }
  };


  return (
    <Stack sx={{ gap: { xs: 2, sm: 3 }, pt: { xs: 0, md: 2 } }}>
      <PlaceBtnGroupWrapper>
        {ExternalButtons.length > 0 && ExternalButtons.map((button, index) => (
          <PlaceSingleButton
            key={button.place}
            button={button}
            onClick={handleClick}
            isSelected={button.place === place}
            isExternal
          />
        ))}
      </PlaceBtnGroupWrapper>

      <PlaceBtnGroupWrapper>
        {MainButtons.length > 0 && MainButtons.map((button, index) => (
          <PlaceSingleButton
            key={button.place}
            button={button}
            onClick={handleClick}
            isSelected={button.place === place}
            isExternal={false}
          />
        ))}
      </PlaceBtnGroupWrapper>
    </Stack>
  );
}



export default PlaceButtons;