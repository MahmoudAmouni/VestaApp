import React from "react";
import { Text, View } from "react-native";
import { Theme } from "@/type";

import RecipeCard from "./RecipeCard";
import { recipesSectionStyles as styles } from "./RecipesSection.styles";

export type Recipe = {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  tags: string[];
};

export default function RecipesSection(props: {
  theme: Theme;
  recipes: Recipe[];
  isSaved: (id: string) => boolean;
  onToggleSave: (id: string) => void;
  onPressCook: (id: string) => void;
}) {
  const { theme } = props;

  return (
    <View style={styles.wrap}>
      <Text style={[styles.title, { color: theme.text }]}>Recipes</Text>

      <View style={styles.list}>
        {props.recipes.map((r) => (
          <RecipeCard
            key={r.id}
            theme={theme}
            recipe={r}
            saved={props.isSaved(r.id)}
            onToggleSave={() => props.onToggleSave(r.id)}
            onPressCook={() => props.onPressCook(r.id)}
          />
        ))}
      </View>
    </View>
  );
}
