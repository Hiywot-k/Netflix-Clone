import React, { Component } from "react";
// import {Link} from "react-router-dom"

class NavLinks extends Component {
  render() {
    return (
      <li className="nav-item">
        <a  className="" href={this.props.urlLinks}>
         {this.props.urlName}
        </a>
      </li>
    );
  }
}
export default NavLinks
