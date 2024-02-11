import React, { useState } from "react";
import useNewsQuery from "../hooks/useNewsQuery";

export default function Category() {

  const [category, setCategory] = useState(null);
  const newses = useNewsQuery(category);

  
  const handleNewsQuery = (event) => {
    setCategory(event.target.name);
  };

  return (
    <div className="container mx-auto mt-6">
      <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
        <li>
          <button name="general" onClick={handleNewsQuery}>
            General
          </button>
        </li>
        <li>
          <button name="science" onClick={handleNewsQuery}>
            Science
          </button>
        </li>
        <li>
          <button name="business" onClick={handleNewsQuery}>
            Business
          </button>
        </li>
        <li>
          <button name="entertainment" onClick={handleNewsQuery}>
            Entertainment
          </button>
        </li>
        <li>
          <button name="health" onClick={handleNewsQuery}>
            Health
          </button>
        </li>
        <li>
          <button name="sports" onClick={handleNewsQuery}>
            Sports
          </button>
        </li>
      </ul>
    </div>
  );
}
