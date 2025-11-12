import { cssVariables } from "@ffilip/mui-react-utils";



const globalStyles = {
  html: {
    WebkitFontSmoothing: "antialiased",  //"auto"
    MozOsxFontSmoothing: "grayscale",
    height: "100%",
    width: "100%"
  },
  body: {
    height: "100%",
    width: "100%",
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