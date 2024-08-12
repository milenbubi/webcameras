import { Stack, Typography } from "@mui/material";


function NoStreamTitle() {
  return (
    <Stack gap={3} sx={{ height: 1, justifyContent: "center", py: 3 }}>

      <Typography align="center" variant="h4" fontWeight={1000}>
        {"За да се избегне нежелан интернет трафик, видео стриймът е деактивиран"}
      </Typography>

      <Typography align="center" variant="h5" fontWeight={800}>
        {"Натисни върху превключвателя, за да гледаш"}
      </Typography>

    </Stack>
  );
}



export default NoStreamTitle;