import React, { UseState} from 'react';
import ReactCardFlip from 'react-card-flip';
import './index.css';

function q2() {
    const [isFlipped, setIsFlipped] = UseState(false);

    function handleClick() {
        setIsFlipped(!isFlipped);
    }
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedFrontToBack="1.2" flipSpeedBacktToFront="1.2">
            <div>
                <div style={{ backgroundColor: "powderblue", height: 350, width: 500, justifyContent: "center" }}>
                    <h3 style={{ paddingTop: 20 }}>In Intermediate COCOMO model, Effort Adjustment Factor (EAF) is derived from the effort multipliers by </h3>
                    <form name="self evaluation" id="self eval">
                        <div>
                            <input type="radio" name="q1" value="Adding them" />Adding them
                            <br></br>
                            <br></br>
                            <input type="radio" name="q1" value="Multiplying them" />Multiplying them
                            <br></br>
                            <br></br>
                            <input type="radio" name="q1" value=" Taking their weighted average " /> Taking their weighted average 
                            <br></br>
                            <br></br>
                            <input type="radio" name="q1" value=" Considering their maximum " /> Considering their maximum 
                        </div>
                        <br></br>
                        <br></br>
                    </form>
                    <button onClick={handleClick}><strong>Submit</strong></button>
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

export default q2;