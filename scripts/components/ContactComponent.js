'use strict';

var React = require('react');



module.exports = React.createClass({
	
	render: function() {
		return(
			<div>	
				<div className="formTag">Please Shoot Us an Email!</div>
				<form className="cForm box-shadow--4dp">
					<input placeholder="Your Email"/>
					<input placeholder="Type Subject Here"/>
					<textarea placeholder="Message"/>
					<button>Submit</button>
				</form>
			</div>
			)
	}
	

});