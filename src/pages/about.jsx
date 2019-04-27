import React, { Component } from "react";
import Bill_Marriot from "../img/artists/bill_marriott.jpg";
import Seth from "../img/artists/seth.jpg";
import Arne_Sorenson from "../img/artists/CEO.jpg";
import Lester from "../img/artists/lester.jpg";
// if we want to add more https://news.marriott.com/p/executive-leadership/

class Artists extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			isLoading: true
		};
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData = () => {
		fetch("http://localhost:4000/getartists")
			.then(response => response.json())
			.then(parsedJSON =>
				parsedJSON.results.map(artist => ({
					Fname: artist.Fname,
					Lname: artist.Lname,
					Artist_rating: artist.Artist_rating
				}))
			)
			.then(artists =>
				this.setState({
					data: artists
				})
			)
			.catch(err => console.log("Error", err));
	};

	render() {
		const { data } = this.state;
		return (
			<main>
				<section class="team">
					<div class="container">
						<div class="row">
							<div class="col-md-10 col-md-offset-1">
								<div class="col-lg-12">
									<h6 class="description">OUR TEAM</h6>
									<div class="row pt-md">
										<div class="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile">
											<div class="img-box">
												<img
													src={Bill_Marriot}
													alt=""
													style={{ width: 210, height: 210 }}
													class="img-responsive"
												/>
											</div>
											<h1>Bill Marriott</h1>
											<h2>Owner</h2>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit.
											</p>
										</div>

										<div class="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile">
											<div class="img-box">
												<img
													src={Arne_Sorenson}
													alt=""
													style={{ width: 210, height: 210 }}
													class="img-responsive"
												/>
											</div>
											<h1>Arne Sorenson</h1>
											<h2>CEO</h2>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit.
											</p>
										</div>

										<div class="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile">
											<div class="img-box">
												<img
													src={Seth}
													alt=""
													style={{ width: 210, height: 210 }}
													class="img-responsive"
												/>
											</div>
											<h1>Seth</h1>
											<h2>Hard worker</h2>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit.
											</p>
										</div>

										<div class="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile">
											<div class="img-box">
												<img
													src={Lester}
													alt=""
													style={{ width: 210, height: 210 }}
													class="img-responsive"
												/>
											</div>
											<h1>Lester</h1>
											<h2>Hard worker</h2>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					{data.map(artist => (
						<li>
							{artist.Fname} {artist.Lname} ⭐ {artist.Artist_rating}
						</li>
					))}
				</section>
			</main>
		);
	}
}
export default Artists;
