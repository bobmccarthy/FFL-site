'use strict';

var React = require('react');



module.exports = React.createClass({
	
	render: function() {
		return(
			<div>
			
			<div className="galMain">
				<h1>We Love Having Fun!</h1>
				<div className="slideshow">
					<div id="carousel-example-generic" className="carousel slide" data-ride="carousel" data-interval="6000">
						<ol className="carousel-indicators">
							<li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
							<li data-target="#carousel-example-generic" data-slide-to="1"></li>
							<li data-target="#carousel-example-generic" data-slide-to="2"></li>
						</ol>

						<div className="carousel-inner">
							<div className="item active">
								<img className="computer1" src="../../images/basketball.jpg"/>
								<div className="carousel-caption">
									<h3>Basketball</h3>
								</div>
							</div>
							<div className="item">
								<img className="adjust" src="../../images/dance.jpg"/>
								<div className="carousel-caption">
									<h3>Dance!</h3>
								</div>
							</div>
							<div className="item">
								<img src="../../images/new-van.jpg" alt="..."/>
								<div className="carousel-caption">
									<h3>Our New Van!</h3>
								</div>
							</div>
							<div className="item">
								<img src="../../images/bakin.jpg" alt="..."/>
								<div className="carousel-caption">
									<h3>Doing some Baking!</h3>
								</div>
							</div>
							<div className="item">
								<img src="../../images/basketball-lineup.jpg" alt="..."/>
								<div className="carousel-caption">
									<h3>Basketball</h3>
								</div>
							</div>
							<div className="item">
								<img src="../../images/bowling.jpg" alt="..."/>
								<div className="carousel-caption">
									<h3>Bowling</h3>
								</div>
							</div>
						</div>

						
						<a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
							<span className="glyphicon glyphicon-chevron-left"></span>
						</a>
						<a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
							<span className="glyphicon glyphicon-chevron-right"></span>
						</a>
					</div> 
				</div>
			</div>
			</div>
			)
	}
	

});