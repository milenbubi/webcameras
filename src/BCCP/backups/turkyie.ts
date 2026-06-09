import { Cams, getCamSource } from "../utils/cams";


const kaCams: Cams = {
  1: { source: "1" },
  2: { source: "2" },
  3: { source: "3" },
  4: { source: "4" }
};

const lesovoCams: Cams = {
  1: { source: "6" },
  2: { source: "5" },
  3: { source: "12" }
};

const mtCams: Cams = {
  1: { source: "11" },
  2: { source: "13" }
};

const cpCams: Cams = {
  1: { source: "8" },
  2: { source: "7" }
};

function getCamUrl(cams: Cams, index: number) {
  const source = getCamSource(cams, index);
  return `https://canlimobeseizle.com/wp-content/uploads/custom-images/resim${source}.jpg`;
}