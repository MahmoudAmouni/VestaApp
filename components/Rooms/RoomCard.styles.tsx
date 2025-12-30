import { StyleSheet } from "react-native";

export const roomCardStyles = StyleSheet.create({
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "900",
    flex: 1,
  },
  preview: {
    marginTop: 12,
    gap: 10,
  },
  footer: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  hint: {
    fontSize: 12,
    fontWeight: "900",
  },
  openBtn: {
    flexGrow: 0,
    minWidth: 120,
  },
});
