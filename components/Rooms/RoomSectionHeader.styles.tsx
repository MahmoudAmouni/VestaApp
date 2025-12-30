import { StyleSheet } from "react-native";

export const roomsSectionHeaderStyles = StyleSheet.create({
  row: {
    marginTop: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "900",
  },
  actionBtn: {
    flexGrow: 0,
  },
});
