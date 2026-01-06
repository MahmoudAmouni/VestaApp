import React, { useMemo, useState } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, View } from "react-native";
import {
  
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Theme } from "@/type";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

import { aiChatStyles as styles } from "./ai.styles";
import ChatThread, { ChatMessage } from "@/components/AiChat/ChatThread";
import ChatComposer from "@/components/AiChat/ChatComposer";

const darkTheme: Theme = {
  bg: "#0F0F12",
  surface: "#15151B",
  surface2: "#1B1B23",
  text: "#f3f3f6",
  textMuted: "rgba(243, 243, 246, 0.68)",
  border: "rgba(255,255,255,0.10)",
  borderStrong: "rgba(255,255,255,0.16)",
  primary: "#c45b3d",
  primaryGlow: "rgba(196, 91, 61, 0.20)",
  navBg: "rgba(15, 15, 18, 0.82)",
  shadow1: "rgba(0,0,0,0.35)",
};

export default function AiChatScreen() {
  const theme = darkTheme;
  const insets = useSafeAreaInsets();

  const initial: ChatMessage[] = useMemo(
    () => [
      {
        id: "m1",
        role: "user",
        name: "You",
        text: "I have chicken, yogurt, and rice. What can I cook in 25 minutes?",
        time: "25 minutes?",
      },
      {
        id: "m2",
        role: "assistant",
        name: "Vesta",
        text: "Try a Creamy Chicken Bowl: quick pan-seared chicken, yogurt-lemon sauce, and rice. Want it mild or spicy?",
      },
      {
        id: "m3",
        role: "user",
        name: "You",
        text: "Spicy 🔥",
      },
      {
        id: "m4",
        role: "assistant",
        name: "Vesta",
        text: "Perfect. Add paprika + chili + garlic to the yogurt sauce. If you want, I can turn this into a 4-step cook mode.",
      },
    ],
    []
  );

  const [messages, setMessages] = useState<ChatMessage[]>(initial);
  const [draft, setDraft] = useState("");

  function onSend() {
    const trimmed = draft.trim();
    if (!trimmed) return;

    setMessages((prev) => [
      ...prev,
      {
        id: `m_${Date.now()}`,
        role: "user",
        name: "You",
        text: trimmed,
      },
    ]);
    setDraft("");
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: theme.bg }]}>
      <View style={styles.screen}>
        <StatusBar barStyle="light-content" />
        <Header theme={theme} title="Vesta" kicker="AI" />

        <KeyboardAvoidingView
          style={styles.body}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={0}
        >
          <ChatThread
            theme={theme}
            messages={messages}
            contentBottomPadding={16 + 60 + 12 + (110 + insets.bottom)}
          />

          <ChatComposer
            theme={theme}
            value={draft}
            onChangeText={setDraft}
            onSend={onSend}
          />
        </KeyboardAvoidingView>

        <BottomNav theme={theme} />
      </View>
    </SafeAreaView>
  );
}
