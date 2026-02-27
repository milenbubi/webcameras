import { useMemo } from "react";
import { Centered } from "@ffilip/mui-react-utils";
import { openNewTab } from "@ffilip/chan180-utils";
import { CardMedia, Button, CardMediaProps, ButtonProps } from "@mui/material";



function BCCPLinks() {
  const cardMediaProps = useMemo<CardMediaProps>(() => {
    return {
      component: "img",
      sx: { height: { xs: 24, sm: 46 }, borderRadius: 1 },
      onError: e => { e.currentTarget.style.display = "none"; },
    };
  }, []);


  const buttonProps = useMemo<ButtonProps>(() => {
    return {
      sx: { p: 0, minWidth: 0 },
      onClick: e => { openNewTab(e.currentTarget.dataset.link) }
    };
  }, []);


  return (
    <Centered rowGap={2} columnGap={4} sx={{ width: 1, pt: 2, flexWrap: "wrap" }}>

      {/* Link to към BorderAlarm */}
      <Button data-link="https://borderalarm.com/" {...buttonProps}>
        <CardMedia src="/shots/borderAlarm.png" {...cardMediaProps} />
      </Button>

      {/* Link to UzivoKamere */}
      <Button data-link="https://uzivokamere.com/granicni-prelazi/" {...buttonProps}>
        <CardMedia src="/shots/uzivoKamere.png" {...cardMediaProps} />
      </Button>

      {/* Link to Ministry of Interior cameras - Serbia */}
      <Button data-link="https://mup.gov.rs/wps/portal/sr/kamer%D0%B5#!" {...buttonProps}>
        <CardMedia src="/shots/mup.png" {...cardMediaProps} />
      </Button>


      {/* Link to live Turkish border cameras */}
      <Button data-link="https://www.canlimobeseizle.com/turkiye-sinir-kapilari-canli-izle" {...buttonProps}>
        <CardMedia src="/shots/canliMobeseIzle.png" {...cardMediaProps} />
      </Button>

    </Centered>
  );
}



export default BCCPLinks;