import "./App.css";
import { MeuComponente, MeusComponentes } from "./components/MeuComponente";

function App() {
  const nome = "MeuComponente3";
  const MeuComponente3 = MeusComponentes[nome];
  return (
    <>
      <MeuComponente nome="Jordan Laudon" />
      <MeusComponentes.MeuComponente2 />
      <MeuComponente3 nome="Laudon Jordan" />
    </>
  );
}

export default App;
