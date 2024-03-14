import { View } from "react-native";
import { DefaultLayout } from "../../layout";
import { useFavoriteBreeds } from "../../contexts/FavoriteBreedsContext";
import { ListWithDescription } from "../../components/list";

function FavouritesScreen() {
  const { favoriteBreeds } = useFavoriteBreeds();

  return (
    <DefaultLayout>
      <View>
        <ListWithDescription data={favoriteBreeds} />
      </View>
    </DefaultLayout>
  );
}

export { FavouritesScreen };
