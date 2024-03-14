import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Icon, IconElement, Layout } from "@ui-kitten/components";
import { useFavoriteBreeds } from "../contexts/FavoriteBreedsContext";

const HeartIcon = (props): IconElement => (
  <Icon
    {...props}
    fill="pink"
    name={props.filled ? "heart" : "heart-outline"}
    style={[props.style, { width: 50, height: 50 }]}
  />
);

export const FavouriteButton = (breed) => {
  const { changeFavoriteBreeds, favoriteBreeds } = useFavoriteBreeds();
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    if (
      favoriteBreeds.some((favBreed) => favBreed.breed.id === breed.breed.id)
    ) {
      setIsFavourite(true);
    } else {
      setIsFavourite(false);
    }
  }, [breed]);

  const handlePress = () => {
    if (isFavourite) {
      const updatedBreeds = favoriteBreeds.filter(
        (favBreed) => favBreed.breed.id !== breed.breed.id
      );
      changeFavoriteBreeds(updatedBreeds);
    } else {
      changeFavoriteBreeds([...favoriteBreeds, breed]);
    }
  };

  return (
    <Layout style={styles.container} level="1">
      <Button
        style={styles.button}
        appearance="ghost"
        accessoryLeft={(props) => <HeartIcon {...props} filled={isFavourite} />}
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
