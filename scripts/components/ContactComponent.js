'use strict';

var React = require('react');
var MailModel = require('../models/MailModel');



module.exports = React.createClass({
	
	render: function() {
		return(
			<div>	
				<div className="formTag">Please Shoot Us an Email!</div>
				<form onSubmit={this.mmessage} className="cForm box-shadow--4dp">
					<input ref="emailM" placeholder="Your Email"/>
					<input ref="subject" placeholder="Type Subject Here"/>
					<textarea ref="message" placeholder="Message"/>
					<button>Submit</button>
				</form>
			</div>
			)
	},
	mmessage: function(e){
		e.preventDefault();
		var messageAdd= new MailModel();
		messageAdd.set('MailAddress', this.refs.emailM.value);
		messageAdd.set('Subject', this.refs.subject.value);
		messageAdd.set('Message', this.refs.message.value);
		messageAdd.save({
			success: ()=>{
				window.alert('Your message has been sent!');
				this.props.router.navigate('#', {trigger: true});
			}
		});

	}

	

});