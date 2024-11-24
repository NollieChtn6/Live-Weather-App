import { style } from "@vanilla-extract/css";
import { colors } from "../variables.css";

export const loader = style({
  display: "flex",
  gap: "12x",
  margin: "auto",
  alignItems: "center",
  color: colors.accent,
});
