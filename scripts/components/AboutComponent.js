'use strict';

var React = require('react');
var query = new Parse.Query(Parse.User);
var staffy = (<div></div>);

module.exports = React.createClass({
	getInitialState: function(){
		return{
			staff: [],
			counter: 0
		}
	},
	componentWillMount: function(){
		query.find({
			success: (emp)=> {
				this.setState({staff: emp, counter: 1});
			}
		});
	},
	render: function() {
		if (this.state.counter==1){
			console.log(this.state.staff);
			staffy = this.state.staff.map((each)=>{
				return(
					<div key={each.id} className="staffBio box-shadow--4dp">
						<div className="staffName">{each.get('Name')}</div>
						<img className="staffPic" src={each.get('PicUrl')}/>
						<div className="staffPos">{each.get('Position')}</div>
						
						<div className="staffEmail"><a href={'mailto:'+each.get('email')} target="_top">{each.get('email')}</a></div>
						<div className="flip">+</div>
					</div>
				)

			})

		}
		

		return(
			<div>
				<div className="textBlo">

					<div className="bioContainer">
						{staffy}
					</div>

					<div className="paragraph">
						<h1>HELPING ADULTS WITH DISABILITIES LIVE, WORK AND SERVE.</h1>
						<div className="section1">
							<h2>Community Prep program</h2>
							<p>FFL helps adults with disabilities live, work and serve the Texas Hill Country</p>
						</div>
						<div className="section1">
							<h2>Daily Activities:</h2>
							<p>Beginning-of-day routines, exploring current events, continuing education in the areas of reading and math, putting together favorite recipes and everyone doing their part to help stay organized and on schedule.</p>
						</div>
						<div className="section1">
							<h2>Work and Projects</h2>
							<p>Our work will include projects such as helping run the Springs Food Pantry, making and marketing our arts and crafts, and expanding our greeting card business. We will develop a work/serve program with local businesses, a beginner walking program and Bible study group all to include the community.</p>
						</div>

					</div>

					
					
				</div>
				
			</div>
		)
	}
	

});
// <div className="pGraph">Friendships for Life (FFL) is a Community Prep program to help adults with disabilities live, work and serve the Texas Hill Country. Daily activities will include learning to come together as a <i>family</i> with things like beginning-of-day routines, exploring current events, continuing education in the areas of reading and math, putting together favorite recipes and everyone doing their part to help stay organized and on schedule.Our work will include projects such as helping run the Springs Food Pantry, making and marketing our arts and crafts, and expanding our greeting card business. We will also develop a work/serve program with local businesses, a beginner walking program and Bible study group all to include community "Joiners". Joiners can be anyone from the community who will participate with us in a reciprocally, beneficial way.  Friendships for Life members will participate in the community through volunteerism as well as becoming involved in other organizations of interest that host events in the area (DS Cook-off Club, Farmer`s Market, etc.). We will serve the elderly community through an "adopt a grandparent" program and visiting the skilled nursing center. FFL will also host events of our own to give local students and adults of all abilities a place to gather socially. With support from Friendships for Life, our Friends will participate in a new world where they will continue to learn employment skills, communication skills, how to develop friendships and adult living skills in order to build their greatest degree of independence. Our main goal is to help our members of FFL find a path where they are able to serve their community. Each path is different, and each path requires educating not only the person themselves, but also those they come in contact with in order to help them achieve their goals.</div>
