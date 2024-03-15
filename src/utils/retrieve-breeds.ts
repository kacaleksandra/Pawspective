import { CatBreed } from "../types/breed";

function retrieveBreeds(breedsObj: CatBreed[]) {
  const breedsCategories = breedsObj.map((breed) => {
    return {
      breed: breed.name,
      key: breed.id,
    };
  });

  console.log(breedsCategories);
  return breedsCategories;
}

export { retrieveBreeds };
