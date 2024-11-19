import { IconButton, SxProps, Theme } from "@mui/material";

interface IProps {
  onClick: (streamIndex: number) => void;
  streamIndex: number;
  sx?: SxProps<Theme>;
  indexCount?: number;
}



function ChangeCamButton({ onClick, streamIndex, sx, indexCount = 2 }: IProps) {
  const handleClick = () => {
    if (indexCount) {
      const newIndex = streamIndex + 1;
      onClick(newIndex > indexCount ? 1 : newIndex);
    }
    else {
      onClick(streamIndex === 1 ? 2 : 1);
    }
  };


  return (
    <IconButton
      sx={{
        color: "yellow",
        position: "absolute",
        width: 66,
        height: 66,
        top: 0,
        right: 1,
        fontSize: 36,
        fontWeight: 600,
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