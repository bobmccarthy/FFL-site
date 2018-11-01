'use strict';

var React = require('react');
var BlogModel = require('../models/BlogModel');
var blogQuery = new Parse.Query(BlogModel);


module.exports = React.createClass({
	getInitialState: function(){
		return {
			posts: []
		}
	},
	componentWillMount: function(){
		blogQuery.find().then((list)=> {
			this.setState({posts: list.reverse()})
			}
		);
	},
	render: function() {
		var table = this.state.posts.map((entry)=>{
			return(
				<div key={entry.id} className="eachEntry box-shadow--4dp">
					<div className="titleTag">{entry.get('Title')}</div>
					
					<div>	
						<img src={entry.get('url')} />
					</div>	
					
					<div className="mesTag">{entry.get('Words')}</div>
				</div>
			)
		})
		return(
			<div className="blogPage">
				{table}
			</div>
			)
	}

	

});