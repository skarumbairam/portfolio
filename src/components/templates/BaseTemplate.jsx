import React from 'react';
import PropTypes from 'prop-types';
import Header  from './Header';
import Footer  from './Footer'
import '../../assets/css/global.css';
import '../utils/bootstrap/bootstrap.min.css';

export default class BaseTemplate extends React.Component {
	render() {
	    return (
	      <div id="document-body">

	      	<main class="container-fluid">

	      		<div class="row content">
	      			<div className="col-lg-1 col-md-1 col-sm-12"></div>
	      			<header className="col-lg-3 col-md-3 col-sm-12 sidenav">
				        <Header />
				    </header>
				    <section class="col-lg-8 col-md-8 col-sm-12 main-body">
				        {this.createBody()}
				    </section>     
		        </div>

		    </main>



	      </div>
	    );
	}
}
