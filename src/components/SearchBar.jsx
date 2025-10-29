import React, { useState } from "react";
import { TbMapPinSearch } from "react-icons/tb";

export default function SearchBar({ onSearch }) {
  const [place, setPlace] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (place.trim()) {
      onSearch(place);
    }
    setPlace("");
  };

  const handleChange = (e) => {
    setPlace(e.target.value);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center mt-2 gap-4">
      <div className="flex items-center w-3/4 md:w-1/3 justify-between mx-auto px-4 py-2 bg-white/5 rounded-full shadow-md border-2 border-white/30 mt-20">
        <input
          type="text"
          placeholder="Search your location"
          value={place}
          onChange={handleChange}
          onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
          className="grow text-lg outline-none bg-transparent text-white/80 placeholder-gray-400"
        />
        <button 
          onClick={handleSubmit}
          className="hover:cursor-pointer"
        >
          <TbMapPinSearch
            size={32}
            className="text-gray-500/60 hover:text-gray-500 transition"
          />
        </button>
      </div>
    </div>
  );
}