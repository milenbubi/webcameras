import { useDocumentVisibility } from "../Utils/documentVisibility";

interface IProps {
  url: string;
  isActive: boolean;
}



function CameraIframePlayer({ url, isActive }: IProps) {
  const isVisible = useDocumentVisibility();


  return (
    <iframe
      src={(isActive && isVisible) ? url : ""}
      style={{ border: isActive ? "none" : "2px solid white", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
      allow="autoplay; encrypted-media"
    />
  );
}



export default CameraIframePlayer;