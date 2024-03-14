import { StyleSheet } from "react-native";
import { Button, Icon, IconElement, Layout } from "@ui-kitten/components";
import { CatBreed } from "../types/breed";
import { useNavigation } from "@react-navigation/native";

const BookIcon = (props): IconElement => (
  <Icon
    {...props}
    name={"book-open-outline"}
    style={[props.style, { width: 35, height: 35 }]}
  />
);

export const MoreButton = ({ breed }: { breed: CatBreed }) => {
  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate("Details", { breed });
  };

  return (
    <Layout style={styles.container} level="1">
      <Button
        style={styles.button}
        appearance="ghost"
        accessoryLeft={(props) => <BookIcon {...props} />}
        onPress={handlePress}
      ></Button>
    </Layout>
  );
};

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
