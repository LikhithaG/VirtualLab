import React, { Component } from 'react';
import fontFile from '../../vibe/scss/components/fontFile.scss';

class Answer extends Component {
	state = {
		showMessage: false
	};
	onButtonClickHandler = () => {
		this.setState({ showMessage: true });
	};
	render() {
		return (
			<div>
				<button onClick={this.onButtonClickHandler} className="btn btn-secondary float-right">
					Submit
				</button>

				<button onClick={this.onButtonClickHandler} className="btn btn-success float-right">
					Hints
				</button>
				<br />
				{this.state.showMessage && (
					<div>
						<strong>Answer</strong>
						<p>{this.props.answer}</p>
					</div>
				)}
			</div>
		);
	}
}

class Quiz extends Component {
	state = {};
	render() {
		return (
			<div>
				<h5>{this.props.question}</h5>
				<input type="radio" name="q1" value={this.props.options.option1} />
				{this.props.options.option1}
				<br />
				<input type="radio" name="q2" value={this.props.options.option2} />
				{this.props.options.option2}
				<br />
				<input type="radio" name="q3" value={this.props.options.option3} />
				{this.props.options.option3}
				<br />
				<input type="radio" name="q4" value={this.props.options.option4} />
				{this.props.options.option4}
				<br />
				<Answer answer={this.props.answer} />
			</div>
		);
	}
}

export default Quiz;
