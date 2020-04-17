import React from 'react';
import HomeSlide from './organisms/HomeSlide';
import AboutSlide from './organisms/AboutSlide';
import SkillSlide from './organisms/SkillSlide';
import ExperienceSlide from './organisms/ExperienceSlide';

import img from '../assets/images/profile.jpg';
import '../assets/css/global.css';
import './utils/bootstrap/bootstrap.min.css';
import './utils/bootstrap/animate.css';


/*import './App.css';*/

export default class App extends React.Component {
  
  render() {
    return (
       <div id="document-body">
	      	<main class="container-fluid">

	      		<div class="row content">
	      			<div className="col-lg-1 col-md-1 col-sm-12"></div>
	      			<header className="col-lg-3 col-md-3 col-sm-12 sidenav">
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
				    </header>

				    <section class="col-lg-8 col-md-8 col-sm-12 main-body">
				        <HomeSlide />
				    </section>     
		        </div>

		    </main>
	   </div>
    );
  }
  
}

