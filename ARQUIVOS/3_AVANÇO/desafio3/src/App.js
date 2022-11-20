import { useState } from 'react';
import './App.css';

import City from "./assets/city.jpg"
import CarDetails from './components/CarDetails';
import ChangeMessageState from './components/ChangeMessageState';
import ConditionalRender from './components/ConditionalRender';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Fragments from './components/Fragments';
import ListRender from './components/ListRender';
import MenageData from './components/MenageData';
import Message from './components/Message';
import ShowUserName from './components/ShowUserName';
import UserDetails from './components/UserDetails';

function App() {
  const [userName] = useState("Fe")
  const [carros] = useState([
    {id: 1, marca: "VW", modelo: "Fusca", ano: 1979, novo: true},
    {id: 2, marca: "Fiat", modelo: "Uno", ano: 1984, novo: false},
    {id: 3, marca: "Chevrolet", modelo: "Corsa", ano: 1994, novo: false},
    {id: 4, marca: "Ford", modelo: "Del Rey", ano: 1986, novo: true},
  ])

  const [usuarios] = useState([
    {id: 1, nome: "Alexandre", idade: 50, profissao: "aposentado"},
    {id: 2, nome: "Fabio", idade: 48, profissao: "professor"},
    {id: 3, nome: "Mazinho", idade: 39, profissao: "analista"},
    {id: 4, nome: "Rafael", idade: 37, profissao: "diretor"},
    {id: 5, nome: "Letícia", idade: 6, profissao: "estudante"},
    {id: 6, nome: "Terezinha", idade: 73, profissao: "aposentada"},
  ])

  const showMessage = () => {
    console.log('Evento do componente pai.')
  }

  const [message, setMessage] = useState("Mandei o papo")

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* public img */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* asset img */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      {/* useState */}
      <MenageData />
      <div>
        {/* useState + construção dinâmica com map */}
        <ListRender />
      </div>
      <div>
        {/* If's */}
        <ConditionalRender />
      </div>
      <div>
        {/* props */}
        <ShowUserName name={userName}/>
      </div>
      <div>
        {/* destructuring */}
        <CarDetails marca="Kia" modelo="Sportage" ano={2015} novo={false}/>
      </div>
      <div>
        {/* reaproveitando */}
        <CarDetails marca="Audi" modelo="A5" ano={2022} novo={true}/>
      </div>
      <div>
        {/* renderizar lista - loop em array de obj */}
        {carros.map((carro) => (
          <CarDetails 
            key={carro.id}
            id={carro.id}
            marca={carro.marca} 
            modelo={carro.modelo} 
            ano={carro.ano} 
            novo={carro.novo}
          />
        ))}
      </div>
        {/* fragments - sem um elemento pai */}
        <Fragments />
        {/* children */}
        <Container meuValor="EU SOU">
          <p>Primeiro uso</p>
        </Container>
        <Container meuValor="EU SOU FODA">
          <p>Segundo uso</p>
        </Container>
        {/* executar função */}
        <ExecuteFunction myFunction={showMessage}/>
        {/* state lift */}
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage}/>
        <div>
          {/* DESAFIO */}
          {usuarios.map((usuario) => (
            <UserDetails 
            key={usuario.id}
            nome={usuario.nome}
            idade={usuario.idade}
            profissao={usuario.profissao}
            />
          ))}
        </div>
    </div>
  );
}

export default App;
