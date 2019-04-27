import React from "react";
import Menu from "./menu";

const Header = () => {
	return (
		<header>
			<div class="title">
				<h1>The Marriott</h1>
			</div>
			<div class="sub-title">
				<Menu tagline="" />

				<div className="clearfix" />
			</div>
		</header>
	);
};

export default Header;
