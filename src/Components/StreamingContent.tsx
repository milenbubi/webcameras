import { ReactNode } from "react";
import { Stack } from "@mui/material";
import News from "../BCCP/News";
import Djala from "../BCCP/Djala";
import Horgos from "../BCCP/Horgos";
import Kelebia from "../BCCP/Kelebia";
import Turkiye from "../BCCP/Turkiye";
import Bulgaria from "../BCCP/Bulgaria";
import { NEWS_ACTIVE, Place } from "../Utils/places";

interface IProps {
  bccp: Place;
}

const views: Record<Place, ReactNode> = {
  News: NEWS_ACTIVE && <News />,
  Bulgaria: <Bulgaria />,
  Horgos: <Horgos />,
  Djala: <Djala />,
  Kelebia: <Kelebia />,
  Turkiye: <Turkiye />
};



function StreamingContent({ bccp }: IProps) {
  return (
    <Stack sx={{ gap: 6, pt: 3, width: 1, alignItems: "center" }}>
      {views[bccp]}
    </Stack>
  );
}



export default StreamingContent;