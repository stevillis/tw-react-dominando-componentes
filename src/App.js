import "./App.css";
import { MeuComponente } from "./components/MeuComponente";

function App() {
  const dados = {
    nome: "Laudon",
    sobrenome: "Jordan",
    idade: 28
  }
  return (
    <MeuComponente
      {...dados}
    />
  );
}

export default App;
