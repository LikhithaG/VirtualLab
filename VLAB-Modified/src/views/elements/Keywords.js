import React, { Component } from 'react';
import Owner from '../../assets/images/BusinessOwner.jpeg';
import Teams from '../../assets/images/TeamMembers.jpeg';
import Fibonacci from '../../assets/images/Fibonacci.png';
import Consensus from '../../assets/images/Consensus.jpg';
import storyPoints from '../../assets/images/storyPoints.png';
import '../../vibe/scss/components/Keywords.scss';
import ReactTooltip from 'react-tooltip';

class Keywords extends Component {
	state = {};
	render() {
		return (
			<div className="sample-body">
				<div className="container  h-50 d-flex justify-content-center align-items-center ">
					<div className="row imgBx">
						<div className="col-md-4 imgs" data-tip data-for="registerTip1">
							<img src={Fibonacci} />
							<ReactTooltip id="registerTip1" place="bottom" effect="solid">
								Fibonacci Series : F[n] = F[n-1] + F[n-2]
							</ReactTooltip>
						</div>

						<div className="col-md-4 imgs" data-tip data-for="registerTip2">
							<img src={Owner} />
							<ReactTooltip id="registerTip2" place="bottom" effect="solid">
								Product Owner: Represent customer interest
							</ReactTooltip>
						</div>

						<div className="col-md-4 imgs" data-tip data-for="registerTip3">
							<img src={Teams} />
							<ReactTooltip id="registerTip3" place="bottom" effect="solid">
								Team Members : Participate in estimation
							</ReactTooltip>
						</div>
					</div>

					<div className="row imgBx imgBx2">
						<div className="col-xs-6 col-md-6" data-tip data-for="registerTip4">
							<img src={storyPoints} className="img1" />
							<ReactTooltip id="registerTip4" place="left" effect="solid">
								Story Point : Unit of<br /> Measure to estimate effort
							</ReactTooltip>
						</div>

						<div className="col-xs-6 col-md-6" data-tip data-for="registerTip5">
							<img src={Consensus} className="img2" />
							<ReactTooltip id="registerTip5" place="right" effect="solid">
								Consensus : Discussion<br />to arrive at a common decision
							</ReactTooltip>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Keywords;
