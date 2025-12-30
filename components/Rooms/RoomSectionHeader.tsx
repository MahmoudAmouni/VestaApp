import React from "react";
import { Text, View } from "react-native";
import { Theme } from "@/type";


import { roomsSectionHeaderStyles as styles } from "./RoomSectionHeader.styles";
import Button from "../Button";

export default function RoomsSectionHeader(props: {
  theme: Theme;
  title: string;
  actionLabel: string;
  onPressAction: () => void;
}) {
  const { theme } = props;

  return (
    <View style={styles.row}>
      <Text style={[styles.title, { color: theme.text }]}>{props.title}</Text>
      <Button
        theme={theme}
        variant="primary"
        label={props.actionLabel}
        onPress={props.onPressAction}
        style={styles.actionBtn}
      />
    </View>
  );
}
