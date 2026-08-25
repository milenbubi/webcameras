import { CardMedia, Link } from "@mui/material";
import { Centered, SX } from "@ffilip/mui-react-utils";

interface IImageLinkProps {
  href: string;
  src: string;
  imgSx?: SX;
}



const ImageLink = ({ href, src, imgSx }: IImageLinkProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
    >
      <CardMedia
        src={src}
        component="img"
        sx={{ height: { xs: 24, sm: 46 }, borderRadius: 1, ...imgSx }}
        onError={e => e.currentTarget.style.display = "none"}
      />
    </Link>
  );
};



function BCCPLinks() {
  return (
    <Centered rowGap={2} columnGap={4} sx={{ width: 1, pt: 2, flexWrap: "wrap" }}>

      {/* Link to към BorderAlarm */}
      <ImageLink
        href="https://borderalarm.com/"
        src="/shots/borderAlarm.png"
      />

      {/* Link to UzivoKamere */}
      <ImageLink
        href="https://uzivokamere.com/granicni-prelazi"
        src="/shots/uzivoKamere.png"
      />

      {/* Link to Ministry of Interior cameras - Serbia */}
      <ImageLink
        href="https://mup.gov.rs/wps/portal/sr/kamer%D0%B5#!"
        src="/shots/mup.png"
      />

      {/* Link to live Turkish border cameras */}
      <ImageLink
        href="https://www.canlimobeseizle.com/turkiye-sinir-kapilari-canli-izle"
        src="/shots/canliMobeseIzle.png"
      />

      {/* Link to Croatian Automobile Club (HAK) - road conditions and traffic cameras  */}
      <ImageLink
        href="https://www.hak.hr/info/stanje-na-cestama?lang=en#traffic-flow-and-road-conditions"
        src="/shots/hak.png"
        imgSx={{ height: { xs: 16, sm: 30 } }}
      />

    </Centered>
  );
}



export default BCCPLinks;