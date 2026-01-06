import React from "react";
import { Pressable, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Theme } from "@/type";
import { chatComposerStyles as styles } from "./ChatComposer.styles";

export default function ChatComposer(props: {
  theme: Theme;
  value: string;
  onChangeText: (v: string) => void;
  onSend: () => void;
}) {
  const { theme } = props;
  const canSend = props.value.trim().length > 0;

  return (
    <View
      style={[
        styles.wrap,
        {
          backgroundColor: theme.bg,
        },
      ]}
    >
      <View
        style={[
          styles.inputWrap,
          { backgroundColor: theme.surface2, borderColor: theme.border },
        ]}
      >
        <TextInput
          value={props.value}
          onChangeText={props.onChangeText}
          placeholder="What to cook for dinner ?"
          placeholderTextColor={theme.borderStrong}
          style={[styles.input, { color: theme.text }]}
          returnKeyType="send"
          onSubmitEditing={props.onSend}
        />

        <Pressable
          onPress={props.onSend}
          disabled={!canSend}
          style={({ pressed }) => [
            styles.sendBtn,
            {
              backgroundColor: theme.primary,
              opacity: !canSend ? 0.45 : pressed ? 0.86 : 1,
            },
          ]}
          accessibilityRole="button"
          accessibilityLabel="Send"
        >
          <Ionicons name="send" size={16} color={theme.bg} />
        </Pressable>
      </View>
    </View>
  );
}
