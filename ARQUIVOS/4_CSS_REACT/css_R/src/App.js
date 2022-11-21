
import './App.css';
import MeuComponente from './components/MeuComponente';
import Title from './components/Title';

function App() {
  const n = 11
  const redTitle = true
  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS do componente */}
      <MeuComponente />
      <p>Parágrafo do App.js</p>
      {/* CSS inline */}
      <p style={{color: "green", backgroundColor: "yellow", padding: "12px", borderTop: "4px solid black"}}>Parágrafo com estilo inline</p>
      {/* CSS inline dinâmico */}
      <h2 style={n<10 ? ({color:"red"}) : ({color:"blue"})}>CSS Dinâmico</h2>
      <h2 style={n>10 ? ({color:"red"}) : ({color:"blue"})}>CSS Dinâmico</h2>
      {/* classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>Titulo com classe dinâmica</h2>
      {/* CSS modules */}
      <Title />
    </div>
  );
}

export default App;
