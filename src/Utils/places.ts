import { ComponentType } from "react";
import { safeLocalStorage } from "@ffilip/chan180-utils";
import News from "../BCCP/News";
import Djala from "../BCCP/Djala";
import Horgos from "../BCCP/Horgos";
import Turkiye from "../BCCP/Turkiye";
import Kelebia from "../BCCP/Kelebia";
import Bulgaria from "../BCCP/Bulgaria";
import SouthEast from "../BCCP/SouthEast";
import { LS_PLACE_KEY } from "./localStorage";
import BalkanMountains from "../BCCP/BalkanMountains";


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
  { name: "News", active: true, component: News, label: "News", isExternal: true },
  { name: "BalkanMountains", active: true, component: BalkanMountains, label: "Стара Планина", isExternal: true },
  { name: "SouthEast", active: true, component: SouthEast, label: "Югоизток", isExternal: true },
  { name: DEFAULT_PLACE_NAME, active: true, component: Bulgaria, label: "България", isExternal: false } satisfies IDefaultPlaceConfig,
  { name: "Horgos", active: true, component: Horgos, label: "Хоргош", isExternal: false },
  { name: "Djala", active: true, component: Djala, label: "Ђала", isExternal: false },
  { name: "Kelebia", active: true, component: Kelebia, label: "Келебия", isExternal: false },
  { name: "Turkiye", active: import.meta.env.DEV, component: Turkiye, label: "Турция", isExternal: false }
] as const satisfies readonly (IDefaultPlaceConfig | IRegularPlaceConfig)[];

export type Place = typeof PLACES_CONFIG[number]["name"];


export interface IPlaceButton {
  place: Place;
  label: string
}


export function isPlaceValid(value: string | undefined): value is Place {
  return PLACES_CONFIG.some(p => p.name === value);
}


export function getPlaceConfig(value: unknown) {
  if (typeof value !== "string") {
    return undefined;
  }

  const normalized = value.trim().toLowerCase();

  return PLACES_CONFIG.find(p => p.name.toLowerCase() === normalized);
}


export function resolvePlace(placeParam: string | undefined): Place {
  const placeFromUrl = getPlaceConfig(placeParam);
  const placeFromStorage = getPlaceConfig(safeLocalStorage.get(LS_PLACE_KEY));

  const activePlace = [placeFromUrl, placeFromStorage].find(p => p?.active);
  const resolved = activePlace?.name ?? DEFAULT_PLACE_NAME;

  safeLocalStorage.set(LS_PLACE_KEY, resolved);

  return resolved;
}