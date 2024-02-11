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
          className=" m-2 bg-gray-400 text-purple-900 font-bold p-1 text-xl"
          onChange={handleSearchInput}
        />
      )}
      <img
        onClick={() => {
          setShowInput((showInput) => !showInput);
        }}
        src={SearchImage}
      />
    </div>
  );
}
