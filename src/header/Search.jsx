import React, { useState } from "react";
import SearchImage from '../assets/icons/search.svg';
export default function Search() {
  const [showInput,setShowInput] = useState(false);
  return (
    <div className="flex items-center space-x-3 lg:space-x-8">
      {
        showInput && 
      <input type="text" />}
      <img onClick={() => setShowInput(true)} src={SearchImage} />
    </div>
  );
}
