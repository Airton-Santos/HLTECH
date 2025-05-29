import React, { useState } from 'react';
import SearchBar from './SearchBar';
import StockList from './StockList';
import './Dashboard.css'

const stockData = [
  {
    id: 1,
    nome: 'Placa de Vídeo RTX 3060',
    preco: 'R$ 2.500',
    especificacao: '12GB GDDR6, Ray Tracing, HDMI/DP',
    imagem: 'https://img.terabyteshop.com.br/produto/g/placa-de-video-galax-geforce-rtx-3060-1-click-oc-12gb-gddr6-192bit-36nol7md1voc_117465.png',
  },
  {
    id: 2,
    nome: 'Processador Ryzen 5 5600X',
    preco: 'R$ 1.100',
    especificacao: '6 núcleos, 12 threads, até 4.6GHz',
    imagem: 'https://m.media-amazon.com/images/I/51ld6RR8IrL.__AC_SX300_SY300_QL70_ML2_.jpg',
  },
  {
    id: 3,
    nome: 'SSD 1TB NVMe',
    preco: 'R$ 400',
    especificacao: 'Leitura 3500MB/s, Gravação 3000MB/s',
    imagem: 'https://img.terabyteshop.com.br/produto/g/ssd-adata-spectrix-s20g-rgb-1tb-m2-2280-nvme-leitura-2500mbs-e-gravacao-1800mbs-aspectrixs20g-1t-c_125087.jpg',
  },
  // mais peças...
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
