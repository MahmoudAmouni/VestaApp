import { Theme } from "@/type";
import React from "react";
import { Text, View } from "react-native";

import Card from "@/components/Card";
import Pill from "@/components/Pill";

import { expiringSoonSectionStyles as styles } from "./ExpiringSoonSection.styles";

type ExpiringRow = { name: string; meta: string; badge: string };

export default function ExpiringSoonSection(props: {
  theme: Theme;
  items: ExpiringRow[];
}) {
  const { theme } = props;

  return (
    <View style={styles.section}>
      <Text style={[styles.title, { color: theme.text }]}>Expiring Soon</Text>

      <Card theme={theme} padding={0} style={styles.card}>
        {props.items.map((it, i) => {
          const showDivider = i !== 0;

          return (
            <View
              key={`${it.name}-${i}`}
              style={[
                styles.row,
                showDivider && {
                  borderTopColor: theme.border,
                  borderTopWidth: 1,
                },
              ]}
            >
              <View style={styles.left}>
                <Text style={[styles.name, { color: theme.text }]}>
                  {it.name}
                </Text>
                <Text style={[styles.meta, { color: theme.textMuted }]}>
                  {it.meta}
                </Text>
              </View>

              <Pill
                theme={theme}
                text={it.badge}
                variant="surface"
                paddingX={12}
                paddingY={6}
                style={styles.badge}
              />
            </View>
          );
        })}
      </Card>
    </View>
  );
}
