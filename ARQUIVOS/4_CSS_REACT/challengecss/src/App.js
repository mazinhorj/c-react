import {useState} from "react";
import './App.css';
import CarrosDetalhes from './components/CarrosDetalhes';


function App() {
  const [carros] = useState([
    {id: 1, marca: "VW", modelo:"Fusca", ano: 1979, cor: "Bege", motor: "1.3", combustivel: "gasolina", km: 127543},
    {id: 2, marca: "Chevrolet", modelo:"Monza", ano: 1995, cor: "Prata", motor: "1.8", combustivel: "álcool", km: 187901},
    {id: 3, marca: "Fiat", modelo:"Toro", ano: 2022, cor: "Vermelha", motor: "2.4", combustivel: "flex", km: 0},
    {id: 4, marca: "Ford", modelo:"Edge", ano: 2019, cor: "Azul metálico", motor: "2.8", combustivel: "flex", km: 65432},
    {id: 5, marca: "Kia", modelo:"Sportage", ano: 2022, cor: "Branca", motor: "3.0", combustivel: "diesel", km: 0},
  ])
  return (
    <div className="App">
      <h1 className="h1_principal">Desafio CSS React - Carros/Detalhes</h1>
      <div className="container">
        {carros.map((carro) => (
          <CarrosDetalhes
            key={carro.id}
            id={carro.id}
            marca={carro.marca}
            modelo={carro.modelo}
            ano={carro.ano}
            cor={carro.cor}
            motor={carro.motor}
            combustivel={carro.combustivel}
            km={carro.km}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
