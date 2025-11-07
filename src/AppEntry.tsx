import { useState } from "react";
import { Stack } from "@mui/material";
import { safeLocalStorage } from "@ffilip/chan180-utils/helpers";
import News from "./BCCP/News";
import Djala from "./BCCP/Djala";
import Horgos from "./BCCP/Horgos";
import Kelebia from "./BCCP/Kelebia";
import Turkiye from "./BCCP/Turkiye";
import Bulgaria from "./BCCP/Bulgaria";
import Bottom from "./Components/Bottom";
import { useStats } from "./Utils/stats";
import HiddenH1 from "./Components/HiddenH1";
import { useAdminScrollbar } from "./Utils/theme";
import PlaceButtons from "./Components/PlaceButtons";
import NoStreamTitle from "./Components/NoStreamTitle";
import { getPlaceFromUrlOrLS, NEWS_ACTIVE } from "./Utils/places";



function AppEntry() {
  const adminscrollbar = useAdminScrollbar();
  const [bccp, setBccp] = useState(getPlaceFromUrlOrLS);
  const [isStreaming, setIsStreaming] = useState(safeLocalStorage.get("streaming") !== "off");
  useStats(bccp);


  return (
    <Stack
      className={adminscrollbar}
      sx={{ gap: 4, height: 1, py: 2, alignItems: "center", overflowY: "auto", position: "relative", px: { xs: 1, sm: 2 } }}
    >

      <HiddenH1 />

      <PlaceButtons bccp={bccp} onChangeBccp={setBccp} />

      {
        isStreaming ? (
          <Stack gap={6} pt={3} width="100%" alignItems="center">
            {NEWS_ACTIVE && bccp === "News" && <News />}
            {bccp === "Bulgaria" && <Bulgaria />}
            {bccp === "Horgos" && <Horgos />}
            {bccp === "Djala" && <Djala />}
            {bccp === "Kelebia" && <Kelebia />}
            {bccp === "Turkiye" && <Turkiye />}
          </Stack>
        )
          :
          <NoStreamTitle />
      }

      <Bottom isStreaming={isStreaming} changeMasterStreaming={setIsStreaming} />

    </Stack>
  );
}



export default AppEntry;