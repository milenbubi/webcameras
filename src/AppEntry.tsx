import { useState } from "react";
import { Stack } from "@mui/material";

import HiddenH1 from "./Components/HiddenH1";
import { resolvePlace } from "./Utils/places";
import Footer from "./Components/footer/Footer";
import { useRecordVisit } from "./Utils/recordVisit";
import NoStreamTitle from "./Components/NoStreamTitle";
import PlaceButtons from "./Components/buttons/PlaceButtons";
import StreamingContent from "./Components/StreamingContent";
import { useMasterStreamStatus } from "./Utils/localStorage";
import { useClearSearchParams } from "./Utils/clearSearchParams";
import __BodyScrollbar from "./Components/internals/__BodyScrollbar";



function AppEntry() {
  const [bccp, setBccp] = useState(resolvePlace);
  const { isStreaming, toggleStreaming } = useMasterStreamStatus();
  useRecordVisit(bccp);
  useClearSearchParams();


  return (
    <Stack
      sx={{
        gap: 4, py: 2, alignItems: "center", overflowY: "auto",
        px: { xs: 1, sm: 2 }
      }}
    >

      <HiddenH1 />
      <__BodyScrollbar />

      <PlaceButtons bccp={bccp} onChangeBccp={setBccp} />

      {isStreaming ? <StreamingContent bccp={bccp} /> : <NoStreamTitle />}

      <Footer isStreaming={isStreaming} toggleMasterStreaming={toggleStreaming} />

    </Stack>
  );
}



export default AppEntry;