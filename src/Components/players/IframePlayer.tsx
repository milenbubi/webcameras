import { PropsWithChildren } from "react";
import { playerCSS } from "./styles";
import PlayerWrapper from "./PlayerWrapper";
import { useDocumentVisibility } from "../../Utils/documentVisibility";

interface IProps {
  id: string;
  url: string;
  isActive: boolean;
}



function IframePlayer({ id, url, isActive, children }: PropsWithChildren<IProps>) {
  const isVisible = useDocumentVisibility();


  return (
    <PlayerWrapper id={id} isActive={isActive} controls={children}>
      <iframe
        src={isVisible ? url : ""}
        style={{ ...playerCSS, border: "none" }}
        allow="autoplay; encrypted-media"
      />
    </PlayerWrapper>
  );
}



export default IframePlayer;