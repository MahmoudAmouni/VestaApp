import React from "react";
import { Text, View } from "react-native";
import { Theme } from "@/type";


import { roomCardStyles as styles } from "./RoomCard.styles.tsx";
import Card from "../Card";
import Pill from "../Pill";
import Button from "../Button";

type DeviceState = "on" | "off";
type Device = { id: string; name: string; sub: string; state: DeviceState };
type Room = {
  id: string;
  name: string;
  count: number;
  devices: Device[];
  moreCount: number;
};

export default function RoomCard(props: {
  theme: Theme;
  room: Room;
  onPressOpen: () => void;
}) {
  const { theme, room } = props;

  return (
    <Card theme={theme} padding={16} radius={18}>
      <View style={styles.head}>
        <Text style={[styles.name, { color: theme.text }]} numberOfLines={1}>
          {room.name}
        </Text>

        <Pill
          theme={theme}
          text={`${room.count} device${room.count === 1 ? "" : "s"}`}
        />
      </View>

      <View style={styles.preview}>
        {room.devices.slice(0, 2).map((d) => (
          <DeviceRow key={d.id} theme={theme} device={d} />
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={[styles.hint, { color: theme.textMuted }]}>
          {room.moreCount > 0 ? `+ ${room.moreCount} more devices` : " "}
        </Text>

        <Button
          theme={theme}
          variant="secondary"
          label="Open room"
          onPress={props.onPressOpen}
          style={styles.openBtn}
        />
      </View>
    </Card>
  );
}
