import React, { Component } from "react";
import FlipCard from "./Flipcard.jsx";

class FlipCards extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="row flipcard">
          <FlipCard />
        </div>
        <div className="row">
          <FlipCard />
        </div>
        <div className="row">
          <FlipCard />
        </div>
      </div>
    );
  }
}

export default FlipCards;
