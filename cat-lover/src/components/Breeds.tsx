import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { catAPI } from "../api/catAPI";
import { Outlet } from "react-router-dom";
import { useCatsContext } from "../providers/CatsContextProvider";
import { Card } from "./Card";
import { Breed } from "../types/types";

function Breeds() {
  const { breedsData, setBreedsData } = useCatsContext();
  const [loading, setLoading] = useState(false);
  const fetchBreeds = () => {
    setLoading(true);

    catAPI.getBreeds().then(updateBreedsList);
  };

  const updateBreedsList = (data: Breed[]) => {
    setBreedsData([...breedsData, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    if (breedsData.length > 0) {
      return;
    }

    fetchBreeds();
  }, []);

  return (
    <>
      <section className="px-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-5 py-6 font-medium mt-10">
        {loading ? (
          <div className="flex justify-center py-36 mx-10">
            <FontAwesomeIcon
              icon={faCircleNotch}
              className="fa-spin text-5xl"
            />
          </div>
        ) : (
          breedsData.map((breed: Breed) => (
            <Card item={breed} title={breed.name} key={breed.id} />
          ))
        )}
      </section>
      <Outlet />
    </>
  );
}

export default Breeds;
