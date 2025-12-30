import { Theme } from "@/type";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { bottomstyles as styles } from "./BottomNav.styles";

type NavKey = "Home" | "Rooms" | "Pantry" | "Recipes" | "AI" | "Profile";

export default function BottomNav(props: {
  theme: Theme;
  active: NavKey;
  onChange: (key: NavKey) => void;
}) {
  const { theme } = props;

  const items: {
    key: NavKey;
    label: string;
    icon: React.ComponentProps<typeof Ionicons>["name"];
    iconActive?: React.ComponentProps<typeof Ionicons>["name"];
  }[] = [
    { key: "Home", label: "Home", icon: "home-outline", iconActive: "home" },
    { key: "Rooms", label: "Rooms", icon: "tv-outline", iconActive: "tv" },
    {
      key: "Pantry",
      label: "Pantry",
      icon: "grid-outline",
      iconActive: "grid",
    },
    {
      key: "Recipes",
      label: "Recipes",
      icon: "book-outline",
      iconActive: "book",
    },
    {
      key: "AI",
      label: "AI",
      icon: "chatbubble-outline",
      iconActive: "chatbubble",
    },
  ];

  return (
    <View
      style={[
        styles.bottomNav,
        {
          backgroundColor: theme.navBg ?? theme.bg,
          borderColor: theme.border,
        },
      ]}
    >
      {items.map((it) => {
        const isActive = props.active === it.key;

        return (
          <Pressable
            key={it.key}
            onPress={() => props.onChange(it.key)}
            style={({ pressed }) => [
              styles.navItem,
              { opacity: pressed ? 0.85 : 1 },
            ]}
          >
            <View
              style={[
                styles.navIconWrap,
                isActive && {
                  backgroundColor: theme.surface2,
                  borderColor: theme.borderStrong ?? theme.border,
                  borderWidth: 1,
                },
              ]}
            >
              <View
                style={
                  isActive
                    ? {
                        backgroundColor: theme.primary,
                        padding: 4,
                        borderRadius: 4,
                      }
                    : undefined
                }
              >
                <Ionicons
                  name={(isActive ? it.iconActive : it.icon) ?? it.icon}
                  size={20}
                  color={isActive ? theme.bg : theme.textMuted}
                />
              </View>

              <Text
                style={[
                  styles.navText,
                  { color: isActive ? theme.text : theme.textMuted },
                ]}
              >
                {it.label}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}
