import React from 'react';

const SearchField = () => {
  return (
    <div className="flex items-center border border-slate-700 rounded-md overflow-hidden h-full">
      <input
        type="text"
        placeholder="Search..."
        className="py-2 px-4 w-64 focus:outline-none"
      />
    </div>
  );
};

export default SearchField;