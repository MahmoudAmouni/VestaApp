import { StyleSheet } from "react-native";

export const quickActionTileStyles = StyleSheet.create({
  wrap: {
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
    minHeight: 72,
    justifyContent: "space-between",
  },
  label: {
    fontSize: 12,
    fontWeight: "700",
  },
  value: {
    fontSize: 16,
    fontWeight: "900",
    letterSpacing: -0.2,
  },
});
