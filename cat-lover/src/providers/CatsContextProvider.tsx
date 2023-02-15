import React, { createContext, useContext, useState } from "react";

export type Cat = {
  id: string;
  breeds: { [key: string]: any }[];
  url: string;
  width: number;
  height: number;
};

const CatsContext = createContext<{
  catsData: Cat[];
  setCatsData: React.Dispatch<React.SetStateAction<Cat[]>>;
  favouritesCats: Cat[];
  setFavouritesCats: React.Dispatch<React.SetStateAction<Cat[]>>;
  removeCatFromFavourites: (catId: string) => void;
}>({
  catsData: [],
  setCatsData: () => {},
  favouritesCats: [],
  setFavouritesCats: () => {},
  removeCatFromFavourites: () => {},
});

export const useCatsContext = () => {
  return useContext(CatsContext);
};

export const CatsContextProvider = ({ children }: React.PropsWithChildren) => {
  const [catsData, setCatsData] = useState<Cat[]>([]);
  const [favouritesCats, setFavouritesCats] = useState<Cat[]>([]);

  const removeCatFromFavourites = (catID: string) => {
    setFavouritesCats(favouritesCats.filter((cat) => cat.id !== catID));
  };

  return (
    <CatsContext.Provider
      value={{
        catsData,
        setCatsData,
        favouritesCats,
        setFavouritesCats,
        removeCatFromFavourites,
      }}
    >
      {children}
    </CatsContext.Provider>
  );
};
