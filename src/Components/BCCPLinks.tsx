import { CardMedia, Button } from "@mui/material";
import { Centered } from "@ffilip/mui-react-utils/components";



function BCCPLinks() {
  return (
    <Centered rowGap={2} columnGap={0} sx={{ width: 1, flexWrap: "wrap" }}>


      {/* Link to към BorderAlarm */}
      <Button
        sx={{ p: 0, mx: 2 }}
        onClick={() => {
          const newWindow = window.open("https://borderalarm.com/", "_blank", "noopener,noreferrer");

          if (newWindow) {
            newWindow.opener = null;
          }
        }}
      >
        <CardMedia
          component="img"
          src="/shots/borderAlarm.png"
          sx={{ width: { xs: 150, sm: 200 }, borderRadius: 1 }}
          onError={e => { e.currentTarget.style.display = "none"; }}
        />
      </Button>


      {/* Link to UzivoKamere */}
      <Button
        sx={{ p: 0, mx: 2 }}
        onClick={() => {
          const newWindow = window.open("https://uzivokamere.com/granicni-prelazi/", "_blank", "noopener,noreferrer");

          if (newWindow) {
            newWindow.opener = null;
          }
        }}
      >
        <CardMedia
          component="img"
          src="/shots/uzivoKamere.png"
          sx={{ width: { xs: 150, sm: 200 }, borderRadius: 1 }}
          onError={e => { e.currentTarget.style.display = "none"; }}
        />
      </Button>



      {/* Link to Ministry of Interior cameras - Serbia */}
      <Button
        sx={{ p: 0 }}
        onClick={() => {
          const newWindow = window.open("https://mup.gov.rs/wps/portal/sr/kamer%D0%B5#!", "_blank", "noopener,noreferrer");

          if (newWindow) {
            newWindow.opener = null;
          }
        }}
      >
        <CardMedia
          component="img"
          src="/shots/mup.png"
          sx={{ width: { xs: 30, sm: 50 }, borderRadius: 1 }}
          onError={e => { e.currentTarget.style.display = "none"; }}
        />
      </Button>


    </Centered>
  );
}



export default BCCPLinks;