import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

import { Theme } from "@/type";
import { headerStyles as styles } from "./Header.styles";
import IconButton from "./IconButton";
import {  useSafeAreaInsets } from "react-native-safe-area-context";

export default function Header(props: {
  theme: Theme;
  kicker: string;
  title: string;
  onPressNotifications: () => void;
  onPressProfile: () => void;
}) {
  const { theme } = props;
  const insets = useSafeAreaInsets()

  return (
    <View style ={{paddingTop:insets.top}}>
      <View
        style={[
          styles.header,
          { borderColor: theme.border },
          { backgroundColor: theme.bg },
        ]}
      >
        <View style={styles.left}>
          <View
            style={[
              styles.brandMark,
              { backgroundColor: theme.surface2, borderColor: theme.border },
            ]}
          />
          <View style={styles.brandText}>
            <Text style={[styles.title, { color: theme.text }]}>
              {props.title}
            </Text>
            <Text style={[styles.subtitle, { color: theme.textMuted }]}>
              {props.kicker}
            </Text>
          </View>
        </View>

        <View style={styles.right}>
          <IconButton
            theme={theme}
            label="Profile"
            onPress={props.onPressProfile}
            icon={(color, size) => (
              <Ionicons name="person-outline" color={color} size={size} />
            )}
          />

          <IconButton
            theme={theme}
            label="Notifications"
            onPress={props.onPressNotifications}
            icon={(color, size) => (
              <Ionicons name="bag-outline" color={color} size={size} />
            )}
          />
        </View>
      </View>
    </View>
  );
}
