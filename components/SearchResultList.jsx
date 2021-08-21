import React from 'react';
import SearchResult from './SearchResult';

export default function SearchResultList({ results }) {
  return (
    <div className="w-full">
      {results.map((result) => (
        <SearchResult result={result} key={result} />
      ))}
    </div>
  );
}
