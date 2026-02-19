import { Button, CardMedia } from "@mui/material";

interface IProps {
  isStreaming: boolean;
  onToggle: VoidFunction;
  doNotPulse?: boolean;
  width: number;
}



function StreamModeToggler({ isStreaming, onToggle, doNotPulse, width }: IProps) {
  return (
    <Button
      sx={{
        p: 0,
        animation: (isStreaming || doNotPulse) ? "none" : "pulse 2s linear infinite",
        "@keyframes pulse": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" }
        }
      }}
      onClick={onToggle}
    >

      <CardMedia
        src={isStreaming ? "/shots/on.png" : "/shots/off.png"}
        component="img"
        sx={{ width }}
        onError={e => { e.currentTarget.style.display = "none"; }}
      />

    </Button>
  );
}



export default StreamModeToggler;