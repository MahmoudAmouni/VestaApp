import { Theme } from "@/type";
import { Text, View } from "react-native";
import Card from "./Card";
import { heroCardStyles as styles } from "./HeroCard.styles";
import KPI from "./KPI";

export default function HeroCard({ theme }: { theme: Theme }) {
  return (
    <Card
      theme={theme}
      style={[
        styles.heroCard,
        {
          backgroundColor: theme.surface,
        },
      ]}
    >
      <View style={styles.heroTop}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.heroTitle, { color: theme.text }]}>
            Calm & ready.
          </Text>
          <Text style={[styles.heroSub, { color: theme.textMuted }]}>
            A quick snapshot of your space — lights, pantry, and what’s coming
            up.
          </Text>
        </View>
      </View>

      <View style={styles.kpis}>
        <KPI
          theme={theme}
          label="Devices ON"
          value="3"
          hint="Kitchen + Living"
        />
        <KPI theme={theme} label="Offline" value="0" hint="All online" />
        <KPI theme={theme} label="Expiring soon" value="2" hint="Next 48hr" />
        <KPI
          theme={theme}
          label="Saved Recipes"
          value="12"
          hint="Start Cooking!"
        />
      </View>
    </Card>
  );
}
