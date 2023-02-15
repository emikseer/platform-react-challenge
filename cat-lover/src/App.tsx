import React, { useEffect, useState } from "react";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faHeart, faShieldCat } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Outlet } from "react-router-dom";
import { faImages } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen">
        <header className="App-header">
          <div className="flex items-center justify-center py-10 font-extralight text-4xl">
            <FontAwesomeIcon icon={faCat} className="text-5xl mr-4" />
            <h1>
              <span className="font-bold">Cat</span>
              Lover
            </h1>
          </div>
          <div className="md:flex md:justify-center px-10">
            <div className="flex flex-col md:flex-row md:inline-flex justify-center rounded-lg border border-gray-100 bg-gray-100 p-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `inline-flex items-center gap-2 rounded-md px-6 py-4 text-sm focus:relative ${
                    isActive
                      ? "bg-white text-blue-500 shadow-sm"
                      : "text-gray-600"
                  }`
                }
              >
                <FontAwesomeIcon icon={faImages} />
                Images
              </NavLink>

              <NavLink
                to="breeds"
                className={({ isActive }) =>
                  `inline-flex items-center gap-2 rounded-md px-6 py-4 text-sm focus:relative ${
                    isActive
                      ? "bg-white text-blue-500 shadow-sm"
                      : "text-gray-600"
                  }`
                }
              >
                <FontAwesomeIcon icon={faShieldCat} />
                Breeds
              </NavLink>

              <NavLink
                to="favourites"
                className={({ isActive }) =>
                  `inline-flex items-center gap-2 rounded-md px-6 py-4 text-sm focus:relative ${
                    isActive
                      ? "bg-white text-blue-500 shadow-sm"
                      : "text-gray-600"
                  }`
                }
              >
                <FontAwesomeIcon icon={faHeart} />
                Favourites
              </NavLink>
            </div>
          </div>
        </header>
        <Outlet />
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
    </>
  );
}

export default App;
