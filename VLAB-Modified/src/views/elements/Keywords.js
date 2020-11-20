import React, { Component } from 'react';
import Owner from '../../assets/images/BusinessOwner.jpeg';
import Teams from '../../assets/images/TeamMembers.jpeg';
import Fibonacci from '../../assets/images/Fibonacci.png';
import Consensus from '../../assets/images/Consensus.jpg';
import storyPoints from '../../assets/images/storyPoints.png';
import '../../vibe/scss/components/Keywords.scss';
import fontFile from '../../vibe/scss/components/fontFile.scss';
import ReactTooltip from 'react-tooltip';

class Keywords extends Component {
	state = {};
	render() {
		return (
			<div className="sample-body">
				<div className="container  h-50 d-flex justify-content-center align-items-center ">
					<div className="row imgBx">
						<div className="col-md-4 imgs" data-tip data-for="registerTip1">
							<img src={Fibonacci} alt="Fibonacci" />
							<ReactTooltip id="registerTip1" place="bottom" effect="solid" className="toolTip">
								<p>
									Fibonacci Series : F[n] = F[n-1] + F[n-2]<br /> Usage : These will be card numbers,
									used for estimation
								</p>
							</ReactTooltip>
						</div>

						<div className="col-md-4 imgs" data-tip data-for="registerTip2">
							<img src={Owner} alt="Owner" />
							<ReactTooltip id="registerTip2" place="bottom" effect="solid" className="toolTip">
								<p>
									Product Owner: Represent customer interest<br />
									Responsibility : Define stories and prioritizing the team backlog
								</p>
							</ReactTooltip>
						</div>

						<div className="col-md-4 imgs" data-tip data-for="registerTip3">
							<img src={Teams} alt="Teams" />
							<ReactTooltip id="registerTip3" place="bottom" effect="solid" className="toolTip">
								<p>
									Team Members : Participate in estimation<br />
									Responsibility : They chose poker cards multiple <br />times till their estimation
									converge
								</p>
							</ReactTooltip>
						</div>
					</div>

					<div className="row imgBx imgBx2">
						<div className="col-xs-6 col-md-6" data-tip data-for="registerTip4">
							<img src={storyPoints} className="img1" alt="storyPoints" />
							<ReactTooltip id="registerTip4" place="left" effect="solid" className="toolTip">
								<p>
									Story Point : Unit of
									<br /> Measure to estimate effort<br />
									Usage : Helps evaluate difficulty<br /> level of user stories
								</p>
							</ReactTooltip>
						</div>

						<div className="col-xs-6 col-md-6" data-tip data-for="registerTip5">
							<img src={Consensus} className="img2" alt="Consensus" />
							<ReactTooltip id="registerTip5" place="right" effect="solid" className="toolTip">
								<p>
									Consensus : Discussion
									<br />
									to arrive at<br /> a common decision
								</p>
							</ReactTooltip>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Keywords;
