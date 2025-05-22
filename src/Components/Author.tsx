import { useCallback } from "react";
import { Button, Typography } from "@mui/material";



function Author() {
  const openAuthorProfile = useCallback(() => {
    const fbUserId = "100000461091188";
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB10|IEMobile|Opera\s?Mini|Mobile\s?Safari|Windows\s?Phone|MeeGo|SymbianOS|PlayBook/i.test(navigator.userAgent);

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