'use strict';

var React = require('react');
var MailModel = require('../models/MailModel');
var MailQuery = new Parse.Query(MailModel);



module.exports = React.createClass({
	getInitialState: function() {
	    return {
	         messages: []
	         
	    };
	},
	componentWillMount: function(){
		MailQuery.find().then((list)=> {
			console.log(list);
			this.setState({messages: list.reverse()})
			}
		);
	},
	
	render: function() {
		var messageOutput = this.state.messages.map((message)=>{
			return(
				<div key={message.id} className="incomingMessage box-shadow--4dp">
					<div className="tim">{message.get('createdAt').toString().substring(0,10)}</div>
					<div className="sub">Subject: {message.get('Subject')}</div>

					<div className="mes">Message: <br/>{message.get('Message')}</div>
					<div className="adr">From: <a href={'mailto:'+message.get('MailAddress')} target="_top">{message.get('MailAddress')}</a></div>
				</div>
				)
		});
		return(
			<div>
				<div className="expText">Read Messages From People:</div>
				{messageOutput}
				<div className="backT">
					<a href="#dashboard"><button className="backTo">Back To Dashboard</button></a>
				</div>
			</div>
			)
	}

	

});