import { Theme } from "@/type";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import { roomDetailsStyles as styles } from "./RoomDetailsScreen.styles";

import BottomNav from "@/components/BottomNav";
import Card from "@/components/Card";
import HeroCard from "@/components/HeroCard";
import QuickActionTile from "@/components/Room/QuickActionTile";
import RoomActions from "@/components/Room/RoomActions";
import RoomHeader from "@/components/Room/RoomHeader";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RoomDetailsScreen(props: { theme: Theme }) {
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

  // demo data – wire to your store/api
  const devices = [
    {
      id: "1",
      name: "Kitchen Light",
      type: "Light",
      status: "online",
      on: true,
    },
    { id: "2", name: "Fridge", type: "Appliance", status: "online", on: true },
    {
      id: "3",
      name: "Air Conditioner",
      type: "AC",
      status: "online",
      on: false,
    },
    {
      id: "4",
      name: "Washing Machine",
      type: "Appliance",
      status: "online",
      on: false,
    },
  ];

  const onCount = devices.filter((d) => d.on).length;
  const offCount = devices.length - onCount;

  function DeviceToggle(p: { on: boolean; onPress?: () => void }) {
    const isOn = p.on;
    return (
      <Pressable
        onPress={p.onPress}
        style={({ pressed }) => [
          styles.toggle,
          {
            backgroundColor: isOn ? theme.primary : theme.bg,
            borderColor: isOn ? "transparent" : theme.border,
            opacity: pressed ? 0.9 : 1,
          },
        ]}
        accessibilityRole="switch"
        accessibilityState={{ checked: isOn }}
        accessibilityLabel={isOn ? "Device on" : "Device off"}
      >
        <View
          style={[
            styles.toggleDot,
            {
              backgroundColor: isOn ? "rgba(255,255,255,0.92)" : theme.bg,
              borderColor: isOn ? "transparent" : theme.border,
            },
          ]}
        />
        <Text
          style={[
            styles.toggleText,
            { color: isOn ? theme.bg : theme.textMuted },
          ]}
        >
          {isOn ? "ON" : "OFF"}
        </Text>
      </Pressable>
    );
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: theme.bg }]}>
      <View style={[styles.screen, { backgroundColor: theme.bg }]}>
        <RoomHeader
          theme={theme}
          title="Kitchen"
          onBack={() => {}}
          onAddDevice={() => {}}
        />

        <ScrollView
          contentContainerStyle={[styles.scroll, { paddingBottom: 118 }]}
          showsVerticalScrollIndicator={false}
        >
          <HeroCard
            theme={theme}
            title="Kitchen control"
            sub="Toggle devices instantly. Control all kitchen devices"
          >
            <View style={styles.tiles}>
              <QuickActionTile
                theme={theme}
                label="Devices ON"
                value={`${onCount}`}
              />
              <QuickActionTile
                theme={theme}
                label="Devices OFF"
                value={`${offCount}`}
              />
              <QuickActionTile
                theme={theme}
                label="Quick Action"
                value="All OFF"
                onPress={() => {}}
              />
              <QuickActionTile
                theme={theme}
                label="Quick Action"
                value="All ON"
                onPress={() => {}}
              />
            </View>

            <View style={styles.bulkRow}>
              <Pressable
                onPress={() => {}}
                style={({ pressed }) => [
                  styles.bulkBtn,
                  {
                    backgroundColor: theme.bg,
                    borderColor: theme.border,
                    opacity: pressed ? 0.9 : 1,
                  },
                ]}
                accessibilityRole="button"
                accessibilityLabel="All ON"
              >
                <Text style={[styles.bulkText, { color: theme.text }]}>
                  All ON
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {}}
                style={({ pressed }) => [
                  styles.bulkBtn,
                  {
                    backgroundColor: theme.bg,
                    borderColor: theme.border,
                    opacity: pressed ? 0.9 : 1,
                  },
                ]}
                accessibilityRole="button"
                accessibilityLabel="All OFF"
              >
                <Text style={[styles.bulkText, { color: theme.text }]}>
                  All OFF
                </Text>
              </Pressable>
            </View>
          </HeroCard>

          <View style={styles.sectionHead}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              Devices
            </Text>
          </View>

          <View style={styles.list}>
            {devices.map((d) => (
              <View
                key={d.id}
                style={[
                  styles.deviceRow,
                  {
                    backgroundColor: theme.surface,
                    borderColor: theme.border,
                  },
                ]}
              >
                <Text style={[styles.deviceName, { color: theme.text }]}>
                  {d.name}
                </Text>

                <View style={styles.deviceRight}>
                  <DeviceToggle on={d.on} onPress={() => {}} />

                  <Pressable
                    onPress={() => {}}
                    style={({ pressed }) => [
                      styles.deviceIconBtn,
                      {
                        backgroundColor: theme.bg,
                        borderColor: theme.border,
                        opacity: pressed ? 0.85 : 1,
                      },
                    ]}
                    accessibilityRole="button"
                    accessibilityLabel={`Edit ${d.name}`}
                  >
                    <Ionicons
                      name="create-outline"
                      size={16}
                      color={theme.textMuted}
                    />
                  </Pressable>

                  <Pressable
                    onPress={() => {}}
                    style={({ pressed }) => [
                      styles.deviceIconBtn,
                      {
                        backgroundColor: theme.bg,
                        borderColor: theme.border,
                        opacity: pressed ? 0.85 : 1,
                      },
                    ]}
                    accessibilityRole="button"
                    accessibilityLabel={`Delete ${d.name}`}
                  >
                    <Ionicons
                      name="trash-outline"
                      size={16}
                      color={theme.textMuted}
                    />
                  </Pressable>
                </View>
              </View>
            ))}
          </View>

          <Card theme={theme} padding={12} radius={16} noShadow>
            <RoomActions
              theme={theme}
              onEditRoom={() => {}}
              onDeleteRoom={() => {}}
            />
          </Card>
        </ScrollView>

        <BottomNav theme={theme} />
      </View>
    </SafeAreaView>
  );
}
