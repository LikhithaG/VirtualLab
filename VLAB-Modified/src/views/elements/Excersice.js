import React, { Component } from "react";
import Quiz from "./Quiz.js";

class Exersice extends Component {
  state = {
    Questions: [
      {
        id: "1. What are the objective of delphi?",
      },
      {
        id: "2. Which among the below are advantages of delphi technique",
      },
      { id: "3. Which among the below is one the disadvantages of delphi" },
    ],
    contents: [
      {
        option1:
          " To determine or develop a range of possible program alternatives",
        option2:
          " To explore or expose underlying assumptions or information leading to different judgements",
        option3:
          " To seek out information which may generate a consensus on the part of the respondent group",
        option4:
          " To correlate informed judgments on a topic spanning a wide range of disciplines",
      },
      {
        option1: " Provide Anonymity to Respondents",
        option2: " Potential of Low Response Rates",
        option3: " Manipulated Consensus ",
        option4: " Reliability and Validity ",
      },
      {
        option1: " time needed to successfully complete the data collection ",
        option2: " Provide Anonymity to Respondents ",
        option3: " Established and Effective Technique ",
        option4: " Delphi Technique is Popular Way of Harnessing Opinion ",
      },
    ],
    answers: [
      {
        id:
          " 1.To   determine   or   develop   a   range   of   possible program alternatives 2. To    explore    or    expose    underlying   assumptions  or  information  leading  to  different judgements 3.To   seek   out   information   which   may   generate  a  consensus  on  the  part  of  the  respondent group 4.To  correlate  informed  judgments  on  a  topic spanning a wide range of disciplines 5.To  educate  the  respondent  group  as  to  the diverse and interrelated aspects of the topic",
      },
      {
        id:
          " Advantages of Delphi: a) Provide Anonymity to Respondents b) Established and Effective Technique c) Delphi Technique is Popular Way of Harnessing Opinion",
      },
      {
        id:
          " Disadvantages of Delphi: a)Potential of Low Response Rates b) Time Requirements c) Manipulated Consensus",
      },
    ],
  };
  render() {
    return (
      <div>
        <Quiz
          question={this.state.Questions[0].id}
          options={this.state.contents[0]}
          answer={this.state.answers[0].id}
        />
        <br />
        <Quiz
          question={this.state.Questions[1].id}
          options={this.state.contents[1]}
          answer={this.state.answers[1].id}
        />
        <br />
        <Quiz
          question={this.state.Questions[2].id}
          options={this.state.contents[2]}
          answer={this.state.answers[2].id}
        />
      </div>
    );
  }
}

export default Exersice;
