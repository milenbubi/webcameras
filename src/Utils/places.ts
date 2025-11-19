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

const DEFAULT_PLACE_NAME = "Bulgaria";

interface IDefaultPlaceConfig extends IPlaceConfig {
  name: typeof DEFAULT_PLACE_NAME;
  active: true; // <--- locked; cannot be modified
}

interface IRegularPlaceConfig extends IPlaceConfig {
  name: Exclude<IPlaceConfig["name"], typeof DEFAULT_PLACE_NAME>;
  active: boolean;
}


export const PLACES_CONFIG = [
  { name: "News", active: !true, component: News, label: "News", isExternal: true },
  { name: DEFAULT_PLACE_NAME, active: true, component: Bulgaria, label: "България", isExternal: false } satisfies IDefaultPlaceConfig,
  { name: "Horgos", active: true, component: Horgos, label: "Хоргош", isExternal: false },
  { name: "Djala", active: true, component: Djala, label: "Ђала", isExternal: false },
  { name: "Kelebia", active: true, component: Kelebia, label: "Келебия", isExternal: false },
  { name: "Turkiye", active: true, component: Turkiye, label: "Турция", isExternal: false }
] as const satisfies readonly (IDefaultPlaceConfig | IRegularPlaceConfig)[];

export type Place = typeof PLACES_CONFIG[number]["name"];


export interface IPlaceButton {
  place: Place;
  label: string
}


export function isPlaceValid(value: unknown): value is Place {
  return PLACES_CONFIG.some(p => p.name === value);
}


export function resolvePlace(): Place {
  const params = new URLSearchParams(window.location.search);
  let rawPlace = params.get("place");

  if (rawPlace && isPlaceValid(rawPlace)) {
    safeLocalStorage.set("place", rawPlace);
  }
  else {
    rawPlace = safeLocalStorage.get("place") || "";
  }

  const normalized = rawPlace.trim().toLowerCase();

  const placeObj = PLACES_CONFIG.find(p => p.name.toLowerCase() === normalized);

  return placeObj?.active === true
    ? placeObj.name
    : DEFAULT_PLACE_NAME
}