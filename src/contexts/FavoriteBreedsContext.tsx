import { createContext, useContext, useState } from "react";

const FavoriteBreedsContext = createContext(undefined);

export const useFavoriteBreeds = () => {
  const context = useContext(FavoriteBreedsContext);
  if (!context) {
    throw new Error(
      "useFavoriteBreeds must be used within a FavoriteBreedsProvider"
    );
  }
  return context;
};

export const FavoriteBreedsProvider = ({ children }) => {
  const [favoriteBreeds, setFavoriteBreeds] = useState<any>([]);

  const changeFavoriteBreeds = (breeds) => {
    setFavoriteBreeds(breeds);
  };

  return (
    <FavoriteBreedsContext.Provider
      value={{ favoriteBreeds, changeFavoriteBreeds }}
    >
      {children}
    </FavoriteBreedsContext.Provider>
  );
};
