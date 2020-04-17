import React from 'react';
import PropTypes from 'prop-types';

export default class AboutSlide extends React.Component {

	render() {
		return (
			<div className="home-slide h-100" id="home-slide">
				<div className="row align-items-center mx-auto h-100">
					<div className="col-lg-10 col-md-10 home-content">
						<h2 className="subhead">ABOUT  <span className="heighlight">ME</span> </h2>
						<h5 className="info-head"><i class="fa fa-user"></i> PERSONAL INFO</h5>
						<p className="para">We love what we do and we do what our clients love & work with great clients all over the world to create thoughtful and purposeful websites. Website without visitors is like a ship lost in the horizon. We love what we do and we do what our clients love & work with great clients all over the world to create thoughtful.</p>
						
						<div className="row">
							<div className="col-lg-6">
								<p>First Name : Jhon</p>
								<p>Last Name : Doe</p>
								<p>Date of birth : 15 June 1997</p>
								<p>Nationality : U.S</p>
								<p>Freelance : Available</p>
							</div>
							<div className="col-lg-6">
								<p>Phone : +123 456 7890</p>
								<p>Address : California, U.S</p>
								<p>Email : you@yourwebsite.com</p>
								<p>Spoken : English - German</p>
								<p>Skype : jhon.doe</p>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<a href="#" className="btn-clr btn"> Download Resume </a>
								<a href="#" className="btn-tfr btn"> Blog </a>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}