import { Stack } from "@mui/material";
import Author from "./Author";
import BCCPLinks from "./BCCPLinks";
import MasterStreamToggler from "./MasterStreamToggler";

interface IProps {
  isStreaming: boolean;
  toggleMasterStreaming: VoidFunction;
}



function Footer({ isStreaming, toggleMasterStreaming }: IProps) {
  return (
    <Stack sx={{ width: 1, mt: -1 }} gap={2}>

      <Stack direction="row" justifyContent="space-between" sx={{ width: 1, px: 1 }}>
        <Author />
        <MasterStreamToggler isOn={isStreaming} onToggle={toggleMasterStreaming} />
      </Stack>

      <BCCPLinks />

    </Stack>
  );
}



export default Footer;