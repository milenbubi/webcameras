import { safeLocalStorage } from "@ffilip/chan180-utils/helpers";


export const NEWS_ACTIVE = true;

export const PLACES = ["News", "Bulgaria", "Horgos", "Djala", "Kelebia", "Turkiye"] as const;

export type Place = typeof PLACES[number];


export interface IPlaceButton {
  place: Place;
  label: string
}



export function isPlaceValid(value: unknown): value is Place {
  return PLACES.includes(value as Place);
}



export function getPlaceFromUrlOrLs(): Place {
  const params = new URLSearchParams(window.location.search);
  let rawPlace = params.get("place");

  if (rawPlace) {
    safeLocalStorage.set("place", rawPlace);
  }
  else {
    rawPlace = safeLocalStorage.get("place") || "";
  }

  const place = rawPlace.trim().toLowerCase();

  const placeMap: Record<string, Place | null> = {
    news: NEWS_ACTIVE ? "News" : null,
    bulgaria: "Bulgaria",
    horgos: "Horgos",
    djala: "Djala",
    kelebia: "Kelebia",
    turkiye: "Turkiye"
  };

  const defaultPlace: Place = "Bulgaria";
  return placeMap[place] || defaultPlace;
}


export function getPlaceFromUrlOrLS(): Place {
  const params = new URLSearchParams(window.location.search);
  let rawPlace = params.get("place");

  if (rawPlace) {
    safeLocalStorage.set("place", rawPlace);
  }
  else {
    rawPlace = safeLocalStorage.get("place") || "";
  }

  const normalized = rawPlace.trim().toLowerCase();
  const defaultPlace: Place = "Bulgaria";

  const candidate = PLACES.find(p => p.toLowerCase() === normalized);
  return candidate ?? defaultPlace;
}