import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Theme } from "@/type";
import Card from "@/components/Card";
import Button from "@/components/Button";

import ShoppingItemRow from "./ShoppingItemRow";
import { itemsSectionStyles as styles } from "./ItemsSection.styles.ts";

export type ShoppingItem = {
  id: string;
  name: string;
  meta: string;
  checked: boolean;
  status: "Need" | "Done";
};

function ClearCheckedButton(props: {
  theme: Theme;
  disabled?: boolean;
  onPress: () => void;
}) {
  const { theme } = props;

  return (
    <Button
      theme={theme}
      variant="primary"
      label="Clear Checked"
      onPress={props.onPress}
      disabled={props.disabled}
      leftIcon={<Ionicons name="trash-outline" size={16} color={theme.bg} />}
      style={styles.clearBtn}
    />
  );
}

export default function ItemsSection(props: {
  theme: Theme;
  items: ShoppingItem[];
  onToggleChecked: (id: string) => void;
}) {
  const { theme } = props;

  return (
    <Card theme={theme} padding={0} style={styles.card}>
      {props.items.map((it, idx) => (
        <ShoppingItemRow
          key={it.id}
          theme={theme}
          item={it}
          showDivider={idx !== 0}
          onToggle={() => props.onToggleChecked(it.id)}
        />
      ))}
    </Card>
  );
}

ItemsSection.ClearCheckedButton = ClearCheckedButton;
