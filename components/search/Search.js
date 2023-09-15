import React, { useEffect, useState } from "react";

const Search = ({ onSearch, data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTerm, setSelectedTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    if (newSearchTerm.length >= 3) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    if (searchTerm == '') {
      handleSearch();
    }
  }, [searchTerm])

  const handleSearch = () => {
    setSelectedTerm(searchTerm);
    if (searchTerm === '') {
      onSearch('');
    } else {
      onSearch(searchTerm);
    }
  };

  const handleDropdownSelect = (selectedItem) => {
    setSelectedTerm(selectedItem);
    setSearchTerm(selectedItem);
    setShowDropdown(false);
  };

  return (
    <div>
      <div className="inline-flex px-2 focus:outline-none">
        <input
          className="rounded p-[5.7px] border border-spacing-1 border-slate-400 mr-2"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="bg-gray-300 p-[5.7px] rounded" onClick={handleSearch}>Search</button>
      </div>
        {showDropdown && (
          <div className="dropdown px-5 absolute  bg-slate-200 rounded mt-1">
            {data
              .filter((item) =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((item) => (
                <div
                  key={item.id}
                  className="w-full dropdown-item cursor-pointer text-xs hover:bg-slate-400 p-2 my-2 border border-spacing-1 border-slate-500 rounded"
                  onClick={() => handleDropdownSelect(item.title)}
                >
                  {item.title}
                </div>
              ))}
          </div>
        )}
    </div>
  );
};

export default Search;
