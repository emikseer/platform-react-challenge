import {
  faCat,
  faCircleNotch,
  faHeartCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCatsContext } from "../providers/CatsContextProvider";
import { catAPI } from "../api/catAPI";
import { Breed, Cat } from "../types/types";

export const BreedModal = () => {
  const { id } = useParams();
  const { breedsData } = useCatsContext();
  const [currentBreed, setCurrentBreed] = useState<Breed | null>(null);
  const [breedCats, setBreedCats] = useState<Cat[]>([]);
  const [isCatsLoading, setIsCatsLoading] = useState(false);

  useEffect(() => {
    const breed = breedsData.find((cat) => cat.id === id);
    if (breed) {
      setCurrentBreed(breed);
    }
  }, [breedsData]);

  useEffect(() => {
    if (currentBreed) {
      setIsCatsLoading(true);

      catAPI.getImagesFromBreed(currentBreed.id).then((cats) => {
        setBreedCats(cats);
        setIsCatsLoading(false);
      });
    }
  }, [currentBreed]);

  return currentBreed ? (
    <div className="fixed w-full h-full bg-black bg-opacity-70 top-0 left-0 z-10 flex items-center justify-center overflow-hidden">
      <div className="md:w-1/3 sm:w-full rounded-lg shadow-lg bg-white my-3">
        <div className="flex justify-between items-center border-b border-gray-100 px-5 py-4">
          <div>
            <i className="fa fa-exclamation-triangle text-orange-500"></i>
            <FontAwesomeIcon
              icon={faCat}
              className="text-orange-500 mr-3 text-2xl"
            />
            <span className="font-bold text-gray-700 text-lg">
              {currentBreed.name}
            </span>
          </div>
        </div>

        <div className="px-10 py-5 text-gray-600 flex justify-center">
          {isCatsLoading ? (
            <FontAwesomeIcon
              icon={faCircleNotch}
              className="fa-spin text-5xl"
            />
          ) : (
            breedCats.map((breedCat) => (
              <Link
                to={`/image/${breedCat.id}`}
                key={breedCat.id}
                className="w-1/3 mx-2"
              >
                <img
                  src={breedCat.url}
                  className="rounded-md h-40 object-cover object-top"
                  alt="cat"
                />
              </Link>
            ))
          )}
        </div>

        {currentBreed.breeds && currentBreed.breeds.length > 0 && (
          <div className="px-10 py-5 text-gray-600">
            Breeds:{" "}
            {currentBreed.breeds.map((breed: { [key: string]: any }) => (
              <span
                key={breed.id}
                className="px-4 py-2 text-base rounded-full text-white bg-cyan-500"
              >
                {breed.name}
              </span>
            ))}
          </div>
        )}

        <div className="px-5 py-4 flex justify-end">
          <Link
            to="/breeds"
            className="bg-orange-500 mr-1 rounded text-sm py-2 px-3 text-white hover:bg-orange-600 transition duration-150"
          >
            Close
          </Link>
        </div>
      </div>
    </div>
  ) : null;
};
