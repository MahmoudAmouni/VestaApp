import React, { useMemo } from "react";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Theme } from "@/type";

import BottomNav from "@/components/BottomNav";
import RoomsHero from "@/components/Rooms/RoomsHero";
import RoomCard from "@/components/Rooms/RoomCard";
import RoomsSectionHeader from "@/components/Rooms/RoomSectionHeader";

import { roomsStyles as styles } from "./rooms.styles";
import Header from "@/components/Header";
import { useRouter } from "expo-router";

type DeviceState = "on" | "off";
type Device = { id: string; name: string; sub: string; state: DeviceState };

type Room = {
  id: string;
  name: string;
  count: number;
  devices: Device[];
  moreCount: number;
};

export default function RoomsScreen() {
  // NOTE: keep the same Theme shape you already use across the app.
  const theme: Theme = (globalThis as any).theme ?? {
    bg: "#0f0f12",
    surface: "#15151b",
    surface2: "#1b1b23",
    text: "#f3f3f6",
    textMuted: "rgba(243, 243, 246, 0.68)",
    border: "rgba(255,255,255,0.10)",
    borderStrong: "rgba(255,255,255,0.16)",
    primary: "#c45b3d",
    navBg: "rgba(15, 15, 18, 0.82)",
    shadow1: "rgba(0,0,0,0.35)",
  };
  const router = useRouter();
  const insets = useSafeAreaInsets();

  // Demo data — replace with your store/API.
  // Kept to match the Figma screenshot layout.
  const rooms: Room[] = useMemo(
    () => [
      {
        id: "living",
        name: "Living Room",
        count: 4,
        moreCount: 2,
        devices: [
          { id: "tv", name: "TV", sub: "", state: "on" },
          { id: "lamp", name: "Lamp", sub: "", state: "on" },
        ],
      },
      {
        id: "kitchen",
        name: "Kitchen",
        count: 3,
        moreCount: 1,
        devices: [
          { id: "kLight", name: "Kitchen Light", sub: "", state: "on" },
          { id: "fridge", name: "Fridge", sub: "", state: "on" },
        ],
      },
      {
        id: "bedroom",
        name: "Bedroom",
        count: 1,
        moreCount: 0,
        devices: [{ id: "heater", name: "Heater", sub: "", state: "off" }],
      },
    ],
    []
  );


  return (
    <View style={[styles.safe, { backgroundColor: theme.bg }]}>
      <View style={styles.frame}>
        <View style={styles.container}>
          <Header
            theme={theme}
            title="Vesta"
            kicker="Rooms"
            onPressProfile={() => {}}
            onPressNotifications={() => {}}
          />

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              styles.content,
              { paddingBottom: insets.bottom + 96 },
            ]}
          >
            <RoomsHero
              theme={theme}
              title="Every room, simplified."
              sub={
                'Preview devices by room. Tap "Open room" to\ncontrol everything.'
              }
              stats={[
                { label: "Total devices", value: "7" },
                { label: "Devices ON", value: "3" },
                { label: "Devices OFF", value: "4" },
                { label: "Quick tip", value: "Tap a room" },
              ]}
            />

            <RoomsSectionHeader
              theme={theme}
              title="Rooms"
              actionLabel="Add room"
              onPressAction={() => {}}
              style={{ marginTop: 14 }}
            />

            <View style={styles.list}>
              {rooms.map((room) => (
                <RoomCard
                  key={room.id}
                  theme={theme}
                  room={room}
                  onPressOpen={() => router.push("/roomDetail")}
                />
              ))}
            </View>
          </ScrollView>

          <View style={{ paddingBottom: insets.bottom }}>
            <BottomNav theme={theme} />
          </View>
        </View>
      </View>
    </View>
  );
}