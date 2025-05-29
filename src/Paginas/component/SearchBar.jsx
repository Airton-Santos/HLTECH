import React from 'react';

function SearchBar({ busca, setBusca }) {
  return (
    <input
      type="text"
      placeholder="Buscar peça..."
      value={busca}
      onChange={(e) => setBusca(e.target.value)}
    />
  );
}

export default SearchBar;
