import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    if (city.trim() !== "") {
      onSearch(city);
    }
  };

  return (
    <div className="w-full mb-8">
      <div className="flex items-center gap-4 bg-slate-900 border border-slate-700 rounded-xl p-4 shadow-lg">

        <input
          type="text"
          placeholder="Search city (Delhi, Mumbai...)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-400"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold"
        >
          Search
        </button>

      </div>
    </div>
  );
}

export default SearchBar;