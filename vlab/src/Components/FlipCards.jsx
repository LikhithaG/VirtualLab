import React, { Component } from "react";
import FlipCard from "./Flipcard.jsx";

class FlipCards extends Component {
  state = {
    Questions: [
      {
        id:
          "1. According to the COCOMO model, a project can be categorized into",
      },
      {
        id:
          "2. In Intermediate COCOMO model, Effort Adjustment Factor (EAF) is derived from the effort multipliers by",
      },
      { id: "3. Project metrics are estimated during which phase?" },
      {
        id:
          "4. According to Halsetad's metrics, program length is given by the ",
      },
      { id: "5. Complete COCOMO considers a software as a" },
      {
        id:
          "6. Consider you are developing a web application, which would make use of a lot of web services provided by Facebook, Google, Flickr. Would it be wise to make estimates for this project using COCOMO?",
      },
    ],
    contents: [
      {
        option1: " 3 types",
        option2: " 4 types ",
        option3: "  5 types ",
        option4: " No such categorization ",
      },
      {
        option1: " Adding them ",
        option2: " Multiplying them ",
        option3: " Taking their weighted average ",
        option4: " Considering their maximum ",
      },
      {
        option1: " Feasibility study ",
        option2: " Planning ",
        option3: " Design ",
        option4: " Development ",
      },
      {
        option1: " Sum of total number of operators and operands ",
        option2: " Sum of number of unique operators and operands ",
        option3: " Total number of operators ",
        option4: " Total number of operands ",
      },
      {
        option1: " Homogeneous system ",
        option2: " Heterogeneous system ",
        option3: "",
        option4: "",
      },
      {
        option1: " Yes, of course ",
        option2: " Not at all ",
        option3: "",
        option4: "",
      },
    ],
  };
  render() {
    return (
      <div className="container-fluid" style={{ marginBottom: "1%" }}>
        <div
          className="row flipcard d-flex justify-content-center"
          style={{ marginTop: "4em" }}
        >
          <FlipCard
            name={this.state.Questions[0].id}
            content={this.state.contents[0]}
          />
        </div>
        <div className="row flipcard d-flex justify-content-center">
          <FlipCard
            name={this.state.Questions[1].id}
            content={this.state.contents[1]}
          />
        </div>
        <div className="row flipcard d-flex justify-content-center">
          <FlipCard
            name={this.state.Questions[2].id}
            content={this.state.contents[2]}
          />
        </div>
        <div className="row flipcard d-flex justify-content-center">
          <FlipCard
            name={this.state.Questions[3].id}
            content={this.state.contents[3]}
          />
			</div>
        <div className="row flipcard d-flex justify-content-center">
          <FlipCard
            name={this.state.Questions[4].id}
            content={this.state.contents[4]}
          />
        </div>
        <div className="row flipcard d-flex justify-content-center">
          <FlipCard
            name={this.state.Questions[5].id}
            content={this.state.contents[5]}
          />
        </div>
      </div>
    );
  }
}

export default FlipCards;
