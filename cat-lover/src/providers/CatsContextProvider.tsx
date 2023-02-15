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
}>({ catsData: [], setCatsData: () => {} });

export const useCatsContext = () => {
  return useContext(CatsContext);
};

export const CatsContextProvider = ({ children }: React.PropsWithChildren) => {
  const [catsData, setCatsData] = useState<Cat[]>([]);
  const [favouritesCats, setFavouritesCats] = useState<Cat[]>([]);

  const removeFromFavourites = (catID: string) => {
    setFavouritesCats(favouritesCats.filter((cat) => cat.id !== catID));
  };

  return (
    <CatsContext.Provider value={{ catsData, setCatsData }}>
      {children}
    </CatsContext.Provider>
  );
};
