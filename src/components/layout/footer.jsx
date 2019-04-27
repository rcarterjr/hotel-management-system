import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<section id="footer">
			<div class="container">
				<div class="row text-center text-xs-center text-sm-left text-md-left">
					<div class="col-xs-12 col-sm-4 col-md-4">
						<h5> Quick Links</h5>
						<ul class="list-unstyled quick-links">
							<li>
								<NavLink exact={true} to="/">
									<i class="fa fa-angle-double-right" /> Home
								</NavLink>
							</li>
							<li>
								<NavLink exact={true} to="/about">
									<i class="fa fa-angle-double-right" /> About Us
								</NavLink>
							</li>
							<li>
								<NavLink exact={true} to="/reservations">
									<i class="fa fa-angle-double-right" /> Make Reservations
								</NavLink>
							</li>
							<li>
								<NavLink exact={true} to="/suite">
									<i class="fa fa-angle-double-right" />
									Suite
								</NavLink>
							</li>
							{/* <li><NavLink exact ={true} to ='/contact'><i class="fa fa-angle-double-right"></i>Contact</NavLink></li> */}
						</ul>
					</div>
					<div class="col-xs-12 col-sm-8 col-md-8">
						<h5> Our mission</h5>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
