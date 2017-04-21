/**
*
* Main
*
*/

import React from 'react';
// import styled from 'styled-components';
import Sidebar from 'components/Sidebar'

const Main = () => { // eslint-disable-line react/prefer-stateless-function
  
    return (
	<div className="container-fluid">
		<div className="row">
			<div className="col-md-7 col-md-offset-1">
				<div className="card card-plain">
                    <div className="card-header clearfix" data-background-color="red">
                        <form className="navbar-form navbar-left" role="search">
			                <div className="form-group form-black is-empty">
			                    <input className="form-control" placeholder="Search" type="text" />
			                    <span className="material-input"></span>
			                <span className="material-input"></span></div>
			                <button className="btn btn-white btn-round btn-just-icon" type="submit">
			                    <i className="material-icons">search</i><div className="ripple-container"></div>
			                </button>
			            </form>
                    </div>
                    <div className="card-content">
                        <div className="content-wrapper">
                        	dsd
                        </div>
                    </div>
                </div>
			</div>
			<div className="col-md-4">
				<div className="content-wrapper-sidebar">
					<Sidebar />
	            </div>
			</div>
		</div>
	</div>
    );
  
}

let teml = `<div className="map-list map-list-info map-list-with-icon" data-notify="container">
                        <button aria-hidden="true" className="close" type="button">×</button>
                        <i className="material-icons" data-notify="icon">add_alert</i>
                        <span data-notify="message">This is a notification with close button and icon.</span>
                    </div>
					<div className="map-list map-list-info map-list-with-icon" data-notify="container">
                        <button aria-hidden="true" className="close" type="button">×</button>
                        <i className="material-icons" data-notify="icon">add_alert</i>
                        <span data-notify="message">This is a notification with close button and icon.</span>
                    </div>
					<div className="map-list map-list-info map-list-with-icon" data-notify="container">
                        <button aria-hidden="true" className="close" type="button">×</button>
                        <i className="material-icons" data-notify="icon">add_alert</i>
                        <span data-notify="message">This is a notification with close button and icon.</span>
                    </div>`
export default Main;
