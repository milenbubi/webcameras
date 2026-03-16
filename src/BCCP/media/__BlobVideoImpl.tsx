import { useBooleanLS } from "../../Utils/localStorage";
import BlobPlayer from "../../Components/players/BlobPlayer";

interface IProps {
  id: string;
  title: string;
  url: string;
  withSound?: boolean;
}



function __BlobVideoImpl({ id, title, url, withSound }: IProps) {
  const { isBooleanLSOn, toggleBooleanLS } = useBooleanLS(id);


  return (
    <BlobPlayer
      id={id} isActive={isBooleanLSOn}
      url={url}
      onToggle={toggleBooleanLS}
      title={title}
      withSound={withSound}
    />
  );
}



export { __BlobVideoImpl };