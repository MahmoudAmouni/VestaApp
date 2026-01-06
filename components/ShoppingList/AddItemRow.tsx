import React from "react";
import { TextInput, View } from "react-native";

import { Theme } from "@/type";
import Button from "@/components/Button";

import { addItemRowStyles as styles } from "./AddItemRow.styles";

export default function AddItemRow(props: {
  theme: Theme;
  value: string;
  onChangeText: (v: string) => void;
  onPressSave: () => void;
}) {
  const { theme } = props;

  return (
    <View style={styles.row}>
      <View
        style={[
          styles.inputWrap,
          { backgroundColor: theme.surface2, borderColor: theme.border },
        ]}
      >
        <TextInput
          value={props.value}
          onChangeText={props.onChangeText}
          placeholder="Add items..."
          placeholderTextColor={theme.textMuted}
          style={[styles.input, { color: theme.text }]}
          returnKeyType="done"
          onSubmitEditing={props.onPressSave}
        />
      </View>

      <Button
        theme={theme}
        variant="primary"
        label="Save"
        onPress={props.onPressSave}
        style={styles.saveBtn}
      />
    </View>
  );
}
