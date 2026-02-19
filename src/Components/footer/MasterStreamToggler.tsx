import Toggler, { ITogglerProps } from "../Toggler";



function MasterStreamToggler({ isOn, onToggle }: ITogglerProps) {
  return (
    <Toggler
      isOn={isOn}
      onToggle={onToggle}
      pulseEnabled={!isOn}
      width={80}
    />
  );
}



export default MasterStreamToggler;