import React from "react";
import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Theme } from "@/type";
import { socialButtonStyles as styles } from "./SocialButton.styles";

export default function SocialButton(props: {
  theme: Theme;
  label: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  onPress: () => void;
}) {
  const { theme } = props;

  return (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => [
        styles.btn,
        {
          backgroundColor: theme.surface2,
          borderColor: theme.border,
          opacity: pressed ? 0.88 : 1,
        },
      ]}
      accessibilityRole="button"
      accessibilityLabel={props.label}
    >
      <Ionicons name={props.icon} size={18} color={theme.text} />
      <Text style={[styles.text, { color: theme.text }]}>{props.label}</Text>
    </Pressable>
  );
}
