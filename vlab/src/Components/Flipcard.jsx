import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./card-style.css";

function Flipcard(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    setIsFlipped(!isFlipped);
  }
  function Options(props) {
    const isContent = props.isContent;
    if (isContent) {
      return (
        <div>
          <input type="radio" name="q1" value="3 types" /> {isContent}
          <br />
          <br />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      flipSpeedFrontToBack="1.2"
      flipSpeedBacktToFront="1.2"
    >
      <div className="question">
        <div>
				  <h3>{props.name}</h3>
				  <br></br>
          <form name="self evaluation" id="self eval">
            <div class="radio">
              <Options isContent={props.content.option1} />
              <Options isContent={props.content.option2} />
              <Options isContent={props.content.option3} />
              <Options isContent={props.content.option4} />
            </div>
          </form>
          <button
            onClick={handleClick}
            className="btn btn-success btn-lg float-left"
          >
            <strong className="text-center">Submit</strong>
          </button>
        </div>
      </div>
      <div className="question">
        <div style={{ height: 350, width: 800 }}>
          <p
            style={{
              paddingTop: 20,
              justifyContent: "center",
              textAlign: "left",
            }}
          >
            There are three - <br />
            <br />
            Basic COCOMO Model, <br />
            <br />
            Intermediate COCOMO Model,
            <br />
            <br />
            Complete COCOMO Model{" "}
          </p>
          <button onClick={handleClick} className="float-left btn btn-primary">
            <strong>Go back to question</strong>
          </button>
        </div>
      </div>
    </ReactCardFlip>
  );
}
export default Flipcard;
