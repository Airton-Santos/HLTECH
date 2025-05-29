// StockList.jsx
import React from 'react';
import './Dashboard.css';

function StockList({ items }) {
  return (
    <div className="stock-list">
      {items.map(item => (
        <div className="stock-item" key={item.id}>
          <img src={item.imagem} alt={item.nome} className="item-img" />
          <h3>{item.nome}</h3>
          <p className="item-spec">{item.especificacao}</p>
          <p className="item-price">{item.preco}</p>
        </div>
      ))}
    </div>
  );
}

export default StockList;
