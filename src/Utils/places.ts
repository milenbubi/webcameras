export type Place = "News" | "Bulgaria" | "Horgos" | "Djala" | "Kelebia";
export const NEWS_ACTIVE = true;


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
    kelebia: "Kelebia"
  };

  const defaultPlace: Place = "Bulgaria";
  return placeMap[place] || defaultPlace;
}