import { SX } from "@ffilip/mui-react-utils";
import { blueGrey } from "@mui/material/colors";


type ButtonType = "external" | "internal";
type SelectionType = "selected" | "unselected";

type ButtonCustomStyle = Record<
    ButtonType,
    Record<SelectionType, SX>
>;


export const placeButtonCustomStyle: ButtonCustomStyle = {
    external: {
        selected: {
            color: "#000",
            opacity: 1,
            backgroundColor: blueGrey[100],
            "&:hover": {
                backgroundColor: blueGrey[100],
                opacity: 1
            }
        },
        unselected: {
            color: "#000",
            opacity: 0.5,
            backgroundColor: blueGrey[50],
            "&:hover": {
                backgroundColor: blueGrey[50],
                opacity: 0.8
            }
        }
    },

    internal: {
        selected: {
            opacity: 1,
            background: "#191d21",
            "&:hover": {
                background: "#191d21",
                opacity: 1
            }
        },
        unselected: {
            opacity: 0.5,
            background: "#000",
            "&:hover": {
                background: "rgba(0, 0, 0, 0.83)",
                opacity: 0.8
            }
        }
    }
};


const ButtonStyle: SX = {
    transition: "opacity 0.3s",
    pt: "5px",
    pb: { xs: "3px", md: "3px" },
    minWidth: { xs: 100, md: 160 },
    fontWeight: 800,
    fontFamily: "Arial",
    fontSize: { xs: 12, md: 14 },
    letterSpacing: { xs: "1px", md: "2px" },
    height: { xs: 27, md: 33 }
};


export const placeBtnWrapperStyle: SX = {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: { xs: 1.5, md: 3 },
    "& button": ButtonStyle
}