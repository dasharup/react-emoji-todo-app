const BG_COLORS = {
  info: "bg-info",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
  info: "bg-info"
};

export const BUTTON_TYPES = {
  DONE: {
    symbol: "✔️",
    bgColor: BG_COLORS.success
  },
  EDIT: {
    symbol: "✍️",
    bgColor: BG_COLORS.info
  },
  DELETE: {
    symbol: "❌",
    bgColor: BG_COLORS.danger
  },
  NOT_DONE: {
    symbol: "⏰",
    bgColor: BG_COLORS.info
  },
  ADD: {
    symbol: "➕",
    bgColor: BG_COLORS.info
  }
};
