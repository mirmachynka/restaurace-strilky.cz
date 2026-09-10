import { semantic, token } from "#3vf4qlwszcip";

export const overlays = {
  popover: {
    item: {
      root: {
        color: semantic.textMuted,
      },
      states: {
        hover: {
          background: semantic.surface2,
          color: semantic.textColor,
        },
        selected: {
          background: semantic.surface2,
          color: semantic.textColor,
        },
      },
    },
    panel: {
      background: semantic.surface1,
      border: token.border(semantic.borderSurface1),
      color: semantic.textColor,
      padding: "4px",
      radius: "0.5rem",
      shadow: "0 10px 30px -12px oklch(0% 0 0 / 28%)",
    },
  },
};
