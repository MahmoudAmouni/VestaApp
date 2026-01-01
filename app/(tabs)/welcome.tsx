// app/(auth)/welcome.tsx
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Card from "@/components/Card";
import Button from "@/components/Button";



import { welcomeStyles as styles } from "./Welcome.styles";
import BrandRow from "@/components/Welcome/BrandRow";
import FeatureRow from "@/components/Welcome/FeatureRow";
import SocialButton from "@/components/Welcome/SocialButton";

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


export default function WelcomeScreen() {
  const theme = darkTheme;
  const insets = useSafeAreaInsets();

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

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.content,
          { paddingTop: insets.top + 14, paddingBottom: insets.bottom + 18 },
        ]}
      >
        <BrandRow theme={theme} />

        <Card theme={theme} radius={22} style={styles.mainCard}>
          <Text style={[styles.h1, { color: theme.text }]}>
            Make your home feel effortless.
          </Text>

          <Text style={[styles.p, { color: theme.textMuted }]}>
            Control devices, track pantry expiry, and get recipes that match
            what you have with a friendly AI.
          </Text>

          <View style={styles.featureList}>
            <FeatureRow
              theme={theme}
              icon="home-outline"
              title="Home Control"
              sub="Simple ON / OFF by room"
            />
            <FeatureRow
              theme={theme}
              icon="book-outline"
              title="Recipe ideas"
              sub="Recipe ideas"
            />
            <FeatureRow
              theme={theme}
              icon="chatbubble-outline"
              title="Ask Vesta"
              sub="Recipes, tips, and planning"
            />
          </View>

          <View style={styles.ctaRow}>
            <Button
              theme={theme}
              variant="primary"
              label="Login"
              onPress={() => router.push("/login")}
              style={{ flex: 1 }}
            />
            <Button
              theme={theme}
              variant="secondary"
              label="Sign up"
              onPress={() => router.push("/signup")}
              style={{ flex: 1 }}
            />
          </View>

          <Text style={[styles.dividerText, { color: theme.textMuted }]}>
            or continue with
          </Text>

          <View style={styles.socialRow}>
            <SocialButton
              theme={theme}
              label="Google"
              icon="logo-google"
              onPress={() => {}}
            />
            <SocialButton
              theme={theme}
              label="Facebook"
              icon="logo-facebook"
              onPress={() => {}}
            />
          </View>

          <Text style={[styles.legal, { color: theme.textMuted }]}>
            By continuing, you agree to our{" "}
            <Text
              style={[styles.legalLink, { color: theme.text }]}
            //   onPress={() => router.push("/terms")}
            >
              Terms
            </Text>{" "}
            and{" "}
            <Text
              style={[styles.legalLink, { color: theme.text }]}
            //   onPress={() => router.push("/privacy")}
            >
              Privacy
            </Text>
            .
          </Text>
        </Card>
      </ScrollView>
    </View>
  );
}
