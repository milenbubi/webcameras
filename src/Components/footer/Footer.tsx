import { Stack } from "@mui/material";
import { safeLocalStorage } from "@ffilip/chan180-utils/helpers";
import Author from "./Author";
import BCCPLinks from "./BCCPLinks";
import StreamModeSwitch from "../StreamModeSwitch";
import { LS_APP_STREAMING_KEY } from "../../Utils/localStorage";

interface IProps {
  isStreaming: boolean;
  changeMasterStreaming: (value: boolean) => void;
}



function Footer({ isStreaming, changeMasterStreaming }: IProps) {
  const handleChangeOnOff = (isOn: boolean) => {
    changeMasterStreaming(isOn);
    safeLocalStorage.set(LS_APP_STREAMING_KEY, isOn ? "on" : "off");
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



export default Footer;