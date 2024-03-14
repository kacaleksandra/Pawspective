import { View } from "react-native";
import { DefaultLayout } from "../../layout";
import { Card, Divider, List, ListItem, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { mapInfoForList } from "../../utils/map-info-for-list";
import { useEffect, useState } from "react";

interface IListItem {
  title: string;
  description: string;
}

function DetailsScreen({ route }) {
  const [breedInfo, setBreedInfo] = useState<any[]>();

  useEffect(() => {
    const { breed } = route.params;
    setBreedInfo(mapInfoForList(breed));
  }, []);

  function ListDividersShowcase(): React.ReactElement {
    function renderItem({ item }: { item: IListItem }): React.ReactElement {
      return (
        <>
          <ListItem
            title={`${item.title}`}
            description={`${item.description}`}
          />
        </>
      );
    }

    return (
      <List
        style={styles.container}
        data={breedInfo}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
      />
    );
  }

  return (
    <DefaultLayout>
      <View className="w-full h-full">
        <ListDividersShowcase />
      </View>
    </DefaultLayout>
  );
}

const styles = StyleSheet.create({
  card: {
    height: "100%",
    width: "100%",
  },
  container: {
    height: "100%",
    width: "100%",
  },
});

export { DetailsScreen };
