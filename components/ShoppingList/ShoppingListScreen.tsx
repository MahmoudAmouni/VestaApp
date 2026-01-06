import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import BottomNav from "@/components/BottomNav";
import AddItemRow from "@/components/ShoppingList/AddItemRow";
import ItemsSection, {
  ShoppingItem,
} from "@/components/ShoppingList/ItemsSection";
import ShoppingHeader from "@/components/ShoppingList/ShoppingHeader";
import ShoppingHero from "@/components/ShoppingList/ShoppingHero";
import { Theme } from "@/type";
import { shoppingStyles as styles } from "./ShoppingListScreen.styles";

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

export default function ShoppingListScreen() {
  const theme = darkTheme;
  const insets = useSafeAreaInsets();

  const [draft, setDraft] = useState("");

  const [items, setItems] = useState<ShoppingItem[]>([
    {
      id: "1",
      name: "Milk",
      meta: "2L • Dairy",
      checked: true,
      status: "Done",
    },
    {
      id: "2",
      name: "Tomatoes",
      meta: "1Kg • Produce",
      checked: false,
      status: "Need",
    },
    {
      id: "3",
      name: "Chicken breast",
      meta: "1kg • Protein",
      checked: false,
      status: "Need",
    },
    {
      id: "4",
      name: "Yogurt",
      meta: "4 cups • Dairy",
      checked: false,
      status: "Need",
    },
  ]);

  const checkedCount = useMemo(
    () => items.filter((i) => i.checked).length,
    [items]
  );

  function addItem() {
    const v = draft.trim();
    if (!v) return;

    setItems((prev) => [
      {
        id: `i_${Date.now()}`,
        name: v,
        meta: "",
        checked: false,
        status: "Need",
      },
      ...prev,
    ]);
    setDraft("");
  }

  function toggleChecked(id: string) {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id
          ? {
              ...it,
              checked: !it.checked,
              status: !it.checked ? "Done" : "Need",
            }
          : it
      )
    );
  }

  function clearChecked() {
    setItems((prev) => prev.filter((it) => !it.checked));
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: theme.bg }]}>
      <View style={styles.screen}>
        <ShoppingHeader
          theme={theme}
          title="Shopping list"
          onBack={() => router.back()}
        />

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={[
            styles.content,
            { paddingBottom: 110 + insets.bottom },
          ]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <ShoppingHero
            theme={theme}
            title="Grab the basics."
            subtitle="Tap to mark items as done. Add anything you need  Vesta can suggest based on your pantry."
            onPressPantryGaps={() => {}}
            onPressSavedRecipes={() => {}}
          />

          <AddItemRow
            theme={theme}
            value={draft}
            onChangeText={setDraft}
            onPressSave={addItem}
          />

          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              Items
            </Text>

            <ItemsSection
              theme={theme}
              items={items}
              onToggleChecked={toggleChecked}
            />
          </View>

          <View style={styles.clearWrap}>
            <ItemsSection.ClearCheckedButton
              theme={theme}
              disabled={checkedCount === 0}
              onPress={clearChecked}
            />
          </View>
        </ScrollView>

        <BottomNav theme={theme} />
      </View>
    </SafeAreaView>
  );
}
