import React, { useEffect, useState } from "react";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faArrowTurnDown,
  faCat,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import { Card } from "./components/Card";
import { catAPI } from "./components/api/catAPI";
import { Outlet } from "react-router-dom";
import { Cat, useCatsContext } from "./providers/CatsContextProvider";

function App() {
  const { catsData, setCatsData } = useCatsContext();
  const [loading, setLoading] = useState(true);
  const fetchMoreCats = () => {
    setLoading(true);

    catAPI.getRandomCats().then(updateCatsList);
  };

  const updateCatsList = (data: any[]) => {
    setCatsData([...catsData, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    fetchMoreCats();
  }, []);

  return (
    <>
      <div className="App bg-gray-900 text-white min-h-screen">
        <header className="App-header">
          <div className="flex items-center justify-center py-10 font-extralight text-4xl">
            <FontAwesomeIcon icon={faCat} className="text-5xl mr-4" />
            <h1>
              <span className="font-bold">Cat</span>
              Lover
            </h1>
          </div>
        </header>
        <section className="bg-gray-900 px-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-5 py-6 font-medium mt-10">
          {catsData.map((cat: Cat) => (
            <Card cat={cat} key={cat.id} />
          ))}
        </section>
        <div className="flex justify-center my-36 mx-10">
          {loading ? (
            <FontAwesomeIcon
              icon={faCircleNotch}
              className="fa-spin text-5xl"
            />
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
        <svg width="0" height="0">
          <linearGradient id="lgrad" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#FCCF31FF", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#F55555FF", stopOpacity: 1 }}
            />
          </linearGradient>
        </svg>
      </div>
      <Outlet />
    </>
  );
}

export default App;
