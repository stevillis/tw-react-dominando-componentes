import "./App.css";
import ClickList from "./components/ClickList";
import ClickListItem from "./components/ClickListItem";


function App() {
  return (
    <div>
      <ClickList>
        <ClickListItem></ClickListItem>
        <ClickListItem></ClickListItem>
        <ClickListItem></ClickListItem>
      </ClickList>
    </div>
  );
}

export default App;
