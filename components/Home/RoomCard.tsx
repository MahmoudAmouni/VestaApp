import { Theme } from "@/type";
import { Text, View } from "react-native";
import Button from "../Button";
import Card from "../Card";
import Pill from "../Pill";
import { roomStyles as styles } from "./RoomCard.styles";

export default function RoomCard(props: {
  theme: Theme;
  name: string;
  devices: number;
  onCount: number;
  offCount: number;
  onPressAllOn: () => void;
  onPressAllOff: () => void;
  onPressCard: () => void;
}) {
  const { theme } = props;
  return (
    <Card theme={theme} style={{ padding: 16 }}>
      <View style={styles.roomTop}>
        <Text style={[styles.roomName, { color: theme.text }]}>
          {props.name}
        </Text>
        <Pill theme={theme} text={`${props.devices} devices`} />
      </View>

      <Text style={[styles.roomMeta, { color: theme.textMuted }]}>
        {props.onCount} ON • {props.offCount} OFF
      </Text>

      <View style={styles.roomActions}>
        <Button
          theme={theme}
          variant="secondary"
          label="All ON"
          onPress={props.onPressAllOn}
        />
        <Button
          theme={theme}
          variant="secondary"
          label="All OFF"
          onPress={props.onPressAllOff}
        />
      </View>
    </Card>
  );
}
