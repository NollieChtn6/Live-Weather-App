import { style } from "@vanilla-extract/css";
import { colors, fontSize } from "../variables.css";

export const message = style({
  display: "flex",
  margin: "auto",
  color: colors.accent,
  fontSize: "1.2rem",
  justifySelf: "center",
});

export const sectionTitle = style({
  fontSize: fontSize.h3,
  color: colors.accent,
});

export const dashboardDataContent = style({
  display: "flex",
  flexDirection: "column",
  color: colors.accent,
  height: "auto",
  alignItems: "center",
  gap: "24px",
  width: "100%",
  maxHeight: "500px",
  overflowY: "auto",
});

export const locationContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "6px",
});

export const secondaryData = style({
  fontSize: "0.8rem",
});

export const dateContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
});

export const date = style({
  display: "flex",
  fontSize: "1.5rem",
  fontWeight: "bold",
});

export const sunDataContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const weatherDataContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // backgroundColor: "lightblue",
  width: "100%",
  gap: "12px",
});

export const forecastContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "1.1rem",
  gap: "6px",
});

export const tempContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const temp = style({
  fontSize: "1rem",
});

export const tempRangeContainer = style({
  display: "flex",
  gap: "24px",
});

export const dataContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const weatherIcon = style({
  width: "64px",
  height: "64px",
});
