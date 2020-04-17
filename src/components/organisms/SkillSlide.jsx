import React from 'react';
import PropTypes from 'prop-types';

export default class SkilSlide extends React.Component {

	render() {
		return (
			<div className="home-slide h-100" id="home-slide">
				<div className="row align-items-center mx-auto h-100">
					<div className="col-lg-10 col-md-10 home-content">
						<h2 className="subhead">MY  <span className="heighlight">SKILLS</span> </h2>
						<h5 className="info-head"><i class="fa fa-user"></i> PERSONAL SKILL</h5>
						<p className="para">We love what we do and we do what our clients love & work with great clients all over the world to create thoughtful and purposeful websites. Website without visitors is like a ship lost in the horizon. We love what we do and we do what our clients love & work with great clients all over the world to create thoughtful.</p>
						
						<div className="row">
							<div className="col-lg-6">
								<p>HTML</p>
								<p>CSS</p>
								<p>JQUERY</p>
								<p>PHOTOSHOP</p>
							</div>
							<div className="col-lg-6">
								<p>Javascript</p>
								<p>React JS</p>
								<p>Angular JS</p>
								<p>Node Js</p>
								<p>Express Js</p>
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