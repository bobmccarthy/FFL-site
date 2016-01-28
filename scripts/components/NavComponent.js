'use strict';

var React = require('react');

module.exports = React.createClass({
	
	render: function() {
		return(
			<div>
				

				<nav classNameName="navbar navbar-default navbar-fixed-top ">
			  		<div className="container-fluid">
			    		<div className="navbar-header">
			      			<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        			<span className="sr-only">Toggle navigation</span>
			        			<span>Menu </span>
			        			<span className="glyphicon glyphicon-menu-hamburger"></span>
			        			
			      			</button>
			      			<a className="navbar-brand" href="#"><span className="friendships">Friendships</span><span  className="for">For</span><span className="life">Life</span><span className="dotcom">.org</span></a>
			    		</div>
			    		<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      			<ul className="nav navbar-nav navbar-right">
			          			<li onClick={this.collapseIt}><a href="#">Home</a></li>
			          			<li onClick={this.collapseIt}><a href="#about">About</a></li>
			          			<li onClick={this.collapseIt}><a href="#gallery">Gallery</a></li>
			          			<li onClick={this.collapseIt}><a href="#blog">Blog</a></li>
			          			<li onClick={this.collapseIt}><a href="#map">Map</a></li>
			          			<li onClick={this.collapseIt}><a href="#contact">Contact</a></li>
			        		</ul>
			    		</div>
			 		</div>
				</nav>
				<header>
					<div>
						<img className="photostrip" src="images/photostrip.jpg"/>
					</div>
					<div className="tagLine">A Texas Hill Country Community For Special Populations</div>
					
					
				</header>
			</div>
			)
	},
	collapseIt: function(){
		console.log('clicked');
		$('.navbar-collapse').collapse('hide');
	}
	

});
