import React from "react";
import { Text, View } from "react-native";
import { Theme } from "@/type";

import { deviceRowStyles as styles } from "./DeviceRow.styles";
import DeviceStatePill from "./DeviceStatePill";

type DeviceState = "on" | "off";
type Device = { id: string; name: string; sub: string; state: DeviceState };

export default function DeviceRow(props: { theme: Theme; device: Device }) {
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
        <Text style={[styles.sub, { color: theme.textMuted }]}>
          {device.sub}
        </Text>
      </View>

      <DeviceStatePill theme={theme} state={device.state} />
    </View>
  );
}
