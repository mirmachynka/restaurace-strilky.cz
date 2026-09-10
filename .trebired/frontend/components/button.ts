import { semantic, token, ui } from "#3vf4qlwszcip";

const white = token.color("white", "500");
const primary = token.color("primary", "500");
const secondary = token.color("secondary", "500");

export const button = {
  root: {
    background: "transparent",
    border: "1px solid transparent",
    color: semantic.textColor,
    fontFamily: ui.fontSans,
    fontWeight: "600",
    gap: "0.5rem",
    letterSpacing: "0",
    paddingBlock: "0",
    radius: "0.5rem",
    textTransform: "none",
    whiteSpace: "nowrap",
  },
  sizes: {
    lg: { fontSize: "1rem", height: "3rem", paddingInline: "1.75rem" },
    md: { fontSize: "0.875rem", height: "2.5rem", paddingInline: "1rem" },
    sm: { fontSize: "0.8rem", height: "2.25rem", paddingInline: "0.875rem" },
  },
  tones: {
    accent: {
      background: secondary,
      borderColor: secondary,
      color: white,
      states: {
        hover: { background: token.colorMix(secondary, "90%", "white"), borderColor: token.colorMix(secondary, "90%", "white"), color: white },
      },
    },
    chip: {
      background: white,
      borderColor: semantic.borderSurface1,
      borderWidth: "1px",
      color: semantic.textColor,
      states: {
        hover: { background: semantic.surface2, borderColor: semantic.borderSurface1, color: semantic.textColor },
      },
    },
    ghost: {
      background: "transparent",
      borderColor: "transparent",
      color: semantic.textColor,
      states: {
        hover: { background: semantic.surface2, borderColor: "transparent", color: semantic.textColor },
      },
    },
    highlight: {
      background: primary,
      borderColor: primary,
      color: white,
      states: {
        hover: { background: token.colorMix(primary, "92%", "white"), borderColor: token.colorMix(primary, "92%", "white"), color: white },
      },
    },
    outline: {
      background: "transparent",
      borderColor: token.colorMix(white, "24%", "transparent"),
      color: white,
      states: {
        hover: {
          background: token.colorMix(white, "10%", "transparent"),
          borderColor: token.colorMix(white, "38%", "transparent"),
          color: white,
        },
      },
    },
    white: {
      background: white,
      borderColor: white,
      color: primary,
      states: {
        hover: { background: token.colorMix(white, "90%", primary), borderColor: token.colorMix(white, "90%", primary), color: primary },
      },
    },
  },
};
