import { StyleSheet } from "react-native";
import { Button, Icon, IconElement, Layout } from "@ui-kitten/components";

const RestartIcon = (props): IconElement => (
  <Icon
    {...props}
    fill="pink"
    name="heart"
    style={[props.style, { width: 50, height: 50 }]}
  />
);

export const FavouriteButton = ({
  onPress,
}: {
  onPress: () => void;
}): React.ReactElement => (
  <Layout style={styles.container} level="1">
    <Button
      style={styles.button}
      appearance="ghost"
      accessoryLeft={RestartIcon}
      onPress={onPress}
    ></Button>
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
