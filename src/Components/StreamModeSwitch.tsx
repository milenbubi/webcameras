import { Button, CardMedia, } from "@mui/material";

interface IProps {
  isStreaming: boolean;
  onChange: (isOn: boolean) => void;
}



function StreamModeSwitch({ isStreaming, onChange }: IProps) {
  return (
    <Button
      sx={{ p: 0 }}
      onClick={() => {
        onChange(!isStreaming);
      }}
    >

      <CardMedia
        src={isStreaming ? "/on.png" : "/off.png"}
        component="img"
        sx={{ width: 80 }}
        onError={e => { e.currentTarget.style.display = "none"; }}
      />

    </Button>
  );
}



export default StreamModeSwitch;