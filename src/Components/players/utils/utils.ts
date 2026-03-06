import { ReactNode } from "react";
import { SxProps, Theme } from "@mui/material";



export interface IPlayerProps {
  id: string;
  url: string;
  isActive: boolean;
  stretchToFit?: boolean;
  onToggle: VoidFunction;
  title: string;
  imageUpdateLabel?: string;
  fsBtnSx?: SxProps<Theme>;
  specialControls?: ReactNode;
}