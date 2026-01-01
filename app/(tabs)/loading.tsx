import React, { useEffect, useMemo, useRef, useState } from "react";
import { Animated, Easing, Text, View } from "react-native";

import Card from "@/components/Card";

import { loadingStyles as styles } from "./Loading.styles";
import { Theme } from "@/type";
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


export default function LoadingScreen() {
  const theme = darkTheme;

  // Track width to compute pixel-based width/translate animations
  const [trackW, setTrackW] = useState(0);
  const innerW = useMemo(() => Math.max(0, trackW - 4), [trackW]); // track padding 2*2

  const load = useRef(new Animated.Value(0)).current; // 0..1 loop
  const pulse = useRef(new Animated.Value(0)).current; // 0..1 loop

  useEffect(() => {
    const loadLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(load, {
          toValue: 1,
          duration: 1400,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false, // animating width
        }),
        Animated.timing(load, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }),
      ])
    );

    const pulseLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1,
          duration: 600,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false,
        }),
        Animated.timing(pulse, {
          toValue: 0,
          duration: 600,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false,
        }),
      ])
    );

    loadLoop.start();
    pulseLoop.start();

    return () => {
      loadLoop.stop();
      pulseLoop.stop();
    };
  }, [load, pulse]);

  // Loader bar: width 30% -> 70% -> 30%
  const widthFrac = load.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.3, 0.7, 0.3],
  });

  // Loader bar: translateX -40% -> 0 -> 40%
  const translateFrac = load.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [-0.4, 0, 0.4],
  });

  const barWidth = innerW ? Animated.multiply(widthFrac, innerW) : 0;
  const barTranslateX = innerW ? Animated.multiply(translateFrac, innerW) : 0;

  // Dot pulse: scale 1 -> 1.08 -> 1 and opacity .85 -> 1 -> .85
  const dotScale = pulse.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.08],
  });
  const dotOpacity = pulse.interpolate({
    inputRange: [0, 1],
    outputRange: [0.85, 1],
  });

  const glowScale = pulse.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.12],
  });
  const glowOpacity = pulse.interpolate({
    inputRange: [0, 1],
    outputRange: [0.55, 0.75],
  });

  return (
    <View style={[styles.screen, { backgroundColor: theme.bg }]}>
      <View
        pointerEvents="none"
        style={[
          styles.glowA,
          { backgroundColor: theme.primaryGlow, borderColor: theme.border },
        ]}
      />
      <View
        pointerEvents="none"
        style={[
          styles.glowB,
          { backgroundColor: theme.primaryGlow, borderColor: theme.border },
        ]}
      />

      <View style={styles.center}>
        <Card theme={theme} radius={22} style={styles.card}>
          {/* Logo */}
          <View
            style={[
              styles.logo,
              { backgroundColor: theme.surface2, borderColor: theme.border },
            ]}
          >
            {/* pulsing glow behind dot */}
            <Animated.View
              pointerEvents="none"
              style={[
                styles.logoDotGlow,
                {
                  backgroundColor: theme.primaryGlow,
                  transform: [{ scale: glowScale }],
                  opacity: glowOpacity,
                },
              ]}
            />

            {/* pulsing dot */}
            <Animated.View
              pointerEvents="none"
              style={[
                styles.logoDot,
                {
                  backgroundColor: theme.primary,
                  transform: [{ scale: dotScale }],
                  opacity: dotOpacity,
                },
              ]}
            />
          </View>

          <Text style={[styles.brand, { color: theme.text }]}>Vesta</Text>
          <Text style={[styles.title, { color: theme.textMuted }]}>
            Warming up your home...
          </Text>

          {/* Loader */}
          <View
            style={[
              styles.track,
              { backgroundColor: theme.surface2, borderColor: theme.border },
            ]}
            onLayout={(e) => setTrackW(e.nativeEvent.layout.width)}
          >
            <Animated.View
              style={[
                styles.bar,
                {
                  backgroundColor: theme.primary,
                  width: barWidth,
                  transform: [{ translateX: barTranslateX }],
                },
              ]}
            />
          </View>

          <Text style={[styles.subtitle, { color: theme.textMuted }]}>
            Loading your rooms, pantry, and recipes.
          </Text>
        </Card>
      </View>
    </View>
  );
}
