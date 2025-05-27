import { Stack } from "@mui/material";
import Author from "../Components/Author";
import BCCPLinks from "../Components/BCCPLinks";
import StreamModeSwitch from "../Components/StreamModeSwitch";

interface IProps {
  isStreaming: boolean;
  changeMasterStreaming: (value: boolean) => void;
}



function Bottom({ isStreaming, changeMasterStreaming }: IProps) {
  const handleChangeOnOff = (isOn: boolean) => {
    changeMasterStreaming(isOn);
    localStorage.setItem("streaming", isOn ? "on" : "off");
  };


  return (
    <Stack sx={{ width: 1, mt: -1 }} gap={2}>

      <Stack direction="row" justifyContent="space-between" sx={{ width: 1, px: 1 }}>
        <Author />
        <StreamModeSwitch isStreaming={isStreaming} onChange={handleChangeOnOff} />
      </Stack>

      <BCCPLinks />

    </Stack>
  );
}



export default Bottom;