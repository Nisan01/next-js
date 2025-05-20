"use client";

import { useDarkMode } from "@/context/ThemeContext";
import React from "react";
import { useState } from "react";

function UseStateDemo() {
  const [count, setCount] = useState("0");

const {darkMode, setDarkMode} = useDarkMode();





  function triggerCount() {
    const num = Number(count) || 0;
    setCount(String(num + 1));
  }

  const resetCount = () => {
    setCount("0");
  };

  return (
    <>
      <div className="container w-full h-screen bg-gray-300 dark:bg-black dark:text-white flex flex-col items-center justify-center gap-4">

   <button onClick={()=>{setDarkMode(!darkMode)}} className="bg-black p-4 absolute top-2  text-white cursor-pointer rounded dark:bg-white dark:text-black">
            {darkMode ?"☀️ Light":"🌙 Dark"}</button>

        <div className="wrapper flex  items-center justify-center mr-26 gap-3">
          <h1 className="text-3xl font-bold ">Count : </h1>
          <input
            type="number"
            className="bg-gray-100 p-2 rounded dark:text-black"
            value={count}
            onChange={(e) => {
              const val = e.target.value;
              // Allow empty string or only digits (so user can clear)
              if (val === "" || /^\d+$/.test(val)) {
                setCount(val);
              }
            }}
          />
        </div>

        <div className="btn-container flex gap-4 items-center justify-center">
          <button
            onClick={triggerCount}
            className="bg-black p-4 text-white cursor-pointer rounded dark:bg-white dark:text-black"
          >
            Count++
          </button>
          <button
            onClick={resetCount}
            className="bg-green-400 py-4 px-6 text-yellow-600  cursor-pointer rounded"
          >
            Reset
          </button>
        </div>
      </div>


    </>
  );
}

export default UseStateDemo;
