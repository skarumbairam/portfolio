import React from 'react';
import PropTypes from 'prop-types';
import img from '../../assets/images/profile.jpg';

export default class Header extends React.Component {

	render() {
		return (
			<div className="header">
				
				<div className="quick-info">
					<div className="header-avatar">
						<img className="img-fluid rounded" src={img}  alt="profile" />
					</div>
					<div className="header-contact">
						 <p><i className="fa fa-briefcase"></i> Web Developer</p>
						 <p><i className="fa fa-envelope"></i> senthil.karumbairam@gmail.com</p>
						 <p><i className="fa fa-home"></i> Chennai, Tamilnadu, India</p>
						 <p><i className="fa fa-phone"></i> +91 90447783306</p>
					</div>
				</div>
				<nav className="header-side__nav"> 
					<ul>
						<li><a href="">Home</a></li>
						<li><a href="">About Me</a></li>
						<li><a href="">Skills</a></li>
						<li><a href="">Experience</a></li>
						<li><a href="">Portfolio</a></li>
						<li><a href="">Blog</a></li>
						<li><a href="">Contact</a></li>
					</ul>
				</nav>
			</div>
		)
	}
}
