import React, { Component } from 'react';
import './card-style.css';

class Intro extends Component {
	render() {
		return (
			<div className="container-fluid" style={{ height: '100vh', textAlign: 'center' }}>
				<div className="row">
					<p
						className="text-center"
						style={{ fontSize: 30 + 'px', marginTop: 2 + 'em', textAlign: 'center' }}
					>
						Introduction
					</p>
				</div>
				<div style={{ textAlign: 'center' }}>
					<p>
						After gathering the entire requirements specific to software project usually we need to think
						about different solution strategy for the project. Expert business analysts are analyzing their
						benefits and as well as their shortcomings by means of cost, time and resources require to
						develop it. In this experiment, we will learn how to estimate cost, effort and duration for a
						software project, and then select one solution approach which will be found suitable to fulfill
						the organizational goal.
					</p>
				</div>
			</div>
		);
	}
}

export default Intro;
