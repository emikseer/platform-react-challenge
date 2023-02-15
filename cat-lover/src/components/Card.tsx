import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ cat }: any) => (
  <section className="bg-gray-800 rounded-2xl px-8 py-6 shadow-lg">
    <div className="mt-6 w-fit mx-auto">
      <img
        src={cat.url}
        className="rounded-full w-40 h-40 object-cover"
        alt="cat"
      />
    </div>

    <div className="mt-8">
      <Link
        className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-r from-blue-500 to-cyan-400 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
        to={`image/${cat.id}`}
      >
        <span className="relative text-sm font-semibold text-white">
          Details <FontAwesomeIcon icon={faArrowRightLong} className="ml-2" />
        </span>
      </Link>
    </div>
  </section>
);
