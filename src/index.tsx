import { Fragment, useEffect } from "react";
import * as ReactDOM from "react-dom/client";
import { CssBaseline, GlobalStyles } from "@mui/material";
import AppEntry from "./AppEntry";
import globalStyles from "./Styles/StylesGlobal";



function WebCamerasApp() {
  useEffect(() => {  // Remove any search params 
    if (window.location.search) {
      window.history.pushState({}, document.title, window.location.origin);
    }
  }, []);


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