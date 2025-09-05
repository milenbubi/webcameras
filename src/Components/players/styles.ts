import { CSSProperties } from "react";


const commonCSS: CSSProperties = {
  width: "100%",
  maxHeight: "100%",
  aspectRatio: "16/9"
};


export const playersCSS: CSSProperties = {
  ...commonCSS,
  backgroundColor: "#000000"
};


export const inactivePlayerCSS: CSSProperties = {
  ...commonCSS,
  border: "2px solid #ffffff"
};