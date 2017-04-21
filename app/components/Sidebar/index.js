/**
*
* Sidebar
*
*/

import React from 'react';
// import styled from 'styled-components';


function Sidebar() {
	return (
	<div className="sidebar" data-color="red" data-image="">
		<div className="logo">
		    <a className="simple-text">
		        <div className="logo-img">
		            <img src="/img/angular2-logo-red.png" />
		        </div>
		        List of Venders
		    </a>
		</div>
		<div className="sidebar-wrapper">
		    <div className="nav-container">
		        <ul className="nav">
		            <li className="active">
		                <a href="#/dashboard">
		                    <i className="material-icons">opacity</i>
		                    <p>Dashboard</p>
		                </a>
		            </li>
		            <li className="">
		                <a href="#/user">
		                    <i className="material-icons">opacity</i>
		                    <p>User Profile</p>
		                </a>
		            </li>
		            <li className="">
		                <a href="#/tablsde">
		                    <i className="material-icons">opacity</i>
		                    <p>Table List</p>
		                </a>
		            </li>
		            <li className="">
		                <a href="#/typography">
		                    <i className="material-icons">opacity</i>
		                    <p>Typography</p>
		                </a>
		            </li>
		            <li className="">
		                <a href="#/icons">
		                    <i className="material-icons">opacity</i>
		                    <p>Icons</p>
		                </a>
		            </li>
		            <li className="">
		                <a href="#/maps">
		                    <i className="material-icons">opacity</i>
		                    <p>Maps</p>
		                </a>
		            </li>
		            <li className="">
		                <a href="#/typography">
		                    <i className="material-icons">opacity</i>
		                    <p>Typography</p>
		                </a>
		            </li>
		            <li className="">
		                <a href="#/icons">
		                    <i className="material-icons">opacity</i>
		                    <p>Icons</p>
		                </a>
		            </li>
		            <li className="">
		                <a href="#/maps">
		                    <i className="material-icons">opacity</i>
		                    <p>Maps</p>
		                </a>
		            </li>
		            <li className="">
		                <a href="#/typography">
		                    <i className="material-icons">opacity</i>
		                    <p>Typography</p>
		                </a>
		            </li>
		            <li className="">
		                <a href="#/icons">
		                    <i className="material-icons">opacity</i>
		                    <p>Icons</p>
		                </a>
		            </li>
		            <li className="">
		                <a href="#/maps">
		                    <i className="material-icons">opacity</i>
		                    <p>Maps</p>
		                </a>
		            </li>
		            <li className="">
		                <a href="#/notifications">
		                    <i className="material-icons">opacity</i>
		                    <p>Notifications</p>
		                </a>
		            </li>
		            
		        </ul>
			    <div className="moving-tab" style={{width: "230px", transform: "translate3d(0px, 20px, 0px)", transition: "all 0.5s cubicBezier(0.29, 1.42, 0.79, 1)"}}>
					<i className="material-icons">dashboard</i>
					<p>Dashboard</p>
				</div>
			</div>
		</div>
		<div className="sidebar-background" style={{ backgroundImage: "url(/img/sidebar-4.jpg)" }}></div>
	</div>
	);
}

Sidebar.propTypes = {

};

export default Sidebar;
