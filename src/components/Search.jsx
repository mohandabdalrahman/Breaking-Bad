import React, { useState } from 'react';

const Search = ({ qetQuery }) => {
  const [searchChar, setSearchChar] = useState('');
  const handleChange = (e) => {
    setSearchChar(e.target.value);
    qetQuery(searchChar);
  };
  return (
    <div className="search">
      <form>
        <input
          type="text"
          placeholder="Search Characters"
          autoFocus
          onChange={(e) => handleChange(e)}
          value={searchChar}
        />
      </form>
    </div>
  );
};

export default Search;
