import React from "react";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Theme } from "@/type";

import { deviceRowStyles as styles } from "./DeviceRow.styles";
import DeviceStatePill from "./DeviceStatePill";

type DeviceState = "on" | "off";
type Device = { id: string; name: string; sub: string; state: DeviceState };

export default function DeviceRow(props: {
  theme: Theme;
  device: Device;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}) {
  const { theme, device } = props;

  return (
    <View
      style={[
        styles.row,
        { backgroundColor: theme.surface2, borderColor: theme.border },
      ]}
    >
      <View style={styles.main}>
        <Text style={[styles.name, { color: theme.text }]} numberOfLines={1}>
          {device.name}
        </Text>
        {!!device.sub && (
          <Text
            style={[styles.sub, { color: theme.textMuted }]}
            numberOfLines={1}
          >
            {device.sub}
          </Text>
        )}
      </View>

      <View style={styles.right}>
        <DeviceStatePill theme={theme} state={device.state} />

        {!!props.onEdit && (
          <Pressable
            onPress={() => props.onEdit?.(device.id)}
            style={({ pressed }) => [
              styles.iconBtn,
              {
                backgroundColor: theme.surface,
                borderColor: theme.border,
                opacity: pressed ? 0.85 : 1,
              },
            ]}
            accessibilityRole="button"
            accessibilityLabel={`Edit ${device.name}`}
          >
            <Ionicons name="pencil-outline" size={16} color={theme.textMuted} />
          </Pressable>
        )}

        {!!props.onDelete && (
          <Pressable
            onPress={() => props.onDelete?.(device.id)}
            style={({ pressed }) => [
              styles.iconBtn,
              {
                backgroundColor: theme.surface,
                borderColor: theme.border,
                opacity: pressed ? 0.85 : 1,
              },
            ]}
            accessibilityRole="button"
            accessibilityLabel={`Delete ${device.name}`}
          >
            <Ionicons name="trash-outline" size={16} color={theme.textMuted} />
          </Pressable>
        )}
      </View>
    </View>
  );
}
