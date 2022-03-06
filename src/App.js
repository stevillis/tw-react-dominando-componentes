import "./App.css";
import ClickList from "./components/ClickList";
import ClickListItem from "./components/ClickListItem";
import MyVideo from "./components/MyVideo";


function App() {
  return (
    <div>
      <MyVideo src="https://ak.picdn.net/shutterstock/videos/1048055704/preview/stock-footage-mother-multi-tasking-holding-baby-infant-and-using-computer-laptop-at-home-candid-authentic-and.webm" />
      <ClickList>
        <ClickListItem></ClickListItem>
        <ClickListItem></ClickListItem>
        <ClickListItem></ClickListItem>
      </ClickList>
    </div>
  );
}

export default App;
