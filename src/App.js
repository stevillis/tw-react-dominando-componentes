import "./App.css";
import ClickList from "./components/ClickList";


function App() {
  return (
    <div>
      <ClickList number="123">
        <h1>
          Hello, world!
        </h1>
        <span>Apple</span>
      </ClickList>
    </div>
  );
}

export default App;
