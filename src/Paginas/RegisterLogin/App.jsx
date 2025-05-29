import { useState } from 'react';
import './App.css';
import logo from '../../assets/Logo.png';
import { auth } from '../../../firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function App() {
  const [modoCadastro, setModoCadastro] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [animando, setAnimando] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      if (modoCadastro) {
        if (!nome || !cpf || !telefone) {
          alert('Preencha todos os campos.');
          return;
        }

        await createUserWithEmailAndPassword(auth, email, senha);

        // Aqui futuramente podemos salvar nome, CPF e telefone no Firestore
        alert('Cadastro realizado com sucesso!');
      } else {
        await signInWithEmailAndPassword(auth, email, senha);
        alert('Login realizado com sucesso!');
      }

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
      setNome('');
      setCpf('');
      setTelefone('');
      setAnimando(false);
    }, 300);
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="logo" />
      <div className={`login-box ${animando ? 'fade' : ''}`}>
        <h1>{modoCadastro ? 'Cadastro' : 'Login'}</h1>

        {modoCadastro && (
          <>
            <label>
              Nome:
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite seu nome completo"
              />
            </label>

            <label>
              CPF:
              <input
                type="text"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                placeholder="Digite seu CPF"
              />
            </label>

            <label>
              Telefone:
              <input
                type="tel"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="Digite seu telefone"
              />
            </label>
          </>
        )}

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
