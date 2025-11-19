import { useState } from "react";
import { Stack } from "@mui/material";
import { safeLocalStorage } from "@ffilip/chan180-utils/helpers";

import Bottom from "./Components/Bottom";
import HiddenH1 from "./Components/HiddenH1";
import PlaceButtons from "./Components/PlaceButtons";
import { useRecordVisit } from "./Utils/recordVisit";
import { getPlaceFromUrlOrLS } from "./Utils/places";
import NoStreamTitle from "./Components/NoStreamTitle";
import StreamingContent from "./Components/StreamingContent";
import { useClearSearchParams } from "./Utils/clearSearchParams";
import __BodyScrollbar from "./Components/internals/__BodyScrollbar";



function AppEntry() {
  const [bccp, setBccp] = useState(getPlaceFromUrlOrLS);
  const [isStreaming, setIsStreaming] = useState(safeLocalStorage.get("streaming") !== "off");
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

      <Bottom isStreaming={isStreaming} changeMasterStreaming={setIsStreaming} />

    </Stack>
  );
}



export default AppEntry;