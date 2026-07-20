import { useState } from "react";
import { Stack } from "@mui/material";
import { useDocumentVisibility } from "@ffilip/mui-react-utils";

import APP from "./Utils/APP";
import HiddenH1 from "./Components/HiddenH1";
import Footer from "./Components/footer/Footer";
import { useRecordVisit } from "./Utils/recordVisit";
import NoStreamTitle from "./Components/NoStreamTitle";
import PlaceButtons from "./Components/buttons/PlaceButtons";
import StreamingContent from "./Components/StreamingContent";
import { useMasterStreamStatus } from "./Utils/localStorage";
import { useClearSearchParams } from "./Utils/clearSearchParams";
import __BodyScrollbar from "./Components/internals/__BodyScrollbar";



function AppEntry() {
  const [place, setPlace] = useState(APP.getInitialPlace());
  const { isStreaming, toggleStreaming } = useMasterStreamStatus();

  useRecordVisit();
  useClearSearchParams();
  useDocumentVisibility()

  return (
    <Stack
      sx={{
        gap: 4, py: 2, alignItems: "center", overflowY: "auto",
        px: { xs: 1, sm: 2 }
      }}
    >

      <HiddenH1 />
      <__BodyScrollbar />

      <PlaceButtons place={place} onChangePlace={setPlace} />

      {isStreaming ? <StreamingContent place={place} /> : <NoStreamTitle />}

      <Footer isStreaming={isStreaming} toggleMasterStreaming={toggleStreaming} />

    </Stack>
  );
}



export default AppEntry;