import * as NavigationBar from "expo-navigation-bar";
import { Stack } from "expo-router";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

const BG = "#0f0f12";

const NavTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: BG,
    card: BG,
  },
};

export default function RootLayout() {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "android") return;
      await NavigationBar.setBackgroundColorAsync(BG);
      await NavigationBar.setButtonStyleAsync("light");
      await NavigationBar.setVisibilityAsync("hidden");
      await NavigationBar.setBehaviorAsync("inset-swipe");
    })();
  }, []);

  return (
    <ThemeProvider value={NavTheme}>
      <StatusBar style="light" backgroundColor={BG} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: BG },
        }}
      />
    </ThemeProvider>
  );
}
