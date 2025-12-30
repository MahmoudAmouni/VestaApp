import { Theme } from "@/type";
import { StyleSheet, Text, View } from "react-native";

export default function Pill({ theme, text }: { theme: Theme; text: string }) {
  return (
    <View
      style={[
        styles.pill,
        { borderColor: theme.border, backgroundColor: theme.surface2 },
      ]}
    >
      <Text style={[styles.pillText, { color: theme.text }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  pillText: {
    fontSize: 12,
    fontWeight: "900",
  },
});
