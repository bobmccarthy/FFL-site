'use strict';

var React = require('react');
var BlogModel = require('../models/BlogModel');
var text = '<------ Upload Image Here';



	module.exports = React.createClass({
		

		render: function() {
			return(
				<div>
					<div className="blogPage">
						<input className="xc" type="text" ref="Title" placeholder="Title"/>
						<textarea className="xc" ref="message" placeholder="Type About it Here!"/>
						<input ref="fileP" type="filepicker" data-fp-apikey="ArHb48J6aQ8aoKPymDYIzz" data-fp-mimetypes="*/*" data-fp-container="modal" onchange="alert(event.fpfile.url)" onInput={this.changeroo}/>
						<div className="errorMes">{text}</div>
						<button className="saveBlog" onClick={this.run}>Save Post</button>
					</div>
					<a href="#dashboard"><button className="backTo">Back To Dashboard</button></a>
				</div>
				)
		},
		changeroo: function(){
			text = 'Upload Complete!';
			console.log('finally!');
		},
		run: function(){
		    var blogAdd= new BlogModel();
			blogAdd.set('Title', this.refs.Title.value);
			blogAdd.set('url', this.refs.fileP.value);
			blogAdd.set('Words', this.refs.message.value);
			blogAdd.save({
				success: ()=>{
					console.log('saved file to parse');
					this.props.router.navigate('#dashboard', {trigger: true});
					
				}
			});  
		}
		



		

	});
