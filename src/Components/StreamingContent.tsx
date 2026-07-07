import { ReactNode } from "react";
import { Stack } from "@mui/material";
import { Place, PLACES_CONFIG } from "../Utils/places";

interface IProps {
  place: Place;
}

const views = PLACES_CONFIG.reduce((prev, curr) => {
  prev[curr.name] = curr.active ? <curr.component /> : null;
  return prev;
}, {} as Record<Place, ReactNode>);



function StreamingContent({ place }: IProps) {
  return (
    <Stack sx={{ gap: 6, pt: 3, width: 1, alignItems: "center" }}>
      {views[place]}
    </Stack>
  );
}



export default StreamingContent;