import React , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import img1 from '../images/Theoryy.png';
import img3 from '../images/Title.png';
import img2 from '../images/caseStudy.png';
import "./card-style.css"

export class Navigation extends Component {
  
    styles =  {
        height: 50,
        width: 100,
        height: 100,
        // margin: 0,
    };
    
//https://picsum.photos/200
    render() {
        return (
            <Navbar bg="dark" expand="lg" className="sticky-nav navbar navbar-default row" id="mNavbar">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto justify-content-between">
                            <NavLink className="d-inline p-2 bg-dark text-white"
                            to="/">
                                <img style={this.styles} src={img3} className="img-responsive " />
                            </NavLink>
                            <NavLink className="d-inline p-2 bg-dark text-white"
                            to="/page1"><img style={this.styles} src={img1} className="img-responsive" /></NavLink>
                            <NavLink className="d-inline p-2 bg-dark text-white"
                            to="/page2"><img style={this.styles} src={img2} className="img-responsive" /></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        );
    }
}