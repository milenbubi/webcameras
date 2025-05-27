import { useCallback } from "react";
import { Button, Typography } from "@mui/material";
import { isMobile } from "../Utils/mobile";



function Author() {
  const openAuthorProfile = useCallback(() => {
    const fbUserId = "100000461091188";

    const openNewTab = () => {
      const newWindow = window.open(`https://www.facebook.com/${fbUserId}`, "_blank", "noopener,noreferrer");

      if (newWindow) {
        newWindow.opener = null;
      }
    };

    if (!isMobile()) {
      openNewTab();
      return;
    }

    const now = Date.now();

    window.location.href = `fb://profile/${fbUserId}`;

    setTimeout(() => {
      if (Date.now() - now < 1600) {
        openNewTab();
      }
    }, 1500);
  }, []);


  return (
    <Button onClick={openAuthorProfile}>

      <Typography
        sx={{
          color: "lightblue",
          fontWeight: 800,
          fontSize: 15,
          fontStyle: "italic"
        }}
      >
        {"АВТОР"}
      </Typography>

    </Button>
  );
}



export default Author;