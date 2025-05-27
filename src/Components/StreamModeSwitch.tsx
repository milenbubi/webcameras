import { Button, CardMedia, } from "@mui/material";

interface IProps {
  isStreaming: boolean;
  onChange: (isOn: boolean) => void;
  doNotPulse?: boolean;
}



function StreamModeSwitch({ isStreaming, onChange, doNotPulse }: IProps) {
  return (
    <Button
      sx={{
        p: 0,
        animation: (isStreaming || doNotPulse) ? "none" : "pulse 2s linear infinite",
        "@keyframes pulse": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        }
      }}
      onClick={() => {
        onChange(!isStreaming);
      }}
    >

      <CardMedia
        src={isStreaming ? "/shots/on.png" : "/shots/off.png"}
        component="img"
        sx={{ width: 80 }}
        onError={e => { e.currentTarget.style.display = "none"; }}
      />

    </Button>
  );
}



export default StreamModeSwitch;