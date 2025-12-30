import { Theme } from "@/type";
import { Platform, StyleSheet, View } from "react-native";

export default function Card(props: {
  theme: Theme;
  children: React.ReactNode;
  style?: any;
}) {
  const { theme } = props;
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.surface,
          borderColor: theme.border,
          shadowColor: theme.shadow1,
        },
        props.style,
      ]}
    >
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 18,
    padding: 18,
    ...Platform.select({
      ios: {
        shadowOpacity: 0.25,
        shadowRadius: 18,
        shadowOffset: { width: 0, height: 10 },
      },
      android: {
        elevation: 2,
      },
      default: {},
    }),
  },
});
