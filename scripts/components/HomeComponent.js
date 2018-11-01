'use strict';

var React = require('react');
var BlogModel = require('../models/BlogModel');
var blogQuery = new Parse.Query(BlogModel);
var userQuery = new Parse.Query(Parse.User);
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
				this.setState({post: products.reverse()});
			});
		},
		
		render: function() {

			if (this.state.post.length>0){
				var count = 0;
				ja = this.state.post.map((product) => {
					count ++;
					if (count==1){
						return (
							<div key={product.id} className="row van">
								<div><h2>{product.get('Title')}</h2></div>
								<img className="vanpic col-xs-12 col-md-6" src={product.get('url')}/>
								<div className="uvan col-xs-12 col-md-6">
									<div>{product.get('Words')}</div>
								</div>
							</div>
						);
					}else{
						return(
							<div key={product.id}></div>
							);
					}
					
				})
			}
			
			return(
				<div>
					<div className="hero">
						<div className="hero-text">
							<h5>A Texas Hill Country Community For Special Populations</h5>
							<h2>Friendships For Life</h2>
							
						</div>
					</div>
					<div className="i-logo">
						I learn. I serve. I dream. I can!
					</div>
						
					<div className="around-all">			
						<div className="aroundOne box-shadow--4dp">	
							<h2>I Learn</h2>
							<div>Friendships For Life is building opportunities with our special populations to enrich and bless their communities by sharing their uniquely individual, God given purpose through friendships and service.</div>
						</div>
						
						<div className="aroundOne box-shadow--4dp">
							<h2>I Serve</h2>
							<div>The Dripping Springs Community Foundation invited Friendships for Life to participate in the "Givin' Where I'm Livin" campaign in 2014. All donations made to Friendships for Life were matched. For more info click the cowboy hat!</div>
						</div>
									
						<div className="aroundOne box-shadow--4dp">	
							<h2>I Dream</h2>
							<div>Our work will include projects such as helping run the Springs Food Pantry, making and marketing our arts and crafts, and expanding our greeting card business.</div>
						</div>
					
						<div className="aroundOne box-shadow--4dp">
							<h2>I Can</h2>
							<div>Our main goal is to help our members of FFL find a path where they are able to serve their community. Each path is different, and each path requires educating not only the person themselves, but also those they come in contact with in order to help them achieve their goals.</div>
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
		

	})

