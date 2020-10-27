import React , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

export class Navigation extends Component {
  
    styles =  {
        height: 50,
        width: 100,
        height: 100,
    };
    
//https://picsum.photos/200
    render() {

        return (
                <Navbar bg="dark" expand="lg" className="row">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto justify-content-between">
                            <NavLink className="d-inline p-2 bg-dark text-white"
                            to="/">
                                <img style={this.styles} src="./Title.png" className="img-responsive " />
                            </NavLink>
                            <NavLink className="d-inline p-2 bg-dark text-white"
                            to="/page1"><img style={this.styles} src="./Theoryy.png" className="img-responsive" /></NavLink>
                            <NavLink className="d-inline p-2 bg-dark text-white"
                            to="/page2"><img style={this.styles} src="caseStudy.png" className="img-responsive" /></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        );
    }
}