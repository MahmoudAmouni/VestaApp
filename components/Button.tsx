import { Theme } from "@/type";
import { Pressable, StyleSheet, Text } from "react-native";

type ButtonVariant = "primary" | "secondary";
export default function Button(props: {
  theme: Theme;
  variant: ButtonVariant;
  label: string;
  onPress: () => void;
}) {
  const { theme } = props;

  const bg = props.variant === "primary" ? theme.primary : theme.surface2;
  const border = props.variant === "primary" ? theme.primary : theme.border;
  const text = props.variant === "primary" ? "#fff" : theme.text;

  return (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => [
        styles.btn,
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
    flex: 1,
    borderWidth: 1,
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 13,
    fontWeight: "900",
  },
});