import { StyleSheet, View, ViewProps } from "react-native";
import { Card, Layout, Text } from "@ui-kitten/components";
import { Image } from "react-native";
import { BreedImage } from "../screens/search-breeds";

interface HeaderProps extends ViewProps {
  breedName: string;
  headerText: string;
}

const Header = (props: HeaderProps): React.ReactElement => (
  <View {...props} style={styles.header}>
    <Text category="h5">{props.breedName}</Text>
    <Text category="s1">{props.headerText}</Text>
  </View>
);

interface CardAccessoriesProps extends ViewProps {
  headerText: string;
  contentText: string;
  breedName: string;
  breedImage: BreedImage;
}

export const CardAccessoriesShowcase = (
  props: CardAccessoriesProps
): React.ReactElement => (
  <>
    <Layout style={styles.topContainer} level="1">
      <Card style={styles.card} header={() => <Header {...props} />}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: props.breedImage.url }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.text} category="p1">
          {props.contentText}
        </Text>
      </Card>
    </Layout>
  </>
);

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
