import { View } from "react-native";
import { getRandomBreed } from "../../utils/get-random-breed";
import { useEffect, useState } from "react";
import { Spinner } from "@ui-kitten/components";
import { getBreedImage } from "../../utils/fetch-image-for-breed";
import { CardAccessoriesShowcase } from "../../components/card";
import { ButtonIcon } from "../../components/button";
import { FavouriteButton } from "../../components/favourite-button";
import { DefaultLayout } from "../../layout";
import { CatBreed } from "../../types/breed";
import { fetchBreeds } from "../../utils/fetch-breeds";
import { retrieveBreeds } from "../../utils/retrieve-breeds";

export interface BreedImage {
  height: number;
  id: string;
  url: string;
  width: number;
}

function AllBreedsScreen() {
  const [breed, setBreed] = useState<CatBreed>();
  const [breeds, setBreeds] = useState<CatBreed[]>();
  const [breedsCategories, setBreedsCategories] = useState<
    { breed: string; key: string }[]
  >([]);

  const [breedImage, setBreedImage] = useState<BreedImage>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBreedsData = async () => {
      const breedsData = await fetchBreeds();
      const breedsCategories = retrieveBreeds(breedsData);

      setBreeds(breedsData);
      setBreedsCategories(breedsCategories);
    };

    fetchBreedsData();
  }, []);

  return (
    <>
      <DefaultLayout>
        {loading && <Spinner size="giant" />}
        {!loading && (
          <View className="w-11/12 h-5/6 flex justify-around flex-col items-center">
            <CardAccessoriesShowcase breedImage={breedImage} breed={breed} />
            <View className="flex flex-row justify-around items-center w-">
              <View>
                <FavouriteButton breed={breed} />
              </View>
            </View>
          </View>
        )}
      </DefaultLayout>
    </>
  );
}

export { AllBreedsScreen };
