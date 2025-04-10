import { Stack, Typography } from "@mui/material";


function NoStreamTitle() {
  return (
    <Stack gap={3} sx={{ height: 1, justifyContent: "center", py: 3, px: { xs: 0, sm: 12, md: 30 } }}>

      <Typography align="center" variant="h4" fontWeight={1000}>
        {"С цел предотвратяване на нежелан интернет трафик, видео стрийминг услугите са временно деактивирани"}
      </Typography>

      <Typography align="center" variant="h5" fontWeight={800}>
        {"Натисни върху превключвателя, за да гледаш"}
      </Typography>

    </Stack>
  );
}



export default NoStreamTitle;