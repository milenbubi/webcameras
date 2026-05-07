import { useBooleanLS } from "../../Utils/localStorage";
import DashPlayer from "../../Components/players/DashPlayer";

interface IProps {
  id: string;
  title: string;
  url: string;
  withSound?: boolean;
}



function __DashVideoImpl({ id, title, url, withSound }: IProps) {
  const { isBooleanLSOn, toggleBooleanLS } = useBooleanLS(id);


  return (
    <DashPlayer
      id={id}
      isActive={isBooleanLSOn}
      url={url}
      onToggle={toggleBooleanLS}
      title={title}
      withSound={withSound}
    />
  );
}



export { __DashVideoImpl };