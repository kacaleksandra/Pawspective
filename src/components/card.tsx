import { StyleSheet, View, ViewProps } from "react-native";
import { Card, Layout, Text } from "@ui-kitten/components";
import { Image } from "react-native";
import { MoreButton } from "./more-button";
import { Breed } from "@thatapicompany/thecatapi";
import { CatBreed } from "../types/breed";
import { BreedImage } from "../screens/search-breeds";

interface HeaderProps extends ViewProps {
  // breedName: string;
  // headerText: string;
  breed: CatBreed;
}

const Header = (props: HeaderProps): React.ReactElement => (
  <View {...props} className="flex flex-row justify-between items-center">
    <View style={styles.header}>
      <Text category="h5">{props.breed.name}</Text>
      <Text category="s1">{props.breed.origin}</Text>
    </View>
    <MoreButton breed={props.breed} />
  </View>
);

interface CardAccessoriesProps extends ViewProps {
  breed: CatBreed;
  breedImage: BreedImage;
}

export function CardAccessoriesShowcase(
  props: CardAccessoriesProps
): React.ReactElement {
  return (
    <>
      <Layout style={styles.topContainer} level="1">
        <Card
          style={styles.card}
          header={() => <Header {...props} breed={props.breed} />}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: props.breedImage.url }}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.text} category="p1">
            {props.breed.description}
          </Text>
        </Card>
      </Layout>
    </>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
  },
  card: {
    flex: 1,
    margin: 2,
    marginTop: 10,
  },
  header: {
    padding: 20,
    paddingLeft: 35,
  },
  text: {
    padding: 5,
    marginTop: 10,
  },
  image: {
    width: 289,
    height: 250,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
