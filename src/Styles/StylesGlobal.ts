import { cssVariables } from "@ffilip/mui-react-utils";



const globalStyles = {
  html: {
    WebkitFontSmoothing: "antialiased",  //"auto"
    MozOsxFontSmoothing: "grayscale",
    width: "100%",
    height: "100dvh",
    overflowX: "hidden"
  },
  body: {
    height: "100dvh",
    width: "100%",
    margin: 0,
    padding: 0,
    overflowX: "hidden",
    background: "#376d80"
  },
  "#Root": {
    height: "100%",
    width: "100%"
  },
  ":root": {
    [cssVariables.scrollbarColor]: "#b5c5e4ff",
    [cssVariables.scrollbarColorOnHover]: "#8ba4c5"
  }
};



export default globalStyles;