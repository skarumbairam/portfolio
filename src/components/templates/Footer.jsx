import React from 'react';
import PropTypes from 'prop-types';

export default class Footer extends React.Component {

	render() {
		return (
			<section className="footer">
				<p>Find me on social media.</p>
				  <i class="fa fa-facebook-official"></i>
				  <i class="fa fa-instagram"></i>
				  <i class="fa fa-snapchat"></i>
				  <i class="fa fa-pinterest-p"></i>
				  <i class="fa fa-twitter"></i>
				  <i class="fa fa-linkedin"></i>
			</section>
		)
	}
}