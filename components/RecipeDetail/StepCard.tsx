import React from "react";
import { Text, View } from "react-native";

import { Theme } from "@/type";
import Card from "@/components/Card";
import Pill from "@/components/Pill";

import { stepCardStyles as styles } from "./StepCard.styles";

export default function StepCard(props: {
  theme: Theme;
  index: number;
  title: string;
  time: string;
  body: string;
}) {
  const { theme } = props;

  return (
    <Card theme={theme} padding={14} style={styles.card}>
      <View style={styles.headRow}>
        <View style={styles.leftHead}>
          <View
            style={[
              styles.numBox,
              { backgroundColor: theme.surface2, borderColor: theme.border },
            ]}
          >
            <Text style={[styles.num, { color: theme.text }]}>
              {props.index}
            </Text>
          </View>

          <Text style={[styles.title, { color: theme.text }]}>
            {props.title}
          </Text>
        </View>

        <Pill
          theme={theme}
          text={props.time}
          variant="surface"
          paddingX={10}
          paddingY={5}
        />
      </View>

      <Text style={[styles.body, { color: theme.textMuted }]}>
        {props.body}
      </Text>
    </Card>
  );
}
