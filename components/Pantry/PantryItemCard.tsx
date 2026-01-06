import React from "react";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Theme } from "@/type";

import Card from "@/components/Card";
import Pill from "@/components/Pill";
import { PantryItem } from "./AllItemsSection";

import { pantryItemCardStyles as styles } from "./PantryItemCard.styles";

export default function PantryItemCard(props: {
  theme: Theme;
  item: PantryItem;
  onPressEdit: () => void;
  onPressDelete: () => void;
}) {
  const { theme, item } = props;

  return (
    <Card theme={theme} padding={14} style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.left}>
          <Text style={[styles.name, { color: theme.text }]}>{item.name}</Text>
          <Text style={[styles.meta, { color: theme.textMuted }]}>
            {item.location}
          </Text>
        </View>

        <Pill
          theme={theme}
          text={item.badge}
          variant="surface"
          paddingX={12}
          paddingY={6}
        />
      </View>

      <View style={styles.actionsRow}>
        <Pressable
          onPress={props.onPressEdit}
          style={({ pressed }) => [
            styles.actionBtn,
            {
              backgroundColor: theme.bg,
              borderColor: theme.border,
              opacity: pressed ? 0.86 : 1,
            },
          ]}
          accessibilityRole="button"
          accessibilityLabel="Edit item"
        >
          <Ionicons name="pencil" size={16} color={theme.textMuted} />
        </Pressable>

        <Pressable
          onPress={props.onPressDelete}
          style={({ pressed }) => [
            styles.actionBtn,
            {
              backgroundColor: theme.primary,
              borderColor: theme.primary,
              opacity: pressed ? 0.86 : 1,
            },
          ]}
          accessibilityRole="button"
          accessibilityLabel="Delete item"
        >
          <Ionicons name="trash-outline" size={16} color={theme.bg} />
        </Pressable>
      </View>
    </Card>
  );
}
