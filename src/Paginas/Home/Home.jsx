import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Dashboard from '../component/Dashboard';
import UserProfile from '../component/UserProfile';
import './Home.css';

function Home() {
  const [telaAtual, setTelaAtual] = useState('dashboard'); // ou 'usuario'

  return (
    <div className="container">
      <Navbar aoMudarTela={setTelaAtual} />
      {telaAtual === 'dashboard' && <Dashboard />}
      {telaAtual === 'usuario' && <UserProfile />}
    </div>
  );
}

export default Home;
