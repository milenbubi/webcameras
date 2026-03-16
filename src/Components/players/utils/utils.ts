import { ReactNode } from "react";
import { SX } from "@ffilip/mui-react-utils";



export interface IPlayerProps {
  id: string;
  url: string;
  isActive: boolean;
  stretchToFit?: boolean;
  onToggle: VoidFunction;
  title: string;
  imageUpdateLabel?: string;
  fsBtnSx?: SX;
  specialControls?: ReactNode;
  withSound?: boolean;
}