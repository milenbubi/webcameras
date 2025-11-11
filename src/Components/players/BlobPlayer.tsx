import { PropsWithChildren, useRef } from "react";
import { Centered } from "@ffilip/mui-react-utils/components";
import PlayerWrapper from "./PlayerWrapper";
import { playerCSS } from "../../Styles/CSSStyles";
import { useHlsStream } from "./utils/hlsStreamHook";

interface IProps {
  id: string;
  url: string;
  isActive: boolean;
}



function BlobPlayer({ id, url, isActive, children }: PropsWithChildren<IProps>) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isCameraOffline } = useHlsStream(videoRef, url, isActive);


  const videoStyle = {
    ...playerCSS,
    display: isCameraOffline ? "none" : "initial"
  };


  return (
    <PlayerWrapper id={id} isActive={isActive} controls={children}>
      <video
        ref={videoRef}
        controls
        controlsList="nofullscreen"
        autoPlay
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
        >
          {"Камерата е временно недостъпна"}
        </Centered>
      )}
    </PlayerWrapper>
  );
}



export default BlobPlayer;