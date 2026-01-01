import React from "react";
import { Text, View } from "react-native";

import { Theme } from "@/type";
import StepCard from "./StepCard";

import { stepsSectionStyles as styles } from "./StepsSection.styles";

export type StepItem = { title: string; time: string; body: string };

export default function StepsSection(props: {
  theme: Theme;
  steps: StepItem[];
}) {
  const { theme } = props;

  return (
    <View style={styles.wrap}>
      <Text style={[styles.h, { color: theme.text }]}>Steps</Text>

      <View style={styles.list}>
        {props.steps.map((s, idx) => (
          <StepCard
            key={`${idx}-${s.title}`}
            theme={theme}
            index={idx + 1}
            title={s.title}
            time={s.time}
            body={s.body}
          />
        ))}
      </View>
    </View>
  );
}
