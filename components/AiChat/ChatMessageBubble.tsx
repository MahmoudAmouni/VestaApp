import React from "react";
import { Text, View } from "react-native";

import { Theme } from "@/type";
import { ChatMessage } from "./ChatThread";
import { chatMessageBubbleStyles as styles } from "./ChatMessageBubble.styles";

export default function ChatMessageBubble(props: {
  theme: Theme;
  message: ChatMessage;
}) {
  const { theme, message } = props;

  const isUser = message.role === "user";

  const bubbleStyle = [
    styles.bubble,
    isUser ? styles.userBubble : styles.assistantBubble,
    {
      backgroundColor: isUser ? theme.primary : theme.surface,
      borderColor: isUser ? "transparent" : theme.border,
    },
  ];

  const nameColor = isUser ? theme.bg : theme.textMuted;
  const textColor = isUser ? theme.bg : theme.text;
  const timeColor = isUser ? theme.bg : theme.textMuted;

  return (
    <View style={[styles.row, isUser ? styles.rowUser : styles.rowAssistant]}>
      <View style={bubbleStyle}>
        <Text style={[styles.name, { color: nameColor }]}>{message.name}</Text>

        <Text style={[styles.text, { color: textColor }]}>{message.text}</Text>

        {message.time ? (
          <Text style={[styles.time, { color: timeColor }]}>
            {message.time}
          </Text>
        ) : null}
      </View>
    </View>
  );
}
