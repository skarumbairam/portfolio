import React from 'react';
import PropTypes from 'prop-types';

export default class HomeSlide extends React.Component {

	render() {
		return (
			<div className="home-slide h-100 " id="home-slide">
				<div className="row align-items-center mx-auto h-100">
					<div className="col-lg-10 col-md-10 home-content">
						<h5 className="headline">HI THERE! I'M SENTHILKUMAR</h5>
						<h2 className="subhead">Creative UI <span className="heighlight">FRONT-END/WEB</span> Developer </h2>
						<p className="para">A successful website does three things: It attracts the right kinds of visitors. Guides them to the main services or product you offer.</p>
						<a href="#" className="btn-clr btn"> Hire Me </a>
						<a href="#" className="btn-tfr btn"> Portfolio </a>
					</div>
				</div>
			</div>
		)
	}
}