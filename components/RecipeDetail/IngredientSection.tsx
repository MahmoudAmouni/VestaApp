import React from "react";
import { Text, View } from "react-native";

import { Theme } from "@/type";
import IngredientRow from "./IngredientRow";

import { ingredientsSectionStyles as styles } from "./IngredientsSection.styles";

export type Ingredient = { name: string; amount: string };

export default function IngredientsSection(props: {
  theme: Theme;
  items: Ingredient[];
}) {
  const { theme } = props;

  return (
    <View style={styles.wrap}>
      <Text style={[styles.h, { color: theme.text }]}>Ingredients</Text>

      <View style={styles.list}>
        {props.items.map((it) => (
          <IngredientRow
            key={it.name}
            theme={theme}
            name={it.name}
            amount={it.amount}
          />
        ))}
      </View>
    </View>
  );
}
