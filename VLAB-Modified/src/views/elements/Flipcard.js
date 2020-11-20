import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import fontFile from '../../vibe/scss/components/fontFile.scss';

function Flipcard(props) {
	const [ isFlipped, setIsFlipped ] = useState(false);

	function handleClick() {
		setIsFlipped(!isFlipped);
	}
	function Options(props) {
		const isContent = props.isContent;
		if (isContent) {
			return (
				<div>
					<img src={props.isContent} onClick={handleClick} alt={props.alt} />
				</div>
			);
		} else {
			return (
				<div>
					<p
						style={{
							paddingTop: 20,
							justifyContent: 'center',
							textAlign: 'left'
						}}
					>
						There are three - <br />
						<br />
						Basic COCOMO Model, <br />
						<br />
						Intermediate COCOMO Model,
						<br />
						<br />
						Complete COCOMO Model{' '}
					</p>
					<button onClick={handleClick} className="float-left btn btn-primary">
						<strong>Go back to question</strong>
					</button>
				</div>
			);
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
					<img src={props.src} onClick={handleClick} alt={props.alt} />
				</div>
			</div>
			<div className="question">
				<div>
					<Options isContent={props.flip} />
				</div>
			</div>
		</ReactCardFlip>
	);
}
export default Flipcard;
