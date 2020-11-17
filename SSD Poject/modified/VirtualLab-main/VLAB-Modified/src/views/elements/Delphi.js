import React, { Component } from "react";
import Flipcard from "./Flipcard";
import Player from "./VideoPlayer";
import Keywords from "./Keywords";
import img8 from "../../assets/images/8.jpg";
import img2 from "../../assets/images/2.jpg";
import img5 from "../../assets/images/5.jpg";
import img3 from "../../assets/images/3.jpg";
import tick from "../../assets/images/tick.jpg";
import poker from "../../assets/images/planning poker.jpg";

class Delphi extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Delphi estimation</h1>
        <p>
          The Wideband Delphi estimation method is a consensus-based technique
          for estimating effort. It derives from the Delphi method which was
          developed in the 1950-1960s at the RAND Corporation as a forecasting
          tool.
        </p>
        <br></br>
        <p>
          Wideband delphi should acheive a better estimate than individual
          estimation because it focuses on involving multiple experts, and
          combining their expertise in a way that achieves a better estimate
          than a simple mathematical combination of the estimate. In addition it
          also encourages break down of the item to be estimated into smaller
          items, another good method to improve the accuracy of the estimates.
        </p>
        <br></br>
        <h4>Components</h4>
        <Keywords/>
        <br></br>
        <h2>How does wideband delphi work?</h2>
        <p>
          Wideband delphi is a very simple process. You need an estimation
          coordinator and a number of estimators. Generally you do not want too
          many estimators as discussions will be longer and consensus will be
          more difficult to reach.
        </p>
        <h5>Step 1: Kickoff meeting</h5>
        <ul>
          <li>
            In the kickoff meeting describe the project to be estimated and its
            requirements to all estimators. Answer any questions raised to
            clarify the project as much as possible.
          </li>
        </ul>
        <h5>Step 2: Individual estimation</h5>
        <ul>
          <li>
            Each estimator breaks down the project into tasks, and estimates the
            tasks. These individual estimates must be written down.
          </li>
        </ul>
        <br></br>
        <img src={poker} className="img-fluid mx-auto d-block"></img>
        <br></br>
        <h5>Step 3: Discussion meeting</h5>
        <ul>
          <li>
            Hold a meeting where estimators present their estimates and discuss
            reasons for the estimates. Because some estimators will see problems
            or solutions that others did not, the discussion ensures that during
            the next round of estimation each estimator will take more
            information into account in their estimates.
          </li>
        </ul>
        <h5>Step 4: Repeat</h5>
        <ul>
          <li>
            Repeat steps 2 and 3 as many times as necessary to obtain an
            estimate range with an acceptable level of variation between
            experts.
          </li>
        </ul>
        <Player />
        <br></br>
        <h3>Variations</h3>
        <p>
          When you understand that the key to wideband delphi is the combination
          of multiple estimates by discussion, you can easily vary the process
          to suit your environment. Some simple variations might be:
        </p>
        <h5>1. Provide a common task breakdown in the kickoff meeting.</h5>
        <p>
          With each estimator working on the same breakdown discussion can be
          focused on the estimates, rather than being split between estimates
          and breakdown. Estimators should still be able to add tasks to the
          breakdown to capture any additional work overlooked in the original
          breakdown.
        </p>
        <h5>2. Perform everything in one meeting. </h5>
        <p>
          By completing individual estimates and discussions in the same meeting
          time can be saved, particularly on small projects. It is still
          important however that each estimator estimates individually, writes
          their estimates down, and discussion only takes place after all have
          finished their individual estimation.
        </p>
        <h5>3. Come to a group consensus rather than multiple rounds</h5>
        <p>
          You could also have only a single round of estimation, with the
          discussion afterwards targeted to come to a single group consensus.
          The consensus can be in the form of a range which can limit the length
          of the meeting.
        </p>
        <p>
          Wideband delphi is more robust than a single estimator coming up with
          a number. It has a number of similarities to agile planning poker,
          however it is different in that estimates for all tasks are completed
          up front individually rather than estimating and reaching consensus on
          each task one at a time.
        </p>
        <div className="row">
          <div class="col-sm-3">
            <Flipcard src={img2} flip={tick} />
          </div>
          <div class="col-sm-3">
            <Flipcard src={img3} />
          </div>
          <div class="col-sm-3">
            <Flipcard src={img5} />
          </div>
          <div class="col-sm-3">
            <Flipcard src={img8} />
          </div>
        </div>
      </div>
    );
  }
}

export default Delphi;
