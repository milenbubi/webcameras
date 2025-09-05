import { playersCSS } from "./styles";
import PlayerWrapper from "./PlayerWrapper";
import { useDocumentVisibility } from "../../Utils/documentVisibility";

interface IProps {
  url: string;
  isActive: boolean;
}



function IframePlayer({ url, isActive }: IProps) {
  const isVisible = useDocumentVisibility();


  return (
    <PlayerWrapper isActive={isActive}>
      <iframe
        src={isVisible ? url : ""}
        style={{ ...playersCSS, border: "none" }}
        allow="autoplay; encrypted-media"
      />
    </PlayerWrapper>
  );
}



export default IframePlayer;