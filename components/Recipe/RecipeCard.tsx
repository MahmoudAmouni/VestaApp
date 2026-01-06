import React from "react";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Theme } from "@/type";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Pill from "@/components/Pill";

import { recipeCardStyles as styles } from "./RecipeCard.styles";
import { Recipe } from "./RecipeSection";

export default function RecipeCard(props: {
  theme: Theme;
  recipe: Recipe;
  saved: boolean;
  onToggleSave: () => void;
  onPressCook: () => void;
}) {
  const { theme, recipe } = props;

  return (
    <Card theme={theme} padding={14} style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.left}>
          <Text style={[styles.title, { color: theme.text }]}>
            {recipe.title}
          </Text>
          <Text style={[styles.sub, { color: theme.textMuted }]}>
            {recipe.subtitle}
          </Text>

          <View style={styles.tagsRow}>
            {recipe.tags.map((t) => (
              <Pill
                key={`${recipe.id}-${t}`}
                theme={theme}
                text={t}
                variant="surface"
                paddingX={10}
                paddingY={5}
                style={styles.tagPill}
              />
            ))}
          </View>
        </View>

        <View style={styles.right}>
          <Pill
            theme={theme}
            text={recipe.badge}
            variant="surface"
            paddingX={10}
            paddingY={6}
            style={styles.badgePill}
          />

          <Pressable
            onPress={props.onToggleSave}
            style={({ pressed }) => [
              styles.starBtn,
              {
                backgroundColor: theme.surface2,
                borderColor: theme.border,
                opacity: pressed ? 0.85 : 1,
              },
            ]}
            accessibilityRole="button"
            accessibilityLabel={props.saved ? "Unsave recipe" : "Save recipe"}
          >
            <Ionicons
              name={props.saved ? "star" : "star-outline"}
              size={16}
              color={props.saved ? theme.primary : theme.text}
            />
          </Pressable>
        </View>
      </View>

      <Button
        theme={theme}
        variant="primary"
        label="Cook Now"
        onPress={props.onPressCook}
        style={styles.cookBtn}
      />
    </Card>
  );
}
