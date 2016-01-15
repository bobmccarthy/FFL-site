'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');


var HomeComponent = require('./components/HomeComponent');
var NavComponent = require('./components/NavComponent');
var AboutComponent = require('./components/AboutComponent');
// $(document).ready(function(){
// 	$('.collapse').collapse();
// })

$(document).on('ready', function(){
	
	var Router = Backbone.Router.extend({
		routes: {
			'': 'home',
			'about': 'about'
		},

		home: function(){
			ReactDOM.render(<HomeComponent />,
			document.getElementById('main'));

			
		},
		about: function(){
			ReactDOM.render(<AboutComponent />,
			document.getElementById('main'));
			
		}
	});

	ReactDOM.render(<NavComponent />,
		document.getElementById('nav'));

	var r = new Router();
	Backbone.history.start();

})


