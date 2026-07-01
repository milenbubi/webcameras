import { Box } from "@mui/material";
import { Centered } from "@ffilip/mui-react-utils";
import PlayerWrapper from "./PlayerWrapper";
import { IPlayerProps } from "./utils/utils";
import { playerCSS } from "../../Styles/CSSStyles";
import { useHlsStream } from "./utils/hlsStreamHook";



function BlobPlayer({ url, withSound, ...props }: IPlayerProps) {
  const { setVideoRef, isCameraOffline } = useHlsStream(url, props.isActive);


  const videoStyle = {
    ...playerCSS,
    display: isCameraOffline ? "none" : "initial"
  };


  if (!url) {
    return (
      <PlayerWrapper {...props}>
        <Box sx={playerCSS} />
      </PlayerWrapper>
    );
  }


  return (
    <PlayerWrapper {...props}>
      <video
        ref={setVideoRef}
        controls
        controlsList="nofullscreen"
        autoPlay
        preload="auto"
        muted={!withSound}
        playsInline
        style={videoStyle}
      />

      {isCameraOffline && (
        <Centered
          sx={{
            ...playerCSS,
            color: "#ffffff",
            fontSize: { xs: 17, sm: 19 },
            fontWeight: 600,
            padding: 2
          }}
          children="Камерата е временно недостъпна"
        />
      )}

    </PlayerWrapper>
  );
}



export default BlobPlayer;