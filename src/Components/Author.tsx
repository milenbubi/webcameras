import { useCallback } from "react";
import { Button, Typography } from "@mui/material";



function Author() {
  const openAuthorProfile = useCallback(() => {
    const fbUserId = "100000461091188";
    const isMobile = window.navigator.maxTouchPoints > 0;

    const openNewTab = () => {
      const newWindow = window.open(`https://www.facebook.com/${fbUserId}`, "_blank", "noopener,noreferrer");

      if (newWindow) {
        newWindow.opener = null;
      }
    };

    if (!isMobile) {
      openNewTab();
      return;
    }

    const now = Date.now();

    setTimeout(function () {  // SOF 13044805
      if (Date.now() - now < 1502) {
        openNewTab();
      }
    }, 1500);


    window.location.href = `fb://profile?id=${fbUserId}`;
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