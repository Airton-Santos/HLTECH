import React from 'react';

function StockList({ items }) {
  if (items.length === 0) return <p>Nenhuma peça encontrada.</p>;

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <strong>{item.nome}</strong> — {item.preco}
        </li>
      ))}
    </ul>
  );
}

export default StockList;
