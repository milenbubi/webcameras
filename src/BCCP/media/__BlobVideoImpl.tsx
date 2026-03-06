import { useBooleanLS } from "../../Utils/localStorage";
import BlobPlayer from "../../Components/players/BlobPlayer";

interface IProps {
  id: string;
  title: string;
  url: string;
}



function __BlobVideoImpl({ id, title, url }: IProps) {
  const { isBooleanLSOn, toggleBooleanLS } = useBooleanLS(id);


  return (
    <BlobPlayer
      id={id} isActive={isBooleanLSOn}
      url={url}
      onToggle={toggleBooleanLS}
      title={title}
    />
  );
}



export { __BlobVideoImpl };