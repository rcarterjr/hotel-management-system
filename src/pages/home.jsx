import React, { Component } from "react";

class Home extends Component {
	render() {
		return (
			<main>
				<section>
					<div class="welcome_info">
						<div class="col-xs-12 col-sm-6 col-md-6">
							<h1>WELCOME TO THE MARRIOTT</h1>
						</div>

						<div class="col-xs-12 col-sm-6 col-md-6">
							<p>
								The Marriott has been voted the best hotel in America 5 years in
								a row. Visit our reservations page to schedule your getaway
								today!
							</p>
						</div>
					</div>

					<div class="welcome_border" />

					<div class="contact_info">
						<div>
							<h3>HEADQUARTERS</h3>

							<div id="bulletts_location">
								<a href="https://www.google.com/maps/place/38%C2%B059'05.0%22N+77%C2%B006'47.0%22W/@38.984722,-77.113056,12z/data=!4m5!3m4!1s0x0:0x0!8m2!3d38.984722!4d-77.113056?hl=en">
									<span class="glyphicon glyphicon-map-marker">
										Bethesda, Maryland, United States
										<br />
									</span>
								</a>
							</div>

							<div id="contact_number">
								<a href="tel:18005354028">
									<span class="glyphicon glyphicon-earphone">
										1-800-535-4028 <br />
									</span>
								</a>
							</div>

							<div id="contact_email">
								<a href="mailto: contact@marriott.com">
									<span class="glyphicon glyphicon-envelope">
										contact@marriott.com
									</span>
								</a>
							</div>
						</div>
					</div>

					<div class="hours_of_operation">
						<h3>Founded</h3>
						<p>1957, 62 years ago</p>

						<div class="hours_of_operation">
							<h3>Areas Served</h3>
							<p>Worldwide</p>
						</div>

						<div class="hours_of_operation">
							<h3>Number of Locations</h3>
							<p>566 hotels</p>
						</div>
					</div>
				</section>
			</main>
		);
	}
}

export default Home;
