import { Stack, CardMedia, Button } from "@mui/material";



function BCCPLinks() {
  return (
    <Stack direction="row" gap={4} sx={{ pt: { xs: 0, md: 2 } }}>


      {/* Линк към BorderAlarm */}
      <Button
        sx={{ p: 0 }}
        onClick={() => {
          const newWindow = window.open("https://borderalarm.com/", "_blank", "noopener,noreferrer");

          if (newWindow) {
            newWindow.opener = null;
          }
        }}
      >
        <CardMedia
          component="img"
          src="/borderAlarm.png"
          sx={{ width: { xs: 150, sm: 200 }, borderRadius: 1 }}
          onError={e => { e.currentTarget.style.display = "none"; }}
        />
      </Button>


      {/* Линк към UzivoKamere */}
      <Button
        sx={{ p: 0 }}
        onClick={() => {
          const newWindow = window.open("https://uzivokamere.com/granicni-prelazi/", "_blank", "noopener,noreferrer");

          if (newWindow) {
            newWindow.opener = null;
          }
        }}
      >
        <CardMedia
          component="img"
          src="/uzivoKamere.png"
          sx={{ width: { xs: 150, sm: 200 }, borderRadius: 1 }}
          onError={e => { e.currentTarget.style.display = "none"; }}
        />
      </Button>


    </Stack>
  );
}



export default BCCPLinks;