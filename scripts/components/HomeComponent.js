'use strict';

var React = require('react');



module.exports = React.createClass({
	
	render: function() {
		return(
			<div>
				<div>
					<div>
						<img className="twistyt" src="images/bannerbow.jpg"/>
					</div>
					<div className="logo">
						<img className="logo-text" src="images/logo-learn-serve.jpg"/>
					</div>
					
				</div>
				<div className="backgroundArea">	
					<div className="container-fluid">
						<div className="row">	
							<div className="aroundOne box-shadow--4dp">	
								<div className="ican col-xs-12 col-sm-4 col-md-2">I Learn</div>
								<img className="saywhat col-xs-1" src="images/saywhat.jpg"/>
								<div className="textblock col-xs-11 col-sm-7 col-md-3">Friendships For Life is building opportunities with our special populations to enrich and bless their communities by sharing their uniquely individual, God given purpose through friendships and service.</div>
							</div>
							
							<div>
								<div className="ican iserve col-xs-12 col-sm-4 col-md-2">I Serve</div>
								<div className="textblock col-xs-11 col-sm-7 col-md-3">The Dripping Springs Community Foundation invited Friendships for Life to participate in the "Givin' Where I'm Livin" campaign in 2014. All donations made to Friendships for Life were matched. For more info click the cowboy hat!</div>
								<img className="saywhat-right col-xs-1" src="images/saywhat-right.jpg"/>
							</div>
							
						</div>
					</div>

					<div className="container-fluid learnServe">
						<div className="row">	
							<div>	
								<div className="ican col-xs-12 col-sm-4 col-md-2">I Dream</div>
								<img className="saywhat col-xs-1" src="images/saywhat.jpg"/>
								<div className="textblock col-xs-11 col-sm-7 col-md-3">Friendships For Life is building opportunities with our special populations to enrich and bless their communities by sharing their uniquely individual, God given purpose through friendships and service.</div>
							</div>
						
							<div>
								<div className="ican iserve col-xs-12 col-sm-4 col-md-2">I Can</div>
								<div className="textblock col-xs-11 col-sm-7 col-md-3">The Dripping Springs Community Foundation invited Friendships for Life to participate in the "Givin' Where I'm Livin" campaign in 2014. All donations made to Friendships for Life were matched. For more info click the cowboy hat!</div>
								<img className="saywhat-right col-xs-1" src="images/saywhat-right.jpg"/>
							</div>
						</div>
					</div>
				</div>	
				<div className="container-fluid">
					<div className="row van">
						<img className="vanpic col-xs-12 col-md-6" src="images/new-van.jpg"/>
						<div className="uvan col-xs-12 col-md-6">FFL RECENTLY RECEIVED A GENEROUS DONATION FROM ANOTHER AREA NON-PROFIT - THE FRANKLIN FAMILY RANCH. Larry and Charlotte Franklin have answered a prayer by donating a 15 passenger van to Friendships for Life. With this donation, we can now more than double the size of the program. THANK YOU!</div>
					</div>
				</div>
				<div className="fut container-fluid">
					<div className="row">
						<div className="future col-xs-12 col-sm-5">The Future is Bright!</div>
						<div className="team col-xs-12 col-sm-6">Our team is currently using the facilities at Church of the Springs, in Dripping Spring. The plan to expand into our own building on the church grounds is on the horizon! </div>	
					</div>
				</div>
			</div>
			)
	}
	

});
