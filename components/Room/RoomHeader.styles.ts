import { StyleSheet } from "react-native";

export const roomHeaderStyles = StyleSheet.create({
  wrap: {
    paddingTop: 14,
    paddingHorizontal: 14,
    paddingBottom: 10,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconBtn: {
    width: 34,
    height: 34,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: -0.2,
  },
  addBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
    height: 34,
    borderRadius: 12,
    borderWidth: 1,
  },
  addText: {
    fontSize: 12,
    fontWeight: "900",
  },
});
