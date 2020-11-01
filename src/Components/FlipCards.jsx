import React, { Component } from 'react';
import FlipCard from './Flipcard.jsx';

class FlipCards extends Component {
	state = {};
	render() {
		return (
			<div className="container-fluid">
				<div className="row flipcard d-flex justify-content-center" style={{ marginTop: '8em' }}>
					<FlipCard />
				</div>
				<div className="row flipcard d-flex justify-content-center">
					<FlipCard />
				</div>
				<div className="row flipcard d-flex justify-content-center">
					<FlipCard />
				</div>
			</div>
		);
	}
}

export default FlipCards;
