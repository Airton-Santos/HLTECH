import React from 'react';
import Navbar from '../component/Navbar';
import './UserProfile.css';

function UserProfile() {
  // Dados mockados – depois podemos integrar com Firebase
  const user = {
    nome: 'João da Silva',
    cpf: '123.456.789-00',
    telefone: '(11) 91234-5678',
    cep: '01001-000'
  };

  return (
    <div className="user-profile-page">
      <div className="user-container">
        <h2>Perfil do Usuário</h2>
        <div className="user-info">
          <p><strong>Nome:</strong> {user.nome}</p>
          <p><strong>CPF:</strong> {user.cpf}</p>
          <p><strong>Telefone:</strong> {user.telefone}</p>
          <p><strong>CEP:</strong> {user.cep}</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
