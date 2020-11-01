import React, { Component } from "react";
import Card from "./cardUI";
import img1 from "../images/Basic COCOMO Model(1).jpg";
import img3 from "../images/Complete COCOMO Model.jpg";
import img2 from "../images/Intermediate COCOMO Model.jpg";
import "./card-style.css";

class Cards extends Component {
  state = {
    names: [
      { id: "Basic COCOMO Model" },
      { id: "Intermediate COCOMO Model" },
      { id: "Complete COCOMO Model" },
    ],
    contents: [
      {
        content:
          "The basic COCOMO model helps to obtain a rough estimate of the project parameters. ",
      },
      {
        content:
          "The intermediate COCOMO takes other project development parameters as factors for consideration, by defining a set of cost drivers",
      },
      {
        content:
          "The complete COCOMO takes that model take these factors into account to provide a far more accurate estimate of project metrics.",
      },
    ],
  };
  render() {
    return (
      <div>
        {/* <div className="row"> */}
          {/* <div class="TriangleUp-rlo4cd-0 dnAhJF"></div> */}
        {/* </div> */}
        {/* <div class="SecondSection__Container-sc-1q57cd9-1 eSmTCo"> */}
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4 mb-4 d-flex align-items-stretch">
              <Card
                name={this.state.names[0].id}
                content={this.state.contents[0].content}
                image={img1}
              />
            </div>
            <div className="col-md-4 mb-4 d-flex align-items-stretch">
              <Card
                name={this.state.names[1].id}
                content={this.state.contents[1].content}
                image={img2}
              />
            </div>
            <div className="col-md-4 mb-4 d-flex align-items-stretch">
              <Card
                name={this.state.names[2].id}
                content={this.state.contents[2].content}
                image={img3}
              />
            </div>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default Cards;
