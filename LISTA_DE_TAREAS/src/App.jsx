import Hola from "./components/Hola";
import Tarjeta from "./components/Tarjeta";
import Contador from "./components/Contador";
import Lista from "./components/Lista";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Componente funcional simple */}
      <Hola />

      <hr />

      {/* Componente que recibe props */}
      <Tarjeta nombre="David Ramos" edad={20} carrera="Ingeniería en Sistemas Computacionales" />

      <hr />

      {/* Componente con useState */}
      <Contador />

      <hr />

      {/* Componente con lista dinamica (.map) */}
      <Lista />
    </div>
  );
}

export default App;