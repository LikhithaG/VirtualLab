import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import  img1  from "../images/Theoryy.png";
import  img2 from "../images/caseStudy.png";
import  img3  from "../images/Title.png";
import "./card-style.css";

export class Navigation extends Component {
  styles = {
    height: 50,
    width: 100,
    height: 100,
  };

  render() {
    return (
      // <div className="container-fluid">
      <Navbar bg="dark" expand="lg" className="sticky-nav" data-spy="affix" data-offset-top="197">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto justify-content-between">
            <NavLink className="d-inline p-2 bg-dark text-white" to="/">
              <img style={this.styles} src={img3} className="img-responsive" />
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/Theory">
              <img style={this.styles} src={img1} className="img-responsive" />
            </NavLink>
            <NavLink
              className="d-inline p-2 bg-dark text-white"
              to="/Excersise"
            >
              <img style={this.styles} src={img2} className="img-responsive" />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      // </div>
    );
  }
}
