import React, { Component } from 'react';
import './card-style.css';

class Card extends Component {
	render() {
		return (
			<div className="card text-centre shadow">
				<div className="overflow">
					<img src={this.props.image} alt="" className="card-img-top" />
				</div>
				<div className="card-body text-dark">
					<h4 className="card-title">{this.props.name}</h4>
					<p className="card-text text-secondary">{this.props.content}</p>
					<a href="./logo.svg" className="btn btn-outline-success">
						Go Anywhere
					</a>
				</div>
			</div>
		);
	}
}

export default Card;
