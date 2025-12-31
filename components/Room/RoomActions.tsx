import React from "react";
import { Pressable, Text, View } from "react-native";
import { Theme } from "@/type";
import { roomActionsStyles as styles } from "./RoomActions.styles";

export default function RoomActions(props: {
  theme: Theme;
  onEditRoom?: () => void;
  onDeleteRoom?: () => void;
}) {
  const { theme } = props;

  return (
    <View style={styles.row}>
      <Pressable
        onPress={props.onEditRoom}
        style={({ pressed }) => [
          styles.btn,
          {
            backgroundColor: theme.surface2,
            borderColor: theme.border,
            opacity: pressed ? 0.9 : 1,
          },
        ]}
        accessibilityRole="button"
        accessibilityLabel="Edit Room"
      >
        <Text style={[styles.btnText, { color: theme.text }]}>Edit Room</Text>
      </Pressable>

      <Pressable
        onPress={props.onDeleteRoom}
        style={({ pressed }) => [
          styles.btn,
          {
            backgroundColor: theme.primary,
            borderColor: "transparent",
            opacity: pressed ? 0.9 : 1,
          },
        ]}
        accessibilityRole="button"
        accessibilityLabel="Delete Room"
      >
        <Text style={[styles.btnText, { color: theme.bg }]}>Delete Room</Text>
      </Pressable>
    </View>
  );
}
