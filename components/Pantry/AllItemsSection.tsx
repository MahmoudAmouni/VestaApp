import React from "react";
import { Text, View } from "react-native";
import { Theme } from "@/type";

import Button from "@/components/Button";
import PantryItemCard from "./PantryItemCard";

import { allItemsSectionStyles as styles } from "./AllItemsSection.styles";

export type PantryItem = {
  id: string;
  name: string;
  location: "Pantry" | "Fridge" | "Freezer";
  badge: string;
};

export default function AllItemsSection(props: {
  theme: Theme;
  items: PantryItem[];
  onPressAdd: () => void;
  onPressEdit: (id: string) => void;
  onPressDelete: (id: string) => void;
}) {
  const { theme } = props;

  return (
    <View style={styles.section}>
      <View style={styles.headerRow}>
        <Text style={[styles.title, { color: theme.text }]}>All items</Text>

        <Button
          theme={theme}
          variant="primary"
          label="Add item"
          onPress={props.onPressAdd}
          style={styles.addBtn}
        />
      </View>

      <View style={styles.list}>
        {props.items.map((it) => (
          <PantryItemCard
            key={it.id}
            theme={theme}
            item={it}
            onPressEdit={() => props.onPressEdit(it.id)}
            onPressDelete={() => props.onPressDelete(it.id)}
          />
        ))}
      </View>
    </View>
  );
}
