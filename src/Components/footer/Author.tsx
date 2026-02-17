import { useCallback } from "react";
import { Button, Typography } from "@mui/material";
import { openFacebookProfile } from "@ffilip/chan180-utils/env";



function Author() {
  const openAuthorProfile = useCallback(() => {
    const fbUserId = "100000461091188";
    openFacebookProfile(fbUserId);
  }, []);


  return (
    <Button onClick={openAuthorProfile}>

      <Typography
        sx={{
          color: "#cbe0f4",
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