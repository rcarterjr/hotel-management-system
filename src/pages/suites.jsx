import React, { Component } from "react";
//import { BrowserRouter, Route } from 'react-router-dom';
import suite1 from "../img/Gallery/suite1.jpg";
import suite2 from "../img/Gallery/suite2.jpg";
import suite3 from "../img/Gallery/suite3.jpg";
import suite4 from "../img/Gallery/suite4.jpg";
import suite5 from "../img/Gallery/suite5.jpg";
import suite6 from "../img/Gallery/suite6.jpg";
import suite7 from "../img/Gallery/suite7.jpg";
import suite8 from "../img/Gallery/suite8.jpg";
import suite9 from "../img/Gallery/suite9.jpg";

class Suite extends Component {
	render() {
		return (
			<div class="container">
				<div class="row">
					<div class="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<h1 class="gallery-title">Some of Customer's Favorite Suites</h1>
					</div>
					<div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
						<img src={suite1} alt="" class="img-responsive" />
					</div>

					<div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 ">
						<img src={suite2} alt="" class="img-responsive" />
					</div>

					<div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 ">
						<img src={suite3} alt="" class="img-responsive" />
					</div>

					<div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 ">
						<img src={suite4} alt="" class="img-responsive" />
					</div>

					<div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 ">
						<img src={suite5} alt="" class="img-responsive" />
					</div>

					<div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
						<img src={suite6} alt="" class="img-responsive" />
					</div>

					<div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray">
						<img src={suite7} alt="" class="img-responsive" />
					</div>

					<div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
						<img src={suite8} alt="" class="img-responsive" />
					</div>

					<div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
						<img src={suite9} alt="" class="img-responsive" />
					</div>
				</div>
			</div>
		);
	}
}

export default Suite;
