import { Button } from "@mui/material";
import { openFacebookProfile } from "@ffilip/chan180-utils";



function Contact() {
  const handleContactClick = () => {
    const fbUserId = "100000461091188";
    openFacebookProfile(fbUserId);
  };


  return (
    <Button
      onClick={handleContactClick}
      sx={{
        color: "#cbe0a4",
        fontWeight: 800,
        fontSize: { xs: 15, sm: 17 },
        fontStyle: "italic",
        textTransform: "none"
      }}
    >
      {"Връзка с мен"}
    </Button>
  );
}



export default Contact;