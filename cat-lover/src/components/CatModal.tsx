import { faCat, faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCatsContext } from "../providers/CatsContextProvider";
import { catAPI } from "../api/catAPI";
import { Breed } from "../types/types";

export const CatModal = () => {
  const { id } = useParams();
  const { catsData } = useCatsContext();
  let cat = catsData.find((cat) => cat.id === id);
  const [currentCat, setCurrentCat] = useState(cat);
  const [favouriteLoading, setFavouriteLoading] = useState(false);

  if (!currentCat && id) {
    catAPI.getCat(id).then((selectedCat) => setCurrentCat(selectedCat));
  }

  const addToFavourite = (id: string) => {
    setFavouriteLoading(true);
    catAPI.addCatToFavourite(id).then(() => setFavouriteLoading(false));
  };

  return currentCat ? (
    <div className="fixed w-full h-full bg-black bg-opacity-70 top-0 left-0 z-10 flex items-center justify-center overflow-hidden">
      <div className="md:w-1/3 sm:w-full rounded-lg shadow-lg bg-white my-3">
        <div className="flex justify-between items-center border-b border-gray-100 px-5 py-4">
          <div>
            <i className="fa fa-exclamation-triangle text-orange-500"></i>
            <FontAwesomeIcon
              icon={faCat}
              className="text-orange-500 mr-3 text-2xl"
            />
            <span className="font-bold text-gray-700 text-lg">Cat details</span>
          </div>
          <div>
            <button
              className="text-sm items-center flex rounded-md bg-gray-100 p-2 text-gray-500 font-bold"
              onClick={() => addToFavourite(currentCat.id)}
            >
              <FontAwesomeIcon
                icon={faHeartCirclePlus}
                className={`text-red-600 text-2xl mr-2${
                  favouriteLoading ? " fa-spin" : ""
                }`}
              />
              Add to favourite
            </button>
          </div>
        </div>

        <div className="px-10 py-5 text-gray-600">
          <img
            src={currentCat.url}
            className="rounded-md w-full h-80 object-cover object-top"
            alt="cat"
          />
        </div>

        {currentCat.breeds && currentCat.breeds.length > 0 && (
          <div className="px-10 py-5 text-gray-600">
            Breeds:{" "}
            {currentCat.breeds.map((breed: Breed) => (
              <Link
                to={`/breeds/image/${breed.id}`}
                key={breed.id}
                className="px-4 py-2 text-base rounded-full text-white bg-cyan-500"
              >
                {breed.name}
              </Link>
            ))}
          </div>
        )}

        <div className="px-5 py-4 flex justify-end">
          <Link
            to="/"
            className="bg-orange-500 mr-1 rounded text-sm py-2 px-3 text-white hover:bg-orange-600 transition duration-150"
          >
            Close
          </Link>
        </div>
      </div>
    </div>
  ) : null;
};
