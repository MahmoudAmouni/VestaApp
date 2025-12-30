import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,

  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },

  brandMark: {
    width: 46,
    height: 46,
    borderRadius: 8,
    borderWidth: 1,
  },

  brandText: {
    flexShrink: 1,
  },

  title: {
    fontSize: 28,
    fontWeight: "900",
    letterSpacing: -0.3,
    lineHeight: 32,
  },

  subtitle: {
    marginTop: 2,
    fontSize: 14,
    fontWeight: "600",
    opacity: 0.9,
  },

  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
});
