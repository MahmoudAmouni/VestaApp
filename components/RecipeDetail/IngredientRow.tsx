import React from "react";
import { Text, View } from "react-native";

import { Theme } from "@/type";
import Pill from "@/components/Pill";

import { ingredientRowStyles as styles } from "./IngredientRow.styles";

export default function IngredientRow(props: {
  theme: Theme;
  name: string;
  amount: string;
}) {
  const { theme } = props;

  return (
    <View
      style={[
        styles.row,
        { backgroundColor: theme.surface2, borderColor: theme.border },
      ]}
    >
      <Text style={[styles.name, { color: theme.text }]}>{props.name}</Text>

      <Pill
        theme={theme}
        text={props.amount}
        variant="surface"
        paddingX={10}
        paddingY={5}
      />
    </View>
  );
}
