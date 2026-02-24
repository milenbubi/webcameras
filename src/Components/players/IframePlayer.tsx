import { useDocumentVisibility } from "@ffilip/mui-react-utils/document";
import PlayerWrapper from "./PlayerWrapper";
import { IPlayerProps } from "./utils/utils";
import { playerCSS } from "../../Styles/CSSStyles";



function IframePlayer({ url, ...props }: IPlayerProps) {
  const isVisible = useDocumentVisibility();


  return (
    <PlayerWrapper {...props}>
      <iframe
        src={isVisible ? url : ""}
        style={{ ...playerCSS, border: "none" }}
        allow="autoplay; encrypted-media"
      />
    </PlayerWrapper>
  );
}



export default IframePlayer;