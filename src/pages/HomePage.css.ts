import { style } from "@vanilla-extract/css";
import { colors, fontSize } from "../variables.css";

export const pageContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

export const homepageTitle = style({
  fontSize: fontSize.h1,
  margin: "auto",
  color: colors.accent,
  textTransform: "uppercase",
});

export const homepageContentContainer = style({
  display: "flex",
  flexDirection: "row",
  margin: "auto",
  width: "900px",
  height: "auto",
  backgroundColor: colors.primary,
  borderRadius: "10px",
  boxShadow: "3px -2px 12px 4px #000000",
});

export const homepageSectionContainer = style({
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  width: "50%",
  height: "100%",
  gap: "24px",
  padding: "24px",
  alignItems: "center",
});

export const homepageSectionTitle = style({
  fontSize: fontSize.h2,
  color: colors.accent,
});
