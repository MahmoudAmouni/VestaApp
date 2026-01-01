import React, { useMemo } from "react";
import { ScrollView, View, Text } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { router } from "expo-router";

import { Theme } from "@/type";

import BottomNav from "@/components/BottomNav";
import { profileStyles as styles } from "./ProfileScreen.styles";
import SettingsSection, { SettingsItem } from "@/components/profile/SettingsSection";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileSummaryCard from "@/components/profile/ProfileSummaryCard";
import DangerZoneActions from "@/components/profile/DangerZoneActions";

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

export default function ProfileScreen() {
  const theme = darkTheme;
  const insets = useSafeAreaInsets();

  const homeSettings: SettingsItem[] = useMemo(
    () => [
      {
        title: "Edit Home",
        sub: "Name, default rooms, and basics",
        onPress: () => {},
      },
      {
        title: "Notifications",
        sub: "Expiry reminders and device alerts",
        onPress: () => {},
      },
      {
        title: "Theme",
        sub: "Dark (default). Switch to light",
        onPress: () => {},
      },
    ],
    []
  );

  const foodPrefs: SettingsItem[] = useMemo(
    () => [
      {
        title: "Diet",
        sub: "Name, default rooms, and basics",
        onPress: () => {},
      },
      {
        title: "Allergies",
        sub: "Expiry reminders and device alerts",
        onPress: () => {},
      },
      {
        title: "Disliked",
        sub: "Dark (default). Switch to light",
        onPress: () => {},
      },
    ],
    []
  );

  const support: SettingsItem[] = useMemo(
    () => [
      {
        title: "Privacy",
        sub: "Data, permissions, and controls",
        onPress: () => {},
      },
      {
        title: "About Vesta",
        sub: "Version, credits, and updates",
        onPress: () => {},
      },
    ],
    []
  );

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: theme.bg }]}>
      <View style={styles.screen}>
        <ProfileHeader
          theme={theme}
          title="Profile"
          onBack={() => router.back()}
        />

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={[
            styles.content,
            { paddingBottom: 110 + insets.bottom },
          ]}
          showsVerticalScrollIndicator={false}
        >
          <ProfileSummaryCard
            theme={theme}
            name="Mahmoud"
            homeLabel="Home:My home"
            onPressEdit={() => {}}
          />

          <SettingsSection
            theme={theme}
            title="Home Settings"
            items={homeSettings}
          />

          <SettingsSection
            theme={theme}
            title="Food preferences"
            items={foodPrefs}
          />

          <SettingsSection theme={theme} title="Support" items={support} />

          <View style={styles.dangerWrap}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              Danger zone
            </Text>
            <DangerZoneActions
              theme={theme}
              onSignOut={() => {}}
              onDeleteAccount={() => {}}
            />
          </View>
        </ScrollView>

        <BottomNav theme={theme} />
      </View>
    </SafeAreaView>
  );
}
