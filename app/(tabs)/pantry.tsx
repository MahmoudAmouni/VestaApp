import React, { useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

import { Theme } from "@/type";

import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import HeroCard from "@/components/HeroCard";

import AllItemsSection, {
  PantryItem,
} from "@/components/Pantry/AllItemsSection";
import ExpiringSoonSection from "@/components/Pantry/ExpiringSoonSection";
import PantryFilterRow, {
  PantryFilterKey,
} from "@/components/Pantry/PantryFilterRow";
import PantrySearchBar from "@/components/Pantry/PantrySearchBar";
import { pantryScreenStyles as styles } from "./pantry.styles";

const darkTheme: Theme = {
  bg: "#0F0F12",
  surface: "#15151B",
  surface2: "#1B1B23",
  text: "#f3f3f6",
  textMuted: "rgba(243, 243, 246, 0.68)",
  border: "rgba(255,255,255,0.10)",
  borderStrong: "rgba(255,255,255,0.16)",
  primary: "#c45b3d",
  primaryGlow: "rgba(196, 91, 61, 0.20)",
  navBg: "rgba(15, 15, 18, 0.82)",
  shadow1: "rgba(0,0,0,0.35)",
};

export default function Pantry() {
  const theme = darkTheme;
  const insets = useSafeAreaInsets();

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<PantryFilterKey>("All");

  const expiringSoon = useMemo(
    () => [
      { name: "Yogurt", meta: "Fridge • 4 pcs", badge: "Tomorrow" },
      { name: "Chicken Breast", meta: "Freezer • 1 kg", badge: "2 days" },
    ],
    []
  );

  const allItems: PantryItem[] = useMemo(
    () => [
      { id: "1", name: "Rice", location: "Pantry", badge: "30+ days" },
      { id: "2", name: "Milk", location: "Fridge", badge: "3 days" },
      { id: "3", name: "Frozen Peas", location: "Freezer", badge: "14 days" },
      { id: "4", name: "Meat", location: "Freezer", badge: "7 days" },
    ],
    []
  );

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: theme.bg }]}>
      <View style={[styles.screen, { backgroundColor: theme.bg }]}>
        <Header theme={theme} title="Vesta" kicker="Pantry" />

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={[
            styles.content,
            { paddingBottom: 110 + insets.bottom },
          ]}
          showsVerticalScrollIndicator={false}
        >
          {/* ✅ HeroCard inline (no PantryHero component file) */}
          <HeroCard
            theme={theme}
            title="Cook from what's inside."
            sub="Keep it simple: add items, check expiry, and let Vesta suggest meals."
            kpis={[
              { label: "Expiring son", value: "2" },
              { label: "This week", value: "5" },
            ]}
          />

          <PantrySearchBar
            theme={theme}
            value={query}
            onChangeText={setQuery}
            onSubmit={() => {}}
          />

          <PantryFilterRow theme={theme} value={filter} onChange={setFilter} />

          <ExpiringSoonSection theme={theme} items={expiringSoon} />

          <AllItemsSection
            theme={theme}
            items={allItems}
            onPressAdd={() => {}}
            onPressEdit={(id) => {}}
            onPressDelete={(id) => {}}
          />
        </ScrollView>

        <BottomNav theme={theme} />
      </View>
    </SafeAreaView>
  );
}
