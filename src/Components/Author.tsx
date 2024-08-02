import { Button, Typography } from "@mui/material";


function Author() {
  return (
    <Button
      sx={{ p: 0 }}
      onClick={() => {
        const newWindow = window.open("https://www.facebook.com/milenbubi", "_blank", "noopener,noreferrer");

        if (newWindow) {
          newWindow.opener = null;
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