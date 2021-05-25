import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super();
    this.state = { time: new Date() };
  }
  componentDidMount() {
    setInterval(this.currentTime, 1000);
  }
  componentDidUpdate() {
    this.interval = setInterval(this.currentTime, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  currentTime = () => {
    this.setState({ time: new Date() });
  };

  render() {
    return (
      <>
        <div className="Clock">
          <h3 id="time">{this.state.time.toLocaleTimeString()}</h3>
        </div>
      </>
    );
  }
}

export default App;
