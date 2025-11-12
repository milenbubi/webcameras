import { Fragment } from "react";
import "@ffilip/mui-react-utils/styles.css"
import * as ReactDOM from "react-dom/client";
import { CssBaseline, GlobalStyles } from "@mui/material";

import AppEntry from "./AppEntry";
import globalStyles from "./Styles/StylesGlobal";



function WebCamerasApp() {
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
root.render(<WebCamerasApp />);