export type Place = "News" | "Bulgaria" | "Horgos" | "Djala" | "Kelebia" | "Turkiye";
export const NEWS_ACTIVE = false;


export interface IPlaceButton {
  place: Place;
  label: string
}


export function getPlaceFromUrlOrLS(): Place {
  const params = new URLSearchParams(window.location.search);
  let rawPlace = params.get("place");

  if (rawPlace) {
    localStorage.setItem("place", rawPlace);
  }
  else {
    rawPlace = localStorage.getItem("place") || "";
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