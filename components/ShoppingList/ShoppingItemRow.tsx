import React from "react";
import { Pressable, Text, View } from "react-native";
import { Theme } from "@/type";

import Pill from "@/components/Pill";

import { shoppingItemRowStyles as styles } from "./ShoppingItemRow.styles";
import { ShoppingItem } from "./ItemsSection";

export default function ShoppingItemRow(props: {
  theme: Theme;
  item: ShoppingItem;
  showDivider?: boolean;
  onToggle: () => void;
}) {
  const { theme, item } = props;

  return (
    <Pressable
      onPress={props.onToggle}
      style={({ pressed }) => [
        styles.row,
        props.showDivider && {
          borderTopWidth: 1,
          borderTopColor: theme.border,
        },
        { opacity: pressed ? 0.9 : 1 },
      ]}
      accessibilityRole="button"
      accessibilityLabel={item.name}
    >
      <View style={styles.left}>
        <View
          style={[
            styles.checkbox,
            {
              backgroundColor: item.checked ? theme.primary : theme.bg,
              borderColor: item.checked ? theme.primary : theme.border,
            },
          ]}
        >
          {item.checked ? (
            <Text style={[styles.check, { color: theme.bg }]}>✓</Text>
          ) : null}
        </View>

        <View style={styles.textBlock}>
          <Text style={[styles.name, { color: theme.text }]}>{item.name}</Text>
          {item.meta ? (
            <Text style={[styles.meta, { color: theme.textMuted }]}>
              {item.meta}
            </Text>
          ) : null}
        </View>
      </View>

      <Pill
        theme={theme}
        text={item.status}
        variant="surface"
        paddingX={12}
        paddingY={6}
        style={styles.statusPill}
      />
    </Pressable>
  );
}
