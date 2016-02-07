'use strict';

var React = require('react');
var BlogModel = require('../models/BlogModel');
var blogQuery = new Parse.Query(BlogModel);
var counter=0;
var ja = (<div>Not Yet</div>);

module.exports = React.createClass({
	getInitialState: function(){
		return{
			post: []
		}
	},
	componentWillMount: function(){
		blogQuery.equalTo('Home', true);
		blogQuery.find().then((products) => {
			console.log(products);
			counter=1;
			this.setState({post: products});
		});
	},
	
	render: function() {
		var count=0;
		if (counter==1){

			ja = this.state.post.reverse().map((product) => {
					
					if (count==0){
						count=count+1;
						return (
							<div key={product.id} className="row van">
								<img className="vanpic col-xs-12 col-md-6" src={product.get('url')}/>
								<div className="uvan col-xs-12 col-md-6">
									<div><h2>{product.get('Title')}</h2></div>
									<div>{product.get('Words')}</div>
								</div>
							</div>
						);
					}
					else{
						return (
							<div></div>
						);
					}
					
				
				
			})

		}
		
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
								<div className="textblock col-xs-11 col-sm-7 col-md-3">Our work will include projects such as helping run the Springs Food Pantry, making and marketing our arts and crafts, and expanding our greeting card business.</div>
							</div>
						
							<div>
								<div className="ican iserve col-xs-12 col-sm-4 col-md-2">I Can</div>
								<div className="textblock col-xs-11 col-sm-7 col-md-3">Our main goal is to help our members of FFL find a path where they are able to serve their community. Each path is different, and each path requires educating not only the person themselves, but also those they come in contact with in order to help them achieve their goals.</div>
								<img className="saywhat-right col-xs-1" src="images/saywhat-right.jpg"/>
							</div>
						</div>
					</div>
				</div>	
				<div className="container-fluid">
					{ja}
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
