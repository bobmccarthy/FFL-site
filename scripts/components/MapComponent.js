'use strict';

var React = require('react');



module.exports = React.createClass({
	
	render: function() {
		return(
			<div>
				
				<div className="mapInfo">Here is where we live!! Come visit us sometime!<br/>
					Our Address is: <br/>
					230 Sports Park Rd<br/>
					Dripping Springs, TX 78620
					
				</div>

				<div className="map">
					<img className="images" src="images/map.png"/>
				</div>
			
		
				<div className="bottomBit">
					<p className="toSee">To see map:</p>
					<a className="gB" href="https://www.google.com/maps/place/230+Sports+Park+Rd,+Dripping+Springs,+TX+78620/@30.1848712,-98.0843636,17z/data=!3m1!4b1!4m7!1m4!3m3!1s0x865b43d673632091:0xa2e39d7d657082a4!2s230+Sports+Park+Rd,+Dripping+Springs,+TX+78620!3b1!3m1!1s0x865b43d673632091:0xa2e39d7d657082a4">
						<button className="googleMapsButton">Click Here!</button>
					</a>
				</div>
			</div>
			)
	}
	

});