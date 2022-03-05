import "./App.css";

import { MeuComponente } from "./components/MeuComponente";
import Time from './components/Time';
import MyButton from './components/MyButton';

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
      <MyButton />
    </div>
  );
}

export default App;
