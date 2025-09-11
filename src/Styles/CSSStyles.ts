import { CSSProperties } from "react";


const commonCSS: CSSProperties = {
  width: "100%",
  maxHeight: "100%"
};

const commonAspectRatioCSS: CSSProperties = {
  aspectRatio: "16/9"
};

export const playerCSS: CSSProperties = {
  ...commonCSS,
  ...commonAspectRatioCSS,
  backgroundColor: "#000000"
};

export const inactivePlayerCSS: CSSProperties = {
  ...commonCSS,
  ...commonAspectRatioCSS,
  border: "2px solid #ffffff"
};

export const rowWrapperCSS: CSSProperties = {
  ...commonCSS,
  gap: 6,
  flexWrap: "wrap"
};

export const playerWrapperCSS: CSSProperties = {
  ...commonCSS,
  position: "relative",
  maxWidth: 700
};