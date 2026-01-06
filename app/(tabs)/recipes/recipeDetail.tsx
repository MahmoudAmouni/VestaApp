import React, { useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { router } from "expo-router";

import { Theme } from "@/type";

import BottomNav from "@/components/BottomNav";
import { recipeDetailStyles as styles } from "./RecipeDetailScreen.styles";
import RecipeDetailHeader from "@/components/RecipeDetail/RecipeDetailHeader";
import QuickStatsCard, { QuickStat } from "@/components/RecipeDetail/QuickStatsCard";
import DescriptionSection from "@/components/RecipeDetail/DescriptionSection";
import IngredientsSection, { Ingredient } from "@/components/RecipeDetail/IngredientSection";
import StepsSection, { StepItem } from "@/components/RecipeDetail/StepsSection";

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

export default function RecipeDetailScreen() {
  const theme = darkTheme;
  const insets = useSafeAreaInsets();

  const [saved, setSaved] = useState(true);

  const stats: QuickStat[] = useMemo(
    () => [
      { label: "Time", value: "30 min" },
      { label: "Servings", value: "2" },
      { label: "Difficulty", value: "Easy" },
      { label: "Best for", value: "Dinner" },
    ],
    []
  );

  const ingredients: Ingredient[] = useMemo(
    () => [
      { name: "Chicken breast", amount: "400g" },
      { name: "Yogurt", amount: "½ cup" },
      { name: "Garlic", amount: "2 cloves" },
      { name: "Lemon", amount: "1" },
      { name: "Wraps", amount: "2" },
      { name: "Spices", amount: "paprika • salt • pepper" },
    ],
    []
  );

  const steps: StepItem[] = useMemo(
    () => [
      {
        title: "Marinate",
        time: "5 mins",
        body: "Mix yogurt + garlic + lemon + spices. Coat chicken and rest while you prep toppings.",
      },
      {
        title: "Sear",
        time: "10 mins",
        body: "Heat a pan. Cook chicken until browned and cooked through. Rest 2 minutes, then slice.",
      },
      {
        title: "Build",
        time: "5 mins",
        body: "Warm wraps. Add chicken, a quick sauce (yogurt + lemon), and any toppings you have.",
      },
      {
        title: "Finish",
        time: "2 mins",
        body: "Roll tight, slice, and serve. Save leftovers for tomorrow’s lunch.",
      },
    ],
    []
  );

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: theme.bg }]}>
      <View style={styles.screen}>
        <RecipeDetailHeader
          theme={theme}
          title="Shish Tawook Wrap"
          saved={saved}
          onBack={() => router.back()}
          onToggleSave={() => setSaved((v) => !v)}
        />

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={[
            styles.content,
            { paddingBottom: 110 + insets.bottom },
          ]}
          showsVerticalScrollIndicator={false}
        >
          <QuickStatsCard
            theme={theme}
            title="Let's cook."
            subtitle="Ingredients, steps, and timers everything in one place."
            stats={stats}
          />

          <DescriptionSection
            theme={theme}
            text="Tender yogurt-marinated chicken, quick-seared and wrapped with a punchy garlic sauce."
          />

          <IngredientsSection theme={theme} items={ingredients} />

          <StepsSection theme={theme} steps={steps} />
        </ScrollView>

        <BottomNav theme={theme} />
      </View>
    </SafeAreaView>
  );
}
