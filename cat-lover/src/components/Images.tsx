import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTurnDown,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import { catAPI } from "../api/catAPI";
import { Outlet } from "react-router-dom";
import { useCatsContext } from "../providers/CatsContextProvider";
import { Card } from "./Card";
import { Cat } from "../types/types";

function Images() {
  const { catsData, setCatsData } = useCatsContext();
  const [loading, setLoading] = useState(false);
  const fetchMoreCats = () => {
    setLoading(true);

    catAPI.getCats().then(updateCatsList);
  };

  const updateCatsList = (data: Cat[]) => {
    setCatsData([...catsData, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    if (catsData.length > 0) {
      return;
    }

    fetchMoreCats();
  }, []);

  return (
    <>
      <section className="px-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-5 py-6 font-medium mt-10">
        {catsData.map((cat: Cat) => (
          <Card item={cat} key={cat.id} />
        ))}
      </section>
      <div className="flex justify-center py-36 mx-10">
        {loading ? (
          <FontAwesomeIcon icon={faCircleNotch} className="fa-spin text-5xl" />
        ) : (
          <button
            className="relative flex h-12 w-full items-center justify-center px-10 before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-r from-orange-500 to-amber-400 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            onClick={() => fetchMoreCats()}
          >
            <span className="relative font-semibold text-white">
              Load more
              <FontAwesomeIcon icon={faArrowTurnDown} className="ml-2" />
            </span>
          </button>
        )}
      </div>
      <Outlet />
    </>
  );
}

export default Images;
