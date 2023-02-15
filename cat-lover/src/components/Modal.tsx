import {
  faCat,
  faCircleNotch,
  faExclamationTriangle,
  faHeartCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCatsContext } from "../providers/CatsContextProvider";

export const Modal = () => {
  const { id } = useParams();
  const { catsData } = useCatsContext();
  const cat = catsData.find((cat) => cat.id === id);

  return cat ? (
    <div className="fixed w-full h-full bg-black bg-opacity-70 top-0 left-0 z-10 flex items-center justify-center overflow-hidden">
      <div className="md:w-1/3 sm:w-full rounded-lg shadow-lg bg-white my-3">
        <div className="flex justify-between items-center border-b border-gray-100 px-5 py-4">
          <div>
            <i className="fa fa-exclamation-triangle text-orange-500"></i>
            <FontAwesomeIcon icon={faCat} className="text-orange-500 mr-3" />
            <span className="font-bold text-gray-700 text-lg">Cat details</span>
          </div>
          <div>
            <button className="text-sm items-center flex rounded-md bg-gray-100 p-2">
              <FontAwesomeIcon
                icon={faHeartCirclePlus}
                className="text-red-600 text-2xl mr-2"
              />
              Add to favourite
            </button>
          </div>
        </div>

        <div className="px-10 py-5 text-gray-600">
          <img
            src={cat.url}
            className="rounded-md w-full h-80 object-cover object-top"
            alt="cat"
          />
        </div>

        {cat.breeds && cat.breeds.length > 0 && (
          <div className="px-10 py-5 text-gray-600">
            Breeds:{" "}
            {cat.breeds.map((breed: { [key: string]: any }) => (
              <span className="px-4 py-2 text-base rounded-full text-white bg-cyan-500">
                {breed.name}
              </span>
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
