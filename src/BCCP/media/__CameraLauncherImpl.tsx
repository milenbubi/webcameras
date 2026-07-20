import { MouseEvent } from "react";
import { Centered } from "@ffilip/mui-react-utils";
import { Box, Button, Link, Stack } from "@mui/material";

import { Cam } from "../utils/cams";
import Title from "../../Components/Title";
import { useRefreshInfo } from "./tools/useRefreshInfo";
import { CamLauncherCSS } from "../../Styles/CSSStyles";
import { updateCamUrlWithTimestamp } from "./tools/helpers";

interface IProps {
  title: string;
  cams: Cam[];
  refreshSeconds: number;
  showUpdateInMinutes?: boolean;
  urlComposer: (source: string) => string;
}



function __CameraLauncherImpl({ title, cams, urlComposer, ...refreshProps }: IProps) {
  const { updateLabel } = useRefreshInfo(refreshProps);

  const openCam = (event: MouseEvent<HTMLAnchorElement>, camUrl: string, label?: string) => {
    event.preventDefault();

    window.open(
      updateCamUrlWithTimestamp(camUrl),
      label,
      "width=900,height=700,left=100,top=100,resizable=yes"
    );
  };


  return (

    <Centered sx={{ ...CamLauncherCSS }}>
      <Title value={title} imageUpdateLabel={updateLabel} sx={{ left: 10 }} />

      <Stack
        sx={{
          gap: 2, width: "100%", height: "100%",
          border: "2px solid #cecece",
          borderRadius: "4px", py: { xs: 2, md: 2.5 },
          px: { xs: 2, md: 6, lg: 12 }
        }}
      >
        {
          cams.map((cam, index) => {
            const camUrl = urlComposer(cam.source);

            return (
              <Link
                key={index}
                href={camUrl}
                onClick={e => openCam(e, camUrl, cam.label)}
                underline="none"
              >
                <Button
                  sx={{
                    width: "100%",
                    py: "11px",
                    color: "#000000",
                    backgroundImage: "linear-gradient(#e5e5e5, #888888)",
                    fontWeight: 800,
                    "&:hover": {
                      backgroundImage: "linear-gradient(#999999, #e5e5e5)"
                    }
                  }}
                  children={cam.label}
                />
              </Link>
            );
          })
        }
      </Stack>
    </Centered>

  );
}



export { __CameraLauncherImpl };