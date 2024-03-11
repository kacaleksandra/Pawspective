import { fetchBreeds } from "./fetch-breeds";

async function getRandomBreed() {
  try {
    const breeds = await fetchBreeds();

    if (breeds.length === 0) {
      throw new Error("No breeds available.");
    }

    const randomIndex = Math.floor(Math.random() * breeds.length);
    const randomBreed = breeds[randomIndex];
    return randomBreed;
  } catch (error) {
    console.error("Error fetching breeds:", error.message);
    throw error;
  }
}

export { getRandomBreed };
