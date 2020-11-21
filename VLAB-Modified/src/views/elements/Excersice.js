import React, { Component } from "react";
import Quiz from "./Quiz.js";
import fontFile from "../../vibe/scss/components/fontFile.scss";

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
      {
        id: "4. What type of decision making is done in wideband delphi?",
      },
      {
        id: "5. How many rounds are held in planning poker?",
      },
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
      {
        option1: " Calculation based ",
        option2: " Majority Based ",
        option3: " Concensus Based",
        option4: " Analogous Based ",
      },
      {
        option1: " A majority on a single estimate number is obtained ",
        option2: " At most 5 ",
        option3: " At least 5",
        option4: " Till all members decide on a single estimation number",
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
      {
        id:
          "  Concensus based- All the team members should be on same decision",
      },
      {
        id: "  Till all members decide on a single estimation number",
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
        <br />
        <Quiz
          question={this.state.Questions[3].id}
          options={this.state.contents[3]}
          answer={this.state.answers[3].id}
        />
        <br />
        <Quiz
          question={this.state.Questions[4].id}
          options={this.state.contents[4]}
          answer={this.state.answers[4].id}
        />
      </div>
    );
  }
}

export default Exersice;
