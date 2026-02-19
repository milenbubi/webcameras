import { Stack } from "@mui/material";
import Author from "./Author";
import BCCPLinks from "./BCCPLinks";
import StreamModeToggler from "../StreamModeToggler";

interface IProps {
  isStreaming: boolean;
  toggleMasterStreaming: VoidFunction;
}



function Footer({ isStreaming, toggleMasterStreaming }: IProps) {
  return (
    <Stack sx={{ width: 1, mt: -1 }} gap={2}>

      <Stack direction="row" justifyContent="space-between" sx={{ width: 1, px: 1 }}>
        <Author />
        <StreamModeToggler isStreaming={isStreaming} onToggle={toggleMasterStreaming} width={80} />
      </Stack>

      <BCCPLinks />

    </Stack>
  );
}



export default Footer;