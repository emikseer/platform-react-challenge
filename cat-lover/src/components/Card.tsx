import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faRemove } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

export const Card = ({
  item,
  title = "",
  removeFavourite = false,
  onRemoveItem = () => {},
}: any) => (
  <section className="bg-gray-800 rounded-2xl px-8 py-6 shadow-lg">
    <div className="mt-6 w-full flex justify-center">
      {title ? (
        <div className="w-full min-h-[4rem]">
          <h2 className="text-white font-bold text-2xl tracking-wide">
            {title}
          </h2>
        </div>
      ) : (
        <img
          src={item.url}
          className="rounded-full w-40 h-40 object-cover"
          alt="cat"
        />
      )}
    </div>

    <div className="mt-8">
      {removeFavourite ? (
        <button
          onClick={() => onRemoveItem(item.id)}
          className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-r from-red-600 to-red-400 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
        >
          <span className="relative text-sm font-semibold text-white">
            Remove <FontAwesomeIcon icon={faRemove} className="ml-2" />
          </span>
        </button>
      ) : (
        <Link
          className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-r from-blue-500 to-cyan-400 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
          to={`image/${item.id}`}
        >
          <span className="relative text-sm font-semibold text-white">
            Details <FontAwesomeIcon icon={faArrowRightLong} className="ml-2" />
          </span>
        </Link>
      )}
    </div>
  </section>
);
