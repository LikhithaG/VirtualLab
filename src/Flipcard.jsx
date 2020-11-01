import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import '../index.css';
//import Button from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Flipcard() {
	const [ isFlipped, setIsFlipped ] = useState(false);

	function handleClick() {
		setIsFlipped(!isFlipped);
	}
  return (
		<ReactCardFlip
			isFlipped={isFlipped}
			flipDirection="horizontal"
			flipSpeedFrontToBack="1.2"
			flipSpeedBacktToFront="1.2"
		>
			<div>
				<div style={{ backgroundColor: 'white', height: 350, width: 500, justifyContent: 'center' }}>
					<h3 style={{ paddingTop: 20, textAlign: 'left' }}>
						According to the COCOMO model, a project can be categorized into{' '}
					</h3>
					<form name="self evaluation" id="self eval" style={{ paddingTop: 20, textAlign: 'left' }}>
						<div class="radio">
							<input type="radio" name="q1" value="3 types" />3 types
							<br />
							<br />
							<input type="radio" name="q1" value="3 types" />4 types
							<br />
							<br />
							<input type="radio" name="q1" value="3 types" />5 types
							<br />
							<br />
							<input type="radio" name="q1" value="3 types" />None of these
						</div>
						<br />
						<br />
					</form>
					<button
						onClick={handleClick}
						class="btn btn-success btn-lg"
						style={{ paddingTop: 20, textAlign: 'left' }}
					>
						<strong style={{ paddingTop: 20, textAlign: 'left' }}>Submit</strong>
					</button>
				</div>
			</div>
			<div>
				<div style={{ height: 350, width: 500 }}>
					<p style={{ paddingTop: 20, justifyContent: 'center', textAlign: 'left' }}>
						There are three - <br />
						<br />Basic COCOMO Model, <br />
						<br />
						Intermediate COCOMO Model,<br />
						<br />
						Complete COCOMO Model{' '}
					</p>
					<h3 style={{ paddingTop: 20, textAlign: 'left' }}>This is the back of the card.</h3>
					<button onClick={handleClick} style={{ paddingTop: 20, textAlign: 'left' }}>
						<strong style={{ paddingTop: 20, textAlign: 'left' }}>Front flip</strong>
					</button>
				</div>
			</div>
		</ReactCardFlip>
	);
}
export default Flipcard;
