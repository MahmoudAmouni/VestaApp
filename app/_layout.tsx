import * as NavigationBar from "expo-navigation-bar";
import { Stack } from "expo-router";
import React, { useEffect } from "react";
import { Platform } from "react-native";

export default function RootLayout() {
  useEffect(() => {
    async function setupAndroidNav() {
      if (Platform.OS !== "android") return;

      await NavigationBar.setBackgroundColorAsync("#0f0f12");
      await NavigationBar.setButtonStyleAsync("light");

      await NavigationBar.setVisibilityAsync("hidden");
      await NavigationBar.setBehaviorAsync("inset-swipe");
    }

    setupAndroidNav();
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,

        animation: "fade",
        animationDuration: 0,

        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="roomDetail" />
      <Stack.Screen name="savedRecipes" />
      <Stack.Screen name="rooms" />
      <Stack.Screen name="pantry" />
      <Stack.Screen name="recipes" />
      <Stack.Screen name="recipeDetail" />
      <Stack.Screen name="ai" />
      <Stack.Screen name="profile" />
    </Stack>
  );
}
