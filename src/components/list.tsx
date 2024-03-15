import { ListRenderItemInfo, StyleSheet, View } from "react-native";
import { Card, List, Text } from "@ui-kitten/components";
import { useState, useEffect } from "react";
import { useFavoriteBreeds } from "../contexts/FavoriteBreedsContext";
import { MoreButton } from "./more-button";
import { RubbishButton } from "./rubbish-button";

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
        <View className="flex flex-row items-center ">
          <View className="w-1/2">
            <Text category="h6">{info.item.breed.name}</Text>
          </View>
          <View className="flex flex-row-reverse ">
            <RubbishButton breed={info.item.breed} />
            <MoreButton breed={info.item.breed} />
          </View>
        </View>
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
        <View className="mt-10">
          <List
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            data={breeds}
            renderItem={renderItem}
          />
        </View>
      ) : (
        <Text>No favourite breeds</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  contentContainer: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  item: {
    marginVertical: 4,
  },
});
