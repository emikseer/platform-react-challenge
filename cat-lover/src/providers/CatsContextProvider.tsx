import React, { createContext, useContext, useState } from "react";
import { Breed, Cat } from "../types/types";

const CatsContext = createContext<{
  catsData: Cat[];
  setCatsData: React.Dispatch<React.SetStateAction<Cat[]>>;
  favouriteCats: Cat[];
  setFavouriteCats: React.Dispatch<React.SetStateAction<Cat[]>>;
  breedsData: Breed[];
  setBreedsData: React.Dispatch<React.SetStateAction<Breed[]>>;
}>({
  catsData: [],
  setCatsData: () => {},
  favouriteCats: [],
  setFavouriteCats: () => {},
  breedsData: [],
  setBreedsData: () => {},
});

export const useCatsContext = () => {
  return useContext(CatsContext);
};

export const CatsContextProvider = ({ children }: React.PropsWithChildren) => {
  const [catsData, setCatsData] = useState<Cat[]>([]);
  const [favouriteCats, setFavouriteCats] = useState<Cat[]>([]);
  const [breedsData, setBreedsData] = useState<Breed[]>([]);

  return (
    <CatsContext.Provider
      value={{
        catsData,
        setCatsData,
        breedsData,
        setBreedsData,
        favouriteCats,
        setFavouriteCats,
      }}
    >
      {children}
    </CatsContext.Provider>
  );
};
