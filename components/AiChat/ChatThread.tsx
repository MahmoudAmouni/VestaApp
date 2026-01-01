import React, { useEffect, useRef } from "react";
import { ScrollView, View } from "react-native";

import { Theme } from "@/type";
import { chatThreadStyles as styles } from "./ChatThread.styles";
import ChatMessageBubble from "./ChatMessageBubble";

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  name: string; // "You" | "Vesta"
  text: string;
  time?: string;
};

export default function ChatThread(props: {
  theme: Theme;
  messages: ChatMessage[];
  contentBottomPadding: number;
}) {
  const { theme } = props;
  const ref = useRef<ScrollView>(null);

  useEffect(() => {
    requestAnimationFrame(() => {
      ref.current?.scrollToEnd({ animated: true });
    });
  }, [props.messages.length]);

  return (
    <ScrollView
      ref={ref}
      style={styles.scroll}
      contentContainerStyle={[
        styles.content,
        { paddingBottom: props.contentBottomPadding },
      ]}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.list}>
        {props.messages.map((m) => (
          <ChatMessageBubble key={m.id} theme={theme} message={m} />
        ))}
      </View>
    </ScrollView>
  );
}
