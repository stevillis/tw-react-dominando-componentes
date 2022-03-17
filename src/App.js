import React, { Component } from "react";
import "./App.css";
import ClickList from "./components/ClickList";
import ClickListItem from "./components/ClickListItem";
import MyVideo from "./components/MyVideo";
import Time from './components/Time';


class App extends Component {
  constructor(props) {
    super(props);
    this.item1 = React.createRef();
    this.item2 = React.createRef();

    this.state = {
      selectedItem: this.item1
    }

    this.toggleItem = this.toggleItem.bind(this);
  }

  toggleItem() {
    this.setState(({ selectedItem }) => {
      return {
        selectedItem: (selectedItem === this.item1 ? this.item2 : this.item1)
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <ul>
            <li ref={this.item1}>
              {this.state.selectedItem === this.item1 ? <Time /> : ''}
            </li>
            <li ref={this.item2}>
              {this.state.selectedItem === this.item2 ? <Time /> : ''}
            </li>
          </ul>
          <button onClick={this.toggleItem}>Toggle</button>
        </div>
        <MyVideo src="https://ak.picdn.net/shutterstock/videos/1048055704/preview/stock-footage-mother-multi-tasking-holding-baby-infant-and-using-computer-laptop-at-home-candid-authentic-and.webm" />
        <ClickList>
          <ClickListItem></ClickListItem>
          <ClickListItem></ClickListItem>
          <ClickListItem></ClickListItem>
        </ClickList>
      </div >
    );
  }
}

export default App;
