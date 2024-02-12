import React, { useContext, useState } from "react";
import SearchImage from "../assets/icons/search.svg";
import { debouncedSearch } from "../utils";
import newsContext from "../contexts/newsContext";


export default function Search() {

  const [showInput, setShowInput] = useState(false);
  const {newses, setNewses} = useContext(newsContext);

  const handleSearchInput = async (event) => {
    const data = await debouncedSearch(event.target.value);
    setNewses( data)
  };


  return (
    <div className="flex items-center space-x-1 lg:space-x-1">
      {showInput && (
        <input
          type="text"
          placeholder="Search item....."
          className=" m-2 bg-white text-purple-900 font-bold p-1 text-xl"
          onChange={handleSearchInput}
        />
      )}
      <img
      className=" m-4  hover:bg-white rounded-xl cursor-pointer p-2 transition-transform"
        onClick={() => {
          setShowInput((showInput) => !showInput);
        }}
        src={SearchImage}
      />
    </div>
  );
}
