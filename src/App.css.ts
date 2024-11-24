import { style } from "@vanilla-extract/css";
import { colors } from "./variables.css";

export const appContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100vw",
  backgroundColor: colors.background,
  color: colors.primary,
});
