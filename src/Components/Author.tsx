import { Button, Typography } from "@mui/material";



function Author() {
  return (
    <Button
      onClick={() => {
        const fbUserId = "100000461091188";
        const isMobile = window.navigator.maxTouchPoints > 0;

        if (isMobile) {
          window.location.href = `fb://profile?id=${fbUserId}`;
        }
        else {
          const newWindow = window.open(`https://www.facebook.com/${fbUserId}`, "_blank", "noopener,noreferrer");

          if (newWindow) {
            newWindow.opener = null;
          }
        }
      }}
    >

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