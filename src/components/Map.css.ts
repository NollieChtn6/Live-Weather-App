import { style } from "@vanilla-extract/css";
import { colors } from "../variables.css";

export const button = style({
  backgroundColor: colors.tertiary,
  padding: "8px 16px",
  borderRadius: "8px",
  border: "none",
  display: "flex",
  gap: "8px",
  textTransform: "uppercase",
  ":hover": {
    backgroundColor: colors.accent,
    cursor: "pointer",
  },
});

export const map = style({
  borderRadius: "5px",
  flexGrow: 1,
  backgroundColor: colors.secondary,
});
