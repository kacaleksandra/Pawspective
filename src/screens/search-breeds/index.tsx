import { View } from "react-native";
import { getRandomBreed } from "../../utils/get-random-breed";
import { useEffect, useState } from "react";
import { CatBreed } from "../../types/breed";
import { Spinner } from "@ui-kitten/components";
import { getBreedImage } from "../../utils/fetch-image-for-breed";
import { CardAccessoriesShowcase } from "../../components/card";
import { ButtonIcon } from "../../components/button";
import { FavouriteButton } from "../../components/favourite-button";

function SearchBreedsScreen() {
  const [breed, setBreed] = useState<CatBreed>();
  const [breedImage, setBreedImage] = useState<any>();
  const [loading, setLoading] = useState(true);

  const fetchRandomBreed = async () => {
    setLoading(true);
    const randomBreed = await getRandomBreed();
    const breedImage = await getBreedImage(randomBreed.id);
    setBreedImage(breedImage[0]?.url);
    setBreed(randomBreed);

    setLoading(false);
  };

  useEffect(() => {
    fetchRandomBreed();
  }, []);

  return (
    <>
      {loading && <Spinner size="giant" />}
      {!loading && (
        <View className="w-11/12 h-5/6 flex justify-around flex-col items-center">
          <CardAccessoriesShowcase
            breedName={breed?.name}
            headerText={breed?.origin}
            contentText={breed?.description}
            breedImage={breedImage}
          />
          <View className="flex flex-row justify-around items-center w-4/5">
            <View>
              <ButtonIcon text="Find new cat" onPress={fetchRandomBreed} />
            </View>
            <View>
              <FavouriteButton onPress={() => {}} />
            </View>
          </View>
        </View>
      )}
    </>
  );
}

export { SearchBreedsScreen };
