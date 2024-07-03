import { Fragment } from "react";
import * as ReactDOM from "react-dom/client";
import { CssBaseline, GlobalStyles } from "@mui/material";
import "./Styles/Main.scss";
import AppEntry from "./AppEntry";
import globalStyles from "./Styles/StylesGlobal";



function CasinoPortalApp() {
  return (
    <Fragment>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <AppEntry />
    </Fragment>
  );
}



const container = document.getElementById("Root");
const root = ReactDOM.createRoot(container!);
root.render(<CasinoPortalApp />);