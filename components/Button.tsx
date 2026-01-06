import { Theme } from "@/type";
import { Pressable, StyleSheet, Text, ViewStyle } from "react-native";

type ButtonVariant = "primary" | "secondary";

export default function Button(props: {
  theme: Theme;
  variant: ButtonVariant;
  label: string;
  onPress: () => void;
  style?: ViewStyle; 
}) {
  const { theme } = props;

  const bg = props.variant === "primary" ? theme.primary : theme.surface2;
  const border = props.variant === "primary" ? theme.primary : theme.border;
  const text = props.variant === "primary" ? theme.bg : theme.text;

  return (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => [
        styles.btn,
        props.style,
        {
          backgroundColor: bg,
          borderColor: border,
          opacity: pressed ? 0.9 : 1,
        },
      ]}
      accessibilityRole="button"
    >
      <Text style={[styles.btnText, { color: text }]}>{props.label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 13,
    fontWeight: "900",
  },
});
