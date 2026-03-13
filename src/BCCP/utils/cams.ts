export type Cam = {
  source: string;
  label?: string;
};


export type Cams = { 1: Cam; } & Record<number, Cam>;


export function getCam(cams: Cams, index: number) {
  return cams[index] ?? cams[1];
}


export function composeCamLabel(name: string, cams: Cams, index: number) {
  const camLabel = getCam(cams, index).label;
  return camLabel ? `${name} - ${camLabel}` : name;
}


export function getCamLabel(cams: Cams, streamIndex: number) {
  return getCam(cams, streamIndex).label || "";
}


export function getCamCount(cams: Cams) {
  return Object.keys(cams).length;
}