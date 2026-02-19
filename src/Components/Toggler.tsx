import { Button, CardMedia } from "@mui/material";

export interface ITogglerProps {
  isOn: boolean;
  onToggle: VoidFunction;
}

interface IProps extends ITogglerProps {
  pulseEnabled: boolean;
  width: number;
}



function Toggler({ isOn, onToggle, pulseEnabled, width }: IProps) {
  return (
    <Button
      sx={{
        p: 0,
        animation: pulseEnabled ? "pulse 2s linear infinite" : "none",
        "@keyframes pulse": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" }
        }
      }}
      onClick={onToggle}
    >

      <CardMedia
        src={isOn ? "/shots/on.png" : "/shots/off.png"}
        component="img"
        sx={{ width }}
        onError={e => { e.currentTarget.style.display = "none"; }}
      />

    </Button>
  );
}



export default Toggler;