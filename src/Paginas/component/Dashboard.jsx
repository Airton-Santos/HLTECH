import React, { useState } from 'react';
import SearchBar from './SearchBar';
import StockList from './StockList';
import './Dashboard.css'

const stockData = [
  { id: 1, nome: 'Placa de Vídeo RTX 3060', preco: 'R$ 2.500' },
  { id: 2, nome: 'Processador Ryzen 5 5600X', preco: 'R$ 1.100' },
  { id: 3, nome: 'SSD 1TB NVMe', preco: 'R$ 450' },
  // mais peças aqui
];

function Dashboard() {
  const [busca, setBusca] = useState('');

  const filtrados = stockData.filter(item =>
    item.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="home-container">
      <h2>Estoque de Peças</h2>
      <SearchBar busca={busca} setBusca={setBusca} />
      <StockList items={filtrados} />
    </div>
  );
}

export default Dashboard;
