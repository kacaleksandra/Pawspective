import { ListRenderItemInfo, StyleSheet, View } from "react-native";
import { Card, List, Text } from "@ui-kitten/components";
import { useState, useEffect } from "react";
import { useFavoriteBreeds } from "../contexts/FavoriteBreedsContext";

export const ListWithDescription = (data): React.ReactElement => {
  const { favoriteBreeds } = useFavoriteBreeds();
  const [breeds, setBreeds] = useState(data.data);

  useEffect(() => {
    setBreeds(data.data);
  }, [favoriteBreeds]);

  function renderItemHeader(
    headerProps,
    info: ListRenderItemInfo<any>
  ): React.ReactElement {
    return (
      <View {...headerProps}>
        <Text category="h6">{info.item.breed.name}</Text>
      </View>
    );
  }

  const renderItemFooter = (footerProps, info): React.ReactElement => (
    <Text {...footerProps}>{info.item.breed.origin}</Text>
  );

  const renderItem = (info): React.ReactElement => (
    <Card
      style={styles.item}
      status="basic"
      header={(headerProps) => renderItemHeader(headerProps, info)}
      footer={(footerProps) => renderItemFooter(footerProps, info)}
    >
      <Text>{info.item.breed.description}</Text>
    </Card>
  );

  return (
    <>
      {breeds.length !== 0 ? (
        <List
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          data={breeds}
          renderItem={renderItem}
        />
      ) : (
        <Text>No favourite breeds</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: "100%",
    paddingTop: 50,
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,
  },
});
