/**
*
* Footer
*
*/

import React from 'react';
// import styled from 'styled-components';


const Footer = () => { // eslint-disable-line react/prefer-stateless-function
    return (
		<div>
			<footer>
				<div className="container-fluid">
				    <nav className="pull-left">
				        <ul>
				            <li>
				                <a href="#">
				                    Home
				                </a>
				            </li>
				            <li>
				                <a href="#">
				                    Company
				                </a>
				            </li>
				            <li>
				                <a href="#">
				                    Portfolio
				                </a>
				            </li>
				            <li>
				                <a href="#">
				                   Blog
				                </a>
				            </li>
				        </ul>
				    </nav>
				    <p className="copyright pull-right">
				        © 2017 <a href="http://www.creative-tim.com">Creative Tim</a>, made with love for a better web
				    </p>
				</div>
			</footer>
		</div>
    );
}



export default Footer;
