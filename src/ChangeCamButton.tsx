import { IconButton, SxProps, Theme } from "@mui/material";

interface IProps {
  onClick: (streamIndex: number) => void;
  streamIndex: number;
  sx?: SxProps<Theme>;
}



function ChangeCamButton({ onClick, streamIndex, sx }: IProps) {
  const handleClick = () => {
    onClick(streamIndex === 1 ? 2 : 1);
  };


  return (
    <IconButton
      sx={{
        color: "#d1d16f",
        position: "absolute",
        width: 66,
        height: 66,
        top: 0,
        right: 1,
        fontSize: 36,
        fontWeight: 1000,
        fontFamily: "arial",
        ...sx
      }}
      onClick={handleClick}
    >
      {streamIndex}
    </IconButton>
  );
}



export default ChangeCamButton;