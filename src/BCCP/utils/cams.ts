import { ENV } from "../../Utils/env";

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


export function getProxiedUrl(url: string) {
  return ENV.HLS_PROXY_URL + (url || "");
}