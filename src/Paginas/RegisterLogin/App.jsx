import { useState } from 'react';
import './App.css';
import logo from '../../assets/Logo.png';
import { auth } from '../../../firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Importa o hook

function App() {
  const [modoCadastro, setModoCadastro] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [animando, setAnimando] = useState(false);

  const navigate = useNavigate(); // Hook para navegar

  const handleSubmit = async () => {
    try {
      if (modoCadastro) {
        await createUserWithEmailAndPassword(auth, email, senha);
        alert('Cadastro realizado com sucesso!');
      } else {
        await signInWithEmailAndPassword(auth, email, senha);
        alert('Login realizado com sucesso!');
      }

      // Redireciona para a tela Home após sucesso
      navigate('/home');

    } catch (error) {
      console.error(error);
      alert('Erro: ' + error.message);
    }
  };

  const trocarModo = () => {
    setAnimando(true);
    setTimeout(() => {
      setModoCadastro(!modoCadastro);
      setEmail('');
      setSenha('');
      setAnimando(false);
    }, 300);
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="logo" />
      <div className={`login-box ${animando ? 'fade' : ''}`}>
        <h1>{modoCadastro ? 'Cadastro' : 'Login'}</h1>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
          />
        </label>

        <label>
          Senha:
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite sua senha"
          />
        </label>

        <button onClick={handleSubmit}>
          {modoCadastro ? 'Cadastrar' : 'Entrar'}
        </button>

        <p>
          {modoCadastro ? 'Já tem conta?' : 'Não tem uma conta?'}{' '}
          <span className="toggle-link" onClick={trocarModo}>
            {modoCadastro ? 'Faça login' : 'Cadastre-se'}
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
