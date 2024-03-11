import { StyleSheet } from "react-native";
import { Button, Icon, IconElement, Layout } from "@ui-kitten/components";

const RestartIcon = (props): IconElement => (
  <Icon {...props} name="sync-outline" />
);

export const ButtonIcon = ({
  text,
  onPress,
}: {
  text: string;
  onPress: () => void;
}): React.ReactElement => (
  <Layout style={styles.container} level="1">
    <Button
      style={styles.button}
      status="primary"
      accessoryLeft={RestartIcon}
      onPress={onPress}
    >
      {text}
    </Button>
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    margin: 2,
  },
  indicator: {
    justifyContent: "center",
    alignItems: "center",
  },
});
