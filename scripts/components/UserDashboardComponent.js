'use strict';

var React = require('react');



module.exports = React.createClass({
	
	render: function() {
		
		return(
			<div className="dash">
				<h2>Hello FFL Staff!</h2>
				<a href="#receive"><button>Get Messages</button></a>
				<a href="#blogCreate"><button>Post to Blog</button></a>
			</div>
			)
	}

	

});