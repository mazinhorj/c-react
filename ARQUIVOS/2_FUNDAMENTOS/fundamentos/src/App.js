//styles / css
import './App.css';

//components
import Events from './components/Events';
import FirstComponent from './components/FirstComponent';
import MyComponent from './components/MyComponent';
import SecondComponent from './components/SecondComponent';
import TemplateExpressions from './components/TemplateExpressions';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos REACT</h1>
      <TemplateExpressions />
      <FirstComponent />
      <SecondComponent />
      <p>Aqui importado direto no pai de todos: </p>
      <MyComponent />
      <Events />
    </div>
  );
}



export default App;
