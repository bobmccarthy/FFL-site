'use strict';

var React = require('react');



module.exports = React.createClass({
	
	render: function() {
		return(
			<div>	
				<footer className="footer">
					<div className="a row">
						<div className="col-xs-12 col-sm-3">© FriendshipsForLife 2015</div>
						<div className="col-xs-12 col-sm-3"><a href="#map">Map</a></div>
						<div className="col-xs-12 col-sm-3"><a href="#about">About</a></div>
						<div className="col-xs-12 col-sm-3" onClick={this.signIn}>Staff</div>
					</div>
				</footer>
			</div>
			)
	},
	signIn: function(){
		var pas = window.prompt('password?');
		if (pas=='1234'){
			this.props.router.navigate('#receive', {trigger:true});
		}
		else{
			this.props.router.navigate('#contact', {trigger:true});
		}
	}

});