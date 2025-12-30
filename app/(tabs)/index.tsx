import BottomNav from "@/components/BottomNav";
import Card from "@/components/Card";
import Header from "@/components/Header";
import HeroCard from "@/components/HeroCard";
import RoomCard from "@/components/Home/RoomCard";

import { Theme } from "@/type";
import React, { useMemo, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import { indexStyles as styles } from "./index.styles";
import SectionHeader from "@/components/Home/SectionHeader";
import ListRow from "@/components/Home/ListRow";

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

type NavKey = "Home" | "Rooms" | "Pantry" | "Recipes" | "AI" | "Profile";

export default function HomeScreen() {
  const theme = darkTheme;

  const [activeTab, setActiveTab] = useState<NavKey>("Home");
  const [aiPrompt, setAiPrompt] = useState("");

  const rooms = useMemo(
    () => [
      { id: "1", name: "Living Room", devices: 4, on: 3, off: 1 },
      { id: "2", name: "Living Room", devices: 4, on: 3, off: 1 },
      { id: "3", name: "Living Room", devices: 4, on: 3, off: 1 },
    ],
    []
  );

  const expiring = useMemo(
    () => [
      { id: "e1", title: "Yogurt", sub: "Fridge • 4 pcs", tag: "Tomorrow" },
      {
        id: "e2",
        title: "Chicken Breast",
        sub: "Freezer • 1 kg",
        tag: "2 days",
      },
    ],
    []
  );

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: theme.bg }]}>
      <StatusBar barStyle="light-content" />

      <View style={[styles.phone, { backgroundColor: theme.surface }]}>
        <Header
          theme={theme}
          kicker="Home Pulse"
          title="My Home"
          onPressNotifications={() => {}}
          onPressProfile={() => setActiveTab("Profile")}
        />

        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            { paddingBottom: 90 }, // space for bottom nav
          ]}
          showsVerticalScrollIndicator={false}
        >
          <HeroCard
            theme={theme}
            kicker="Today’s vibe"
            title="Calm & ready."
            sub="A quick snapshot of your space — lights, pantry, and what’s coming up."
            kpis={[
              { label: "Devices ON", value: "3", hint: "Kitchen + Living" },
              { label: "Offline", value: "0", hint: "All online" },
              { label: "Expiring soon", value: "2", hint: "Next 48hr" },
              { label: "Saved Recipes", value: "12", hint: "Start Cooking!" },
            ]}
          />

          <SectionHeader
            theme={theme}
            title="Rooms"
            actionLabel="Manage"
            onPressAction={() => setActiveTab("Rooms")}
          />

          <View style={styles.sectionGap}>
            {rooms.map((r) => (
              <RoomCard
                key={r.id}
                theme={theme}
                name={r.name}
                devices={r.devices}
                onCount={r.on}
                offCount={r.off}
                onPressAllOn={() => {}}
                onPressAllOff={() => {}}
                onPressCard={() => {}}
              />
            ))}
          </View>

          <SectionHeader
            theme={theme}
            title="Expiring Soon"
            actionLabel="Open Pantry"
            onPressAction={() => setActiveTab("Pantry")}
          />

          <Card
            theme={theme}
            style={{ paddingVertical: 0, overflow: "hidden" }}
          >
            {expiring.map((item, idx) => (
              <ListRow
                key={item.id}
                theme={theme}
                title={item.title}
                sub={item.sub}
                tag={item.tag}
                showTopBorder={idx !== 0}
              />
            ))}
          </Card>

          <View style={{ height: 14 }} />

          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            Vesta AI
          </Text>
          <Card theme={theme} style={{ padding: 14 }}>
            <Text style={[styles.aiTitle, { color: theme.text }]}>
              Need any help ?
            </Text>

            <View
              style={[
                styles.aiInputRow,
                { borderColor: theme.border, backgroundColor: theme.surface2 },
              ]}
            >
              <TextInput
                value={aiPrompt}
                onChangeText={setAiPrompt}
                placeholder="What to cook for dinner ?"
                placeholderTextColor={theme.textMuted}
                style={[styles.aiInput, { color: theme.text }]}
              />
              <Pressable
                onPress={() => {
                  setAiPrompt("");
                }}
                style={({ pressed }) => [
                  styles.aiSendBtn,
                  {
                    backgroundColor: theme.primary,
                    opacity: pressed ? 0.9 : 1,
                  },
                ]}
                accessibilityRole="button"
                accessibilityLabel="Send to Vesta AI"
              >
                <Text style={[styles.aiSendText, { color: "#fff" }]}>➤</Text>
              </Pressable>
            </View>
          </Card>

          <View style={{ height: 18 }} />
        </ScrollView>

        <BottomNav
          theme={theme}
          active={activeTab}
          onChange={(k) => setActiveTab(k)}
        />
      </View>
    </SafeAreaView>
  );
}
