import React from "react";
import "./App.css";
import axios from "axios";
//import { response } from "express";

class App extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000")
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        console.error(`error fetching data : ${error}`);
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">Hows it going Mike!</header>
        <div className="Content">
          <h1 className="header1">
            How's it going Mike, hope your semester is going well too.
          </h1>
        </div>
      </div>
    );
  }
}

export default App;
