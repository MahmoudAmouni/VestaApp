import * as NavigationBar from "expo-navigation-bar";
import { Stack } from "expo-router";
import React, { useEffect } from "react";
import { Platform } from "react-native";

export default function RootLayout() {
  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.setVisibilityAsync("hidden"); // hides nav buttons
      NavigationBar.setBehaviorAsync("inset-swipe"); // swipe to reveal
    }
  }, []);
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="pantry" />
      <Stack.Screen name="recipes" />
      <Stack.Screen name="ai" />
      <Stack.Screen name="profile" />
    </Stack>
  );
}
