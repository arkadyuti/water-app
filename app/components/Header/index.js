/**
*
* Header
*
*/

import React from 'react';
// import styled from 'styled-components';


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container-fluid header">
			<div className="logo navbar-left">
	    		<a className="simple-text" href="https://www.creative-tim.com">
			        <div className="logo-img">
			            <img src="/img/angular2-logo-red.png"/>
			        </div>
			        wolfpacks 
			    </a>
			</div>
			<ul className="nav navbar-nav navbar-right navbar right-header">
	            <li>
	                <a className="dropdown-toggle" data-toggle="dropdown" href="#pablo">
	                    <i className="material-icons">dashboard</i>
	                    <p className="hidden-lg hidden-md">Dashboard</p>
	                </a>
	            </li>
	            <li className="dropdown">
	                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
	                    <i className="material-icons">notifications</i>
	                    <span className="notification">5</span>
	                    <p className="hidden-lg hidden-md">Notifications</p>
	                </a>
	                <ul className="dropdown-menu">
	                    <li><a href="#">Mike John responded to your email</a></li>
	                    <li><a href="#">You have 5 new tasks</a></li>
	                    <li><a href="#">You're now friend with Andrew</a></li>
	                    <li><a href="#">Another Notification</a></li>
	                    <li><a href="#">Another One</a></li>
	                </ul>
	            </li>
	            <li>
	                <a className="dropdown-toggle" data-toggle="dropdown" href="#pablo">
	                   <i className="material-icons">person</i>
	                   <p className="hidden-lg hidden-md">Profile</p>
	                </a>
	            </li>
	        </ul>
		</div>
    );
  }
}

Header.propTypes = {

};

export default Header;
