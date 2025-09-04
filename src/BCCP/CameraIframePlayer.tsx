import { useDocumentVisibility } from "../Utils/documentVisibility";

interface IProps {
  url: string;
  isActive: boolean;
}



function CameraIframePlayer({ url, isActive }: IProps) {
  const isVisible = useDocumentVisibility();
  const mayShow = isActive && isVisible;

  return (
    <iframe
      src={mayShow ? url : ""}
      style={{ border: isActive ? "none" : "2px solid white", width: "100%", maxHeight: "100%", aspectRatio: "16/9", backgroundColor: mayShow ? "#000000" : "transparent" }}
      allow="autoplay; encrypted-media"
    />
  );
}



export default CameraIframePlayer;