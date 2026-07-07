import APP from "../../Utils/APP";
import { Place } from "../../Utils/places";
import { ENV } from "../../Utils/config/env";

export type Cam = {
  source: string;
  label?: string;
};


export type Cams = { 1: Cam; } & Record<number, Cam>;


export function getCam(cams: Cams, index: number) {
  return cams[index] ?? cams[1];
}


export function composeCamLabel(name: string, cams: Cams, index: number) {
  const camLabel = getCamLabel(cams, index);
  return camLabel ? `${name} - ${camLabel}` : name;
}


export function getCamSource(cams: Cams, streamIndex: number) {
  return getCam(cams, streamIndex).source;
}


export function getCamLabel(cams: Cams, streamIndex: number) {
  return getCam(cams, streamIndex).label || "";
}


export function getCamCount(cams: Cams) {
  return Object.keys(cams).length;
}


export function getProxiedM3U8(url: string) {
  if (!url) return "";

  return `${ENV.HLS_PROXY_URL}?url=${encodeURIComponent(url)}`;
}


export async function resolveStreamSource(pageUrl: string): Promise<string> {
  const res = await fetch(`${ENV.HLS_RESOLVE_STREAMURL_URL}?url=${encodeURIComponent(pageUrl)}`);
  const data = await res.json();

  if (!data?.success) {
    return ".";
  }

  return data.m3u8;
}


export async function recordPlaceChange(place: Place) {
  const data = {
    visitToken: APP.getVisitToken(),
    place: place.trim()
  };

  fetch(ENV.RECORD_PLACE_CHANGE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
}