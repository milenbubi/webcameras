import { ComponentType } from "react";
import { safeLocalStorage } from "@ffilip/chan180-utils/helpers";
import News from "../BCCP/News";
import Djala from "../BCCP/Djala";
import Horgos from "../BCCP/Horgos";
import Turkiye from "../BCCP/Turkiye";
import Kelebia from "../BCCP/Kelebia";
import Bulgaria from "../BCCP/Bulgaria";


interface IPlaceConfig {
  name: string;
  active: boolean;
  component: ComponentType;
  label: string;
  isExternal: boolean;
}

export const PLACES_CONFIG = [
  { name: "News", active: false, component: News, label: "News", isExternal: true },
  { name: "Bulgaria", active: true, component: Bulgaria, label: "България", isExternal: false },
  { name: "Horgos", active: true, component: Horgos, label: "Хоргош", isExternal: false },
  { name: "Djala", active: true, component: Djala, label: "Ђала", isExternal: false },
  { name: "Kelebia", active: true, component: Kelebia, label: "Келебия", isExternal: false },
  { name: "Turkiye", active: true, component: Turkiye, label: "Турция", isExternal: false }
] as const satisfies readonly IPlaceConfig[];

export type Place = typeof PLACES_CONFIG[number]["name"];


export interface IPlaceButton {
  place: Place;
  label: string
}


export function isPlaceValid(value: unknown): value is Place {
  return PLACES_CONFIG.some(p => p.name === value);
}


export function isPlaceActive(place: Place): boolean {
  return PLACES_CONFIG.find(p => p.name === place)?.active ?? false;
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

  const candidate = PLACES_CONFIG.map(p => p.name).find(p => p.toLowerCase() === normalized);
  const place = candidate ?? defaultPlace;


  if (isPlaceActive(place)) {
    return place;
  }

  const firstActivePlace = PLACES_CONFIG.find(p => p.active)?.name;

  if (firstActivePlace) {
    return firstActivePlace;
  }
  else {
    throw "There should be at least one active place!";
  }
}