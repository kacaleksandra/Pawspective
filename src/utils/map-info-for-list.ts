import { CatBreed } from "../types/breed";
import { namesOfProperties } from "./names-of-properties";

function checkDescription(description: string | number): string {
  const descriptionMapping: Record<string | number, string> = {
    "": "No information available",
    0: "No",
    1: "Yes",
  };

  return descriptionMapping[description] || String(description);
}

function mapInfoForList(breedObject: CatBreed) {
  const breedArray = Object.entries(breedObject);

  const breedArrayWithFriendlyNames = breedArray.map((item) => {
    return {
      title: namesOfProperties[item[0]],
      description: checkDescription(item[1]),
    };
  });
  const newArray = breedArrayWithFriendlyNames.slice(1);

  return newArray;
}

export { mapInfoForList };
