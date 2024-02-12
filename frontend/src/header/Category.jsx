import React, { useState } from "react";
import useNewsQuery from "../hooks/useNewsQuery";

export default function Category() {
  const [category, setCategory] = useState(null);
  const newses = useNewsQuery(category);

  const handleNewsQuery = (event) => {
    setCategory(event.target.name);
  };

  return (
    <div className="container mx-auto">
      <ul className="flex flex-wrap items-center justify-center gap-1 text-xs font-semibold lg:text-base">
        <li className=" hover:bg-white cursor-pointer rounded-lg p-2 transition-transform">
          <button name="general" onClick={handleNewsQuery}>
            General
          </button>
        </li>
        <li className=" hover:bg-white cursor-pointer rounded-lg p-2 transition-transform">
          <button name="science" onClick={handleNewsQuery}>
            Science
          </button>
        </li>
        <li className=" hover:bg-white cursor-pointer rounded-lg p-2 transition-transform">
          <button name="business" onClick={handleNewsQuery}>
            Business
          </button>
        </li>
        <li className=" hover:bg-white cursor-pointer rounded-lg p-2 transition-transform">
          <button name="entertainment" onClick={handleNewsQuery}>
            Entertainment
          </button>
        </li>
        <li className=" hover:bg-white cursor-pointer rounded-lg p-2 transition-transform">
          <button name="health" onClick={handleNewsQuery}>
            Health
          </button>
        </li>
        <li className=" hover:bg-white cursor-pointer rounded-lg p-2 transition-transform">
          <button name="sports" onClick={handleNewsQuery}>
            Sports
          </button>
        </li>
      </ul>
    </div>
  );
}
