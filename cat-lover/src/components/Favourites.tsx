import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { catAPI } from "../api/catAPI";
import { Outlet } from "react-router-dom";
import { useCatsContext } from "../providers/CatsContextProvider";
import { Card } from "./Card";
import { Cat } from "../types/types";

function Favourites() {
  const { favouriteCats, setFavouriteCats } = useCatsContext();
  const [loading, setLoading] = useState(false);
  const fetchFavouritesCats = () => {
    setLoading(true);

    catAPI.getFavouritesCats().then(updateCatsList);
  };

  const updateCatsList = (data: Cat[]) => {
    setFavouriteCats(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchFavouritesCats();
  }, []);

  const removeFavouriteCat = (id: string) => {
    setLoading(true);

    catAPI.removeCatFromFavourite(id).then(() => fetchFavouritesCats());
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center py-36 mx-10">
          <FontAwesomeIcon icon={faCircleNotch} className="fa-spin text-5xl" />
        </div>
      ) : (
        <section className="px-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-5 py-6 font-medium mt-10">
          {favouriteCats.map((cat: Cat) => (
            <Card
              item={cat}
              key={cat.id}
              removeFavourite={true}
              onRemoveItem={(id: string) => removeFavouriteCat(id)}
            />
          ))}
        </section>
      )}
      <Outlet />
    </>
  );
}

export default Favourites;
