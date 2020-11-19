import React, { Component } from "react";
import Flipcard from "./Flipcard";
import Player from "./VideoPlayer";
import Keywords from "./Keywords";
import img8 from "../../assets/images/8.jpg";
import img2 from "../../assets/images/2.jpg";
import img5 from "../../assets/images/5.jpg";
import img3 from "../../assets/images/3.jpg";
import img20 from "../../assets/images/20.jpg";
import img13 from "../../assets/images/13.jpg";
import tick from "../../assets/images/tick.jpg";
import poker from "../../assets/images/planning poker.jpg";
import cross from "../../assets/images/cross.jpg";
import login from "../../assets/images/login.png";

class Delphi extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1>Delphi estimation (Planning poker)</h1>
        <br />
        <p>
          The Wideband Delphi estimation method is a consensus-based technique
          for estimating effort. It derives from the Delphi method which was
          developed in the 1950-1960s at the RAND Corporation as a forecasting
          tool.
        </p>
        <br />
        <p>
          Wideband delphi should acheive a better estimate than individual
          estimation because it focuses on involving multiple experts, and
          combining their expertise in a way that achieves a better estimate
          than a simple mathematical combination of the estimate. In addition it
          also encourages break down of the item to be estimated into smaller
          items, another good method to improve the accuracy of the estimates.
        </p>
        <br />
        <h2>Components</h2>
        <br />
        <Keywords />
        <br />
        <h2>How does wideband delphi work?</h2>
        <p>
          Wideband delphi is a very simple process. You need an estimation
          coordinator and a number of estimators. Generally you do not want too
          many estimators as discussions will be longer and consensus will be
          more difficult to reach.
        </p>
        <h5>Step 1: </h5>
        <ul>
          <li>
            Every person in team holds a deck of planning cards. Each card holds
            a number like – 1, 2, 3, 5, 8, 13, 20, 40, 100 ... A sequence of
            fibbonacci series numbers.
          </li>
        </ul>
        <h5>Step 2: </h5>
        <ul>
          <li>
            Product owner or customer reads an agile user story or decribes a
            feature to estimators. ‘Estimators’ means the whole team, comprising
            representation from management, technical department, financial,
            human resource etc.
          </li>
        </ul>
        <br></br>
        <img
          src={poker}
          className="img-fluid mx-auto d-block"
          alt="poker"
        ></img>
        <br></br>
        <h5>Step 3: </h5>
        <ul>
          <li>
            Estimators discuss the feature among themselves to understand all of
            its aspects.
          </li>
        </ul>
        <h5>Step 4: </h5>
        <ul>
          <li>Then all the estimators select a card and reveals it.</li>
          <ul>
            <li>
              If all the cards have same number then that card number becomes
              the estimate for that user story.
            </li>
            <li>
              Else estimators with outlier numbers are asked about their
              reasoning and after further discussions each estimator again
              selects a card. (Repeat Step 4.)
            </li>
          </ul>
        </ul>
        <h5>Step 5: </h5>
        <ul>
          <li>
            If majority of estimators lean on paticular number (say 8), then 8
            is selected as the estimate.
          </li>
        </ul>
        <Player url="https://www.youtube.com/watch?v=TxSzo3lwwWQ" />
        <br></br>
        <h3>Exercise</h3>
        <h5>Scenario :</h5>
        <p>Modules to be developed:</p>
        <ul>
          <li>Text input for username and password</li>
          <li>A submit button</li>
          <li>Validating user when button is clicked</li>
          <li>
            Showing relevant message to user in both the cases of success or
            failure
          </li>
        </ul>
        <img
          src={login}
          alt="login page"
          style={{ width: "800px", height: "400px" }}
        ></img>
        <p></p>
        Let us practise how we can choose the days from planning poker
        <ul>
          <li>Here card 2 indicates 2 to 5 days for the taks</li>
          <li>Here card 3 indicates 6 to 15 days for the taks</li>
          <li>Here card 5 indicates 16 to 30 days for the taks</li>
          <li>Here card 8 indicates 31 to 50 days for the taks</li>
          <li>Here card 13 indicates 50 to 100 days for the taks</li>
          <li>Here card 20 indicates 100 to 200 days for the taks</li>
        </ul>
        <div className="row">
          <div class="col-sm-2">
            <Flipcard src={img2} flip={tick} />
          </div>
          <div class="col-sm-2">
            <Flipcard src={img3} flip={cross} />
          </div>
          <div class="col-sm-2">
            <Flipcard src={img5} flip={cross} />
          </div>
          <div class="col-sm-2">
            <Flipcard src={img8} flip={cross} />
          </div>
          <div class="col-sm-2">
            <Flipcard src={img13} flip={cross} />
          </div>
          <div class="col-sm-2">
            <Flipcard src={img20} flip={cross} />
          </div>
        </div>
        <br />
        <Hints />
        <br />
        <br />
        <h3>Special Case: </h3>
        <p>
          If half of the estimator select a number ‘x’ and other half selects a
          number ‘y’. Then we select max(x,y) as the estimate for that story
          point.
        </p>
        <h3>Technical Uncertainity: </h3>
        <p>
          After various round of dicussions, the difference between the
          estimations made by estimators is still large. Then it is a Product
          Uncertaininty / Technical Uncertainity. Thus, estimation of that story
          point is done after a thorough research.
        </p>
      </div>
    );
  }
}

class Hints extends Component {
  state = {
    showMessage: false,
  };
  onButtonClickHandler = () => {
    this.setState({ showMessage: true });
  };
  render() {
    return (
      <div>
        <button onClick={this.onButtonClickHandler} className="float-right">
          Hints
        </button>
        {this.state.showMessage && <p>something</p>}
      </div>
    );
  }
}

export default Delphi;
