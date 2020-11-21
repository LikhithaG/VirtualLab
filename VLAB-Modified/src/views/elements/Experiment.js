import React, { Component } from "react";
import Flipcard from "./Flipcard";
import Player from "./VideoPlayer";
import img8 from "../../assets/images/8.jpg";
import img2 from "../../assets/images/2.jpg";
import img5 from "../../assets/images/5.jpg";
import img3 from "../../assets/images/3.jpg";
import img20 from "../../assets/images/20.jpg";
import img13 from "../../assets/images/13.jpg";
import tick from "../../assets/images/tick.jpg";
import cross from "../../assets/images/cross.jpg";
import fontFile from "../../vibe/scss/components/fontFile.scss";

class Experiment extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>EXPERIMENT</h1>
        <br />
        <br />
        <h2>Problem Statement 1:</h2>
        <h3>Scenario 1</h3>
        <p>A product owner wants you to add new features in a website.</p>
        <br />
        <p>
          <Player url="https://www.youtube.com/watch?v=3D3a2DGzHIg" />
        </p>
        <br />
        <h4>Round 1</h4>
        <ul>
          <li>Alice : card 2</li>
          <li>Bob : card 8</li>
        </ul>
        <h4>Round 2</h4>
        <ul>
          <li>Alice : card 3</li>
          <li>Bob : card 8</li>
        </ul>
        <h4>Round 3</h4>
        <ul>
          <li>Alice : card 3</li>
          <li>Bob : card 5</li>
        </ul>

        <p>
          <strong>Click on the card to flip it.</strong>
        </p>
        <div className="row">
          <div class="col-sm-2">
            <Flipcard src={img2} flip={cross} alt={"2"} />
          </div>
          <div class="col-sm-2">
            <Flipcard src={img3} flip={cross} alt={"3"} />
          </div>
          <div class="col-sm-2">
            <Flipcard src={img5} flip={tick} alt={"5"} />
          </div>
          <div class="col-sm-2">
            <Flipcard src={img8} flip={cross} alt={"8"} />
          </div>
          <div class="col-sm-2">
            <Flipcard src={img13} flip={cross} alt={"13"} />
          </div>
          <div class="col-sm-2">
            <Flipcard src={img20} flip={cross} alt={"20"} />
          </div>
        </div>
        <br />
        <Solution answer="Solution: the answer should converge in subsequent estimation rounds and should be an upper bound to the estimated value. By looking at the data in 3 rounds and considering the upper bound rule, The answer should be 5 days" />
        <br />
        <br />
        <h3>Scenario 2</h3>
        <Player url="https://www.youtube.com/watch?v=zIWb_qvCYPg" />
        <br />
        <h4>Round 1</h4>
        <ul>
          <li>Alice : card 3</li>
          <li>Bob : card 8</li>
        </ul>
        <h4>Round 2</h4>
        <ul>
          <li>Alice : card 2</li>
          <li>Bob : card 5</li>
        </ul>
        <h4>Round 3</h4>
        <ul>
          <li>Alice : card 2</li>
          <li>Bob : card 3</li>
        </ul>
        <p>
          <strong>Click on the card to flip it.</strong>
        </p>
        <div className="row">
          <div class="col-sm-2">
            <Flipcard src={img2} flip={cross} alt={"2"} />
          </div>
          <div class="col-sm-2">
            <Flipcard src={img3} flip={tick} alt={"3"} />
          </div>
          <div class="col-sm-2">
            <Flipcard src={img5} flip={cross} alt={"5"} />
          </div>
          <div class="col-sm-2">
            <Flipcard src={img8} flip={cross} alt={"8"} />
          </div>
          <div class="col-sm-2">
            <Flipcard src={img13} flip={cross} alt={"13"} />
          </div>
          <div class="col-sm-2">
            <Flipcard src={img20} flip={cross} alt={"20"} />
          </div>
        </div>
        <br />
        <Solution answer="Solution: the answer should converge in subsequent estimation rounds and should be an upper bound to the estimated value. By looking at the data in 3 rounds and considering the upper bound rule, The answer should be 3 days" />
        <br />
      </div>
    );
  }
}

class Solution extends Component {
  state = {
    showMessage: false,
  };
  onButtonClickHandler = () => {
    this.setState({ showMessage: true });
  };
  render() {
    return (
      <div>
        <button
          onClick={this.onButtonClickHandler}
          className="btn btn-success float-right"
        >
          Solution
        </button>
        {this.state.showMessage && (
          <p>
            {this.props.answer}
          </p>
        )}
      </div>
    );
  }
}

export default Experiment;
