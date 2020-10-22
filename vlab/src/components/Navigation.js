import React , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap'

export class Navigation extends Component {
  
    styles =  {
        height: 50,
        // hover: {
        //     transform: scale(1.5)
        // }
    };
//https://picsum.photos/200
    render() {

        return (
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink className="d-inline p-2 bg-dark text-white"
                        to="/">
                            <div class="view overlay zoom">
                            <img style={this.styles} src="./homeIcon.jpg" className="img-responsive" />
                            </div>
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white"
                        to="/page1"><img style={this.styles} src="https://picsum.photos/200" className="img-responsive" /></NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white"
                        to="/page2"><img style={this.styles} src="https://picsum.photos/200" className="img-responsive" /></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}