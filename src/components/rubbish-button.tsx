import { StyleSheet } from "react-native";
import { Button, Icon, IconElement, Layout } from "@ui-kitten/components";
import { CatBreed } from "../types/breed";
import { useNavigation } from "@react-navigation/native";
import { useFavoriteBreeds } from "../contexts/FavoriteBreedsContext";

const BookIcon = (props): IconElement => (
  <Icon
    {...props}
    name={"trash-outline"}
    style={[props.style, { width: 32, height: 32 }]}
  />
);

export const RubbishButton = ({ breed }: { breed: CatBreed }) => {
  const { changeFavoriteBreeds, favoriteBreeds } = useFavoriteBreeds();

  const handlePress = () => {
    const updatedBreeds = favoriteBreeds.filter(
      (favBreed) => favBreed.breed.id !== breed.id
    );
    changeFavoriteBreeds(updatedBreeds);
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
