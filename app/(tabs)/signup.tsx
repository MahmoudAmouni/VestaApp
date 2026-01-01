import React, { useMemo, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import Card from "@/components/Card";
import Button from "@/components/Button";
import { signupStyles as styles } from "./Signup.styles";
import { Theme } from "@/type";
import LoginHeader from "@/components/Login/LoginHeader";
import TextField from "@/components/Login/TextField";
import SocialButton from "@/components/Welcome/SocialButton";

  const darkTheme: Theme = (globalThis as any).theme ?? {
    bg: "#0f0f12",
    surface: "#15151b",
    surface2: "#1b1b23",
    text: "#f3f3f6",
    textMuted: "rgba(243, 243, 246, 0.68)",
    border: "rgba(255,255,255,0.10)",
    borderStrong: "rgba(255,255,255,0.16)",
    primary: "#c45b3d",
    navBg: "rgba(15, 15, 18, 0.82)",
    shadow1: "rgba(0,0,0,0.35)",
  };

export default function SignUpScreen() {
  const theme = darkTheme;
  const insets = useSafeAreaInsets();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [homeName, setHomeName] = useState("");
  const [agree, setAgree] = useState(false);

  const canSubmit = useMemo(() => {
    const ok =
      firstName.trim().length > 0 &&
      lastName.trim().length > 0 &&
      email.trim().length > 0 &&
      password.length >= 8 &&
      homeName.trim().length > 0 &&
      agree;
    return ok;
  }, [firstName, lastName, email, password, homeName, agree]);

  function onCreateAccount() {
    // TODO: connect to your signup flow
    router.replace("/");
  }

  return (
    <View style={[styles.screen, { backgroundColor: theme.bg }]}>
      <View
        pointerEvents="none"
        style={[
          styles.glow,
          { backgroundColor: theme.primaryGlow, borderColor: theme.border },
        ]}
      />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.content,
            { paddingTop: insets.top + 8, paddingBottom: insets.bottom + 18 },
          ]}
          keyboardShouldPersistTaps="handled"
        >
          <LoginHeader theme={theme} title="Sign up" onBack={() => router.back()} />

          <Card theme={theme} radius={22} style={styles.card}>
            <Text style={[styles.h1, { color: theme.text }]}>
              Let’s set up your home.
            </Text>
            <Text style={[styles.sub, { color: theme.textMuted }]}>
              One account, one home devices, pantry, and recipes stay together.
            </Text>

            <View style={styles.form}>
              <View style={styles.twoCol}>
                <View style={{ flex: 1 }}>
                  <TextField
                    theme={theme}
                    label="First name"
                    placeholder="John"
                    value={firstName}
                    onChangeText={setFirstName}
                    autoCapitalize="words"
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <TextField
                    theme={theme}
                    label="Last name"
                    placeholder="Doe"
                    value={lastName}
                    onChangeText={setLastName}
                    autoCapitalize="words"
                  />
                </View>
              </View>

              <TextField
                theme={theme}
                label="Email"
                placeholder="you@example.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <View style={{ gap: 6 }}>
                <TextField
                  theme={theme}
                  label="Password"
                  placeholder="••••••••••"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                  autoCapitalize="none"
                />
                <Text style={[styles.helper, { color: theme.textMuted }]}>
                  Use 8+ characters. Mix letters and numbers.
                </Text>
              </View>

              <TextField
                theme={theme}
                label="Home name"
                placeholder="My Home"
                value={homeName}
                onChangeText={setHomeName}
                autoCapitalize="words"
              />

              {/* Inline Terms checkbox */}
              <Pressable
                onPress={() => setAgree((v) => !v)}
                style={({ pressed }) => [
                  styles.termsRow,
                  { opacity: pressed ? 0.86 : 1 },
                ]}
                accessibilityRole="checkbox"
                accessibilityState={{ checked: agree }}
                accessibilityLabel="Agree to Terms and Privacy"
              >
                <View
                  style={[
                    styles.checkBox,
                    {
                      backgroundColor: agree ? theme.primary : theme.surface2,
                      borderColor: agree ? theme.primary : theme.border,
                    },
                  ]}
                >
                  {agree ? (
                    <Ionicons name="checkmark" size={14} color={theme.bg} />
                  ) : null}
                </View>

                <Text style={[styles.termsText, { color: theme.textMuted }]}>
                  I agree to the{" "}
                  <Text
                    style={[styles.termsLink, { color: theme.text }]}
                    // onPress={() => router.push("/terms")}
                  >
                    Terms
                  </Text>{" "}
                  and{" "}
                  <Text
                    style={[styles.termsLink, { color: theme.text }]}
                    // onPress={() => router.push("/privacy")}
                  >
                    Privacy
                  </Text>
                </Text>
              </Pressable>

              <Button
                theme={theme}
                variant="primary"
                label="Create account"
                onPress={onCreateAccount}
                style={{ width: "100%", opacity: canSubmit ? 1 : 0.75 }}
              />

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

              <Text style={[styles.footer, { color: theme.textMuted }]}>
                <Text style={{ color: theme.textMuted }}>
                  Already have an account?{" "}
                </Text>
                <Text
                  style={[styles.footerLink, { color: theme.text }]}
                  onPress={() => router.push("/login")}
                >
                  Login
                </Text>
              </Text>
            </View>
          </Card>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
