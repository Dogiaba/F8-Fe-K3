"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/app/assets/darkMode.module.scss";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  function onClick(e) {
    e.stopPropagation();
    e.preventDefault();
    const mode = document.querySelector(".dark-light");
    async function removeHidden(e) {
        e.stopPropagation();
        const mode = document.querySelector(".dark-light");
        await mode.querySelector("ul").classList.add("hidden");
        window.removeEventListener("click", removeHidden);
    }
    mode.querySelector("ul").classList.toggle("hidden");
    if (!mode.querySelector("ul").classList.contains("hidden")) {
        window.addEventListener("click", removeHidden);
    }
}
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <>
      <button className="dark-light" onClick={onClick}>
        {theme === "dark" ?(
            <FontAwesomeIcon icon={faMoon} />
        ): (
          <FontAwesomeIcon icon={faSun} />
        )}

        <ul className="hidden absolute z-50 top-full right-0 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-white mt-0 ">
          <li className="py-1 px-2 flex items-center cursor-pointer dark:hover:bg-neutral-500  hover:bg-gray-100  "
            onClick={(e) => {
              setTheme("light");
            }}
          >
            Light
          </li>

          <li className="py-1 px-2 flex items-center cursor-pointer dark:hover:bg-neutral-500  hover:bg-gray-100  "
            onClick={(e) => {
              setTheme("dark");
            }}
          >
            Dark
          </li>

          <li className="py-1 px-2 flex items-center cursor-pointer dark:hover:bg-neutral-500  hover:bg-gray-100 "
            onClick={(e) => {
              setTheme("system");
            }}
          >
            System
          </li>
        </ul>
      </button>
    </>
  );
};
