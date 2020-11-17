import React, { Component } from "react";
import Flipcard from "./Flipcard";
import img8 from "../../assets/images/8.jpg";
import img2 from "../../assets/images/2.jpg";
import img5 from "../../assets/images/5.jpg";
import img3 from "../../assets/images/3.jpg";
import tick from "../../assets/images/tick.jpg";
/*class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
}*/

class Experiment extends Component {
    state = {};
    render() {
      return (
        <div>
            <h1>EXPERIMENT</h1>
            <br></br>
            <br></br>
            <h2>
                Problem Statement :
            </h2>
            <p>
            A product owner wants you to add new features in a website.
            </p>
            <br></br>
            <h2>
                Assumption :
            </h2>
            <p>
            We have already designed the following features :-<br></br>
	        a ) - Checkout<br></br>
	        b) – Payment<br></br>
	        c) – Product Browsing<br></br>
            </p>
            <br></br>
            <p>
            The product owner holds a kickoff meeting, so the team can ensure that Product Backlog
            is well prepared with proper task list. In addition, it helps product owner understand 
            how much of the backlog they can realistically complete in a given time.Suppose there 
            are three members in the team and you are the third member, what features would you
            suggest can be added to the website :-
            </p>
            <br></br>
            <p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Features:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />        
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </p>
            <p>After all the team members suggest their functions a moderator ceates a common task
             list.Suppose our task list contains the following features :-
            <br></br>    a) – Shipping
	        <br></br>    b) – Customer Accounts
	        <br></br>    c) – Catalog Management
	        <br></br>    d) – Search Engine Optimization
	        <br></br>    e) - Analytics
            </p>
            <br></br>
            <br></br>
            <br></br>
            <p>Other than this a document containing problem specification, high level task list, 
            assumptions, and the units of estimation that are decided upon is made. He then forwards
            copies of this document for the next step.
            </p>
            <br></br>
            <br></br>
            <p>An estimation form is made and generated, each team member then individually generates
            a detailed WBS, estimates each task in the WBS (Work Breakdown Structures), and documents
            the assumptions made.
            </p>
            <br></br>
            <br></br>
            <p>We have considered the following situation :-
            <br></br>1- The deadline of these features is 2 months (i.e. all these 4 features are to be added
            to the website within 2 months).
            <br></br>2- Estimation unit – hours/day (for a single developer)
            <br></br>3- We have a team of 4 developers working on the project.
            </p>
            <br></br>
            <br></br>
            <p>An <strong>Estimation Meeting</strong> is held, where all the team members begin flipping through their Planning 
            Poker cards ,looking for the right numbers. 
            </p>
            <br></br>
            <p>
            <strong>Click on the card to flip it.</strong>    
            </p>
            <div className="row">
                <div class="col-sm-3">
                    <Flipcard src={img2} flip={tick} />
                </div>
                <div class="col-sm-3">
                    <Flipcard src={img3} />
                </div>
                <div class="col-sm-3">
                    <Flipcard src={img5} />
                </div>
                <div class="col-sm-3">
                    <Flipcard src={img8} />
                </div>
            </div>
            <br></br>
            <p>The other team members have also flipped their cards with Number 8  and 10 respectively.
            Initially, the range of estimates may be large. So, a discussion is done where each team member reads aloud the
            detailed task list that he/she made, identifying any assumptions made and raising any questions or issues.
            </p>
            <br></br>
            <p>Suppose we are discussing about the Catalog management :<br></br>
                Can you guess what modules will be the part of the given function :-
            </p>
            <br></br>
            <p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Guess modules of Customer Accounts :
                        <input type="text" value={this.state.value} onChange={this.handleChange} />        
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </p>
            <p>The features can be :
            </p>
            <ul class="list-features-catalog-management">
            <li class="list-group-item list-group-item-success">Order status and history</li>
                <li class="list-group-item list-group-item-info">Re-orders from account </li>
                <li class="list-group-item list-group-item-success">Address Book with unlimited addresses</li>
                <li class="list-group-item list-group-item-info">Wishlist with ability to add comments </li>
                <li class="list-group-item list-group-item-success">Product Reviews submitted </li>
            </ul>
            <br></br>
            <br></br>
            <p>Similary other features will have the following modules -</p>
            <div className="row">
                <div class="col-sm-6">
                    <p><strong>Shipping </strong></p>
                    <ul class="list-features-Shipping">
                        <li class="list-group-item list-group-item-success">Integrated for real-time shipping rates</li>
                        <li class="list-group-item list-group-item-info">On-site order tracking from customer accounts </li>
                        <li class="list-group-item list-group-item-success">Flat rate shipping per item </li>
                        <li class="list-group-item list-group-item-info">Shipping to multiple addresses in one order </li>
                        <li class="list-group-item list-group-item-success">Free Shipping  </li>
                    </ul>
                </div>
                <div class="col-sm-6">
                    <p><strong>Catalog Management</strong></p>
                    <ul class="list-features-catalog-management">
                        <li class="list-group-item list-group-item-success">Inventory Management with quantities</li>
                        <li class="list-group-item list-group-item-info">Batch Import and Export of catalog </li>
                        <li class="list-group-item list-group-item-success">Batch Updates to products in admin panel</li>
                        <li class="list-group-item list-group-item-info">Google Base Integration </li>
                        <li class="list-group-item list-group-item-success">Simple, Configurable (e.g. Size, color, etc.), Bundled and Grouped Products </li>
                        <li class="list-group-item list-group-item-info">Downloadable/Digital Products </li>
                    </ul>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="row">
                <div class="col-sm-6">
                    <p><strong>Search Engine Optimization</strong></p>
                    <ul class="list-features-Search-Engine-Optimization">
                        <li class="list-group-item list-group-item-success">100% Search Engine Friendly</li>
                        <li class="list-group-item list-group-item-info">Google Site Map  </li>
                        <li class="list-group-item list-group-item-success">Meta_information for products and categories </li>
                        <li class="list-group-item list-group-item-info">Auto-generated Site Map for display on site </li>
                        <li class="list-group-item list-group-item-success">Auto-Generated Popular Search Terms Page  </li>
                    </ul>
                </div>
                <div class="col-sm-6">
                    <p><strong>Analytics and Reporting</strong></p>
                    <ul class="list-features-Analytics-and-Reporting">
                        <li class="list-group-item list-group-item-success">Integrated with Boodle Analytics</li>
                        <li class="list-group-item list-group-item-info">Admin Dashboard for Report Overview</li>
                        <li class="list-group-item list-group-item-success">Sales Report </li>
                        <li class="list-group-item list-group-item-info">RSS feed for New Orders </li>
                        <li class="list-group-item list-group-item-success">Tax Report </li>
                    </ul>
                </div>
            </div>
            <br></br>
            <p>Now, we give our estimate using Poker Cards again and the above process is repeated until a concensus-based decision is made.</p>
            <br></br>
            <p>Here, the final number can be any fibonacci series nuber like <strong>2, 3, 5, 8, 10 ...</strong> so on.
            <br></br>
            A final number is decided upon by all the estimation team members.
            </p>
        </div>
        );
    }
}

export default Experiment;