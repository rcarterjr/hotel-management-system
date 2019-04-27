import React from "react";
import { NavLink } from "react-router-dom";

const NewNavigation = () => {
	return (
		<body>
			<div class="wrapper">
				<header>
					<nav>
						<div class="menu-icon">
							<i class="fa fa-bars fa-2x" />
						</div>
						<div class="logo">The Marriott</div>
						<div class="menu">
							<ul>
								<li>
									<NavLink exact={true} activeClasName="active" to="/">
										Home
									</NavLink>
								</li>
								<li>
									<NavLink exact={true} activeClasName="active" to="/about">
										About Us
									</NavLink>
								</li>
								<li>
									<NavLink
										exact={true}
										activeClasName="active"
										to="/reservations"
									>
										Make Reservations
									</NavLink>
								</li>
								<li>
									<NavLink exact={true} activeClasName="active" to="/suites">
										Our Suites
									</NavLink>
								</li>
							</ul>
						</div>
					</nav>
				</header>
			</div>
		</body>
	);
};

export default NewNavigation;
