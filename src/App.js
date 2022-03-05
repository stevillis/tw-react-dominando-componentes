import "./App.css";

import { MeuComponente } from "./components/MeuComponente";
import Time from './components/Time';

function App() {
  const dados = {
    nome: "Laudon",
    sobrenome: "Jordan",
    idade: 28
  }
  return (
    <div>
      <MeuComponente
        {...dados}
      />
      <Time />
    </div>
  );
}

export default App;
