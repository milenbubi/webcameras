import { MouseEvent } from "react";
import { CardMedia, Button } from "@mui/material";
import { openNewTab } from "@ffilip/chan180-utils/env";
import { Centered } from "@ffilip/mui-react-utils/components";



function BCCPLinks() {
  const openLink = (e: MouseEvent<HTMLButtonElement>) => {
    const url = e.currentTarget.dataset.link;
    openNewTab(url);
  };


  return (
    <Centered rowGap={2} columnGap={0} sx={{ width: 1, pt: 2, flexWrap: "wrap" }}>


      {/* Link to към BorderAlarm */}
      <Button
        sx={{ p: 0, mx: 2 }}
        data-link="https://borderalarm.com/"
        onClick={openLink}
      >
        <CardMedia
          component="img"
          src="/shots/borderAlarm.png"
          sx={{ width: { xs: 120, sm: 200 }, borderRadius: 1 }}
          onError={e => { e.currentTarget.style.display = "none"; }}
        />
      </Button>


      {/* Link to UzivoKamere */}
      <Button
        sx={{ p: 0, mx: 2 }}
        data-link="https://uzivokamere.com/granicni-prelazi/"
        onClick={openLink}
      >
        <CardMedia
          component="img"
          src="/shots/uzivoKamere.png"
          sx={{ width: { xs: 120, sm: 200 }, borderRadius: 1 }}
          onError={e => { e.currentTarget.style.display = "none"; }}
        />
      </Button>


      {/* Link to Ministry of Interior cameras - Serbia */}
      <Button
        sx={{ p: 0 }}
        data-link="https://mup.gov.rs/wps/portal/sr/kamer%D0%B5#!"
        onClick={openLink}
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