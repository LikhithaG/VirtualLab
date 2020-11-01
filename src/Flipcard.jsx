import React, { useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import './index.css';
//import Button from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Flipcard() {
    const [isFlipped, setIsFlipped] = useState(false);

    function handleClick() {
        setIsFlipped(!isFlipped);
    }
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedFrontToBack="1.2" flipSpeedBacktToFront="1.2">
            <div>
                <div style={{ backgroundColor: "powderblue", height: 350, width: 500, justifyContent: "center" }}>
                    <h3 style={{ paddingTop: 20 }}>According to the COCOMO model, a project can be categorized into </h3>
                    <form name="self evaluation" id="self eval">
                        <div  class="radio">
                            <input type="radio" name="q1" value="3 types" />3 types
                            <br></br>
                            <br></br>
                            <input type="radio" name="q1" value="3 types" />4 types
                            <br></br>
                            <br></br>
                            <input type="radio" name="q1" value="3 types" />5 types
                            <br></br>
                            <br></br>
                            <input type="radio" name="q1" value="3 types" />None of these
                        </div>
                        <br></br>
                        <br></br>
                    </form>
                    <button onClick={handleClick} class="btn btn-success btn-lg"><strong>Submit</strong></button>
                </div>
            </div>
            <div>
                <div style={{ backgroundColor: "pink", height: 350, width: 500 }}>
                    <p style={{ paddingTop: 20, justifyContent: "center" }}>There are three -  <br /><br />Basic COCOMO Model, <br /><br />
                                                                Intermediate COCOMO Model,<br /><br />
                        Complete COCOMO Model </p>
                    <h3 style={{ paddingTop: 20 }}>This is the back of the card.</h3>
                    <button onClick={handleClick}><strong>Front flip</strong></button>
                </div>
            </div>
        </ReactCardFlip>
    );
}
export default Flipcard;