import { StyleSheet } from "react-native";

export const roomsStyles = StyleSheet.create({
  safe: { flex: 1 },

  // Centers the app on wide screens (web/tablet) and keeps phone-like width.
  frame: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    flex: 1,
    width: "100%",
    maxWidth: 430,
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },

  list: {
    marginTop: 12,
    gap: 14,
  },
});
