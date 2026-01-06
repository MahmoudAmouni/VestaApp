import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { Theme } from "@/type";

import BottomNav from "@/components/BottomNav";
import Button from "@/components/Button";
import Header from "@/components/Header";
import HeroCard from "@/components/HeroCard";

import RecipesSection, { Recipe } from "@/components/Recipe/RecipeSection";
import { recipesScreenStyles as styles } from "./recipe.styles";

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

export default function RecipesScreen() {
  const theme = darkTheme;
  const insets = useSafeAreaInsets();

  const [savedIds, setSavedIds] = useState<Record<string, boolean>>({
    "4": true,
  });

  const recipes: Recipe[] = useMemo(
    () => [
      {
        id: "1",
        title: "Creamy Chicken Bowl",
        subtitle: "Matches: chicken • yogurt • rice",
        badge: "From Pantry",
        tags: ["High protein", "Healthy", "Spicy"],
      },
      {
        id: "2",
        title: "Yogurt Herb Dip + Toast",
        subtitle: "Matches: yogurt • spices • bread",
        badge: "From Pantry",
        tags: ["Quick", "Vegetarian"],
      },
      {
        id: "3",
        title: "Spaghetti Aglio e Olio",
        subtitle: "Garlic, olive oil, chili",
        badge: "Italy",
        tags: ["High protein", "Healthy", "Spicy"],
      },
      {
        id: "4",
        title: "Tacos de Pollo",
        subtitle: "Crisp, juicy, bright toppings.",
        badge: "Mexico",
        tags: ["High protein", "Healthy", "Spicy"],
      },
    ],
    []
  );

  function toggleSave(id: string) {
    setSavedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: theme.bg }]}>
      <StatusBar barStyle="light-content" />
      <View style={styles.screen}>
        <Header theme={theme} title="Vesta" kicker="Recipes" />

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={[
            styles.content,
            { paddingBottom: 110 + insets.bottom },
          ]}
          showsVerticalScrollIndicator={false}
        >
          <HeroCard
            theme={theme}
            title="Use what you have."
            sub="Vesta pulls ideas from your pantry + world recipes."
            kpis={[
              { label: "Saved Recipes", value: "5" },
              { label: "More Recipes ?", value: "Ask Ai" },
            ]}
          >
            <Button
              theme={theme}
              variant="secondary"
              label="Saved recipes"
              onPress={() => router.push("/recipes/savedRecipes")}
              style={styles.heroBtn}
            />
          </HeroCard>

          <RecipesSection
            theme={theme}
            recipes={recipes}
            isSaved={(id) => !!savedIds[id]}
            onToggleSave={toggleSave}
            onPressCook={(id) => {
              router.push("/recipes/recipeDetail");
            }}
          />
        </ScrollView>

        <BottomNav theme={theme} />
      </View>
    </SafeAreaView>
  );
}
