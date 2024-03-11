import { Breed, TheCatAPI } from "@thatapicompany/thecatapi";

interface Image {
  height: number;
  id: string;
  url: string;
  width: number;
}

const theCatAPI = new TheCatAPI(process.env.API_KEY);

async function getBreedImage(id: string): Promise<Image[]> {
  const images = await theCatAPI.images.searchImages({
    limit: 1,
    breeds: [id as Breed],
  });
  return images;
}

export { getBreedImage };
