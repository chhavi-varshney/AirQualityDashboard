import { useState } from "react";

function SearchBar({ onSearch, darkMode }) {
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    if (city.trim() !== "") {
      onSearch(city);
    }
  };

  return (
    <div className="w-full mb-8">
      <div
        className={`flex items-center gap-4 rounded-xl p-4 shadow-lg border transition-all duration-300 ${
          darkMode
            ? "bg-slate-900 border-slate-700"
            : "bg-white border-gray-300"
        }`}
      >
        <input
          type="text"
          placeholder="Search city (Delhi, Mumbai...)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={`flex-1 bg-transparent outline-none ${
            darkMode
              ? "text-white placeholder:text-gray-400"
              : "text-gray-900 placeholder:text-gray-500"
          }`}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;