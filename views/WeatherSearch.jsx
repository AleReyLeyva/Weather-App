import React, { useState } from 'react';
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';
import CrossLink from '../components/CrossLink';
import ResultsList from '../components/SearchResultList';

export default function WeatherSearch() {
  const [searchResults, setSearchResults] = useState([]);
  const [inputSearch, setInputSearch] = useState('');

  const handleSearch = () => {
    if (inputSearch !== '') {
      axios.get(`/api/query/${inputSearch}`).then(({ data: results }) => {
        setSearchResults(results);
      });
    }
  };

  return (
    <div className="secondary-container items-start px-6 py-8 flex-col min-w-min">
      <CrossLink to="/" size={8} />
      <div className="flex justify-between w-11/12 mx-auto my-8">
        <div className="border-2 border-gray-300 w-2/3 flex h-12 items-center flex-1 ">
          <SearchIcon className="mx-2" />
          <input
            type="text"
            placeholder="search location"
            className="bg-transparent text-gray-300 min-w-min w-full outline-none"
            value={inputSearch}
            onChange={(e) => {
              setInputSearch(e.target.value);
              handleSearch();
            }}
          />
        </div>
        <button
          className="w-1/4 bg-blue font-semibold ml-3"
          type="submit"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <ResultsList results={searchResults} />
    </div>
  );
}
