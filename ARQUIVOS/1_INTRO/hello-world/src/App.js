import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>@MazinhoBigDaddy chegou!</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edite <code>src/App.js</code> e salve para recarregar.
        </p>
        <p id="meu">Olha eu no React!!!</p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprender React
        </a>
      </header>
    </div>
  );
}

export default App;
