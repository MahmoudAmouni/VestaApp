import React from "react";
import { Theme } from "@/type";


import { deviceStatePillStyles as styles } from "./DeviceStatePill.styles";
import Pill from "../Pill";

export default function DeviceStatePill(props: {
  theme: Theme;
  state: "on" | "off";
}) {
  const { theme, state } = props;
  const isOn = state === "on";

  return (
    <Pill
      theme={theme}
      text={isOn ? "ON" : "OFF"}
      variant={isOn ? "primary" : "surface"}
      style={styles.pill}
    />
  );
}
