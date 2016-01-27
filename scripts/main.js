'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');


var HomeComponent = require('./components/HomeComponent');
var NavComponent = require('./components/NavComponent');
var AboutComponent = require('./components/AboutComponent');
var GalleryComponent = require('./components/GalleryComponent');
var MapComponent = require('./components/MapComponent');
var FooterComponent = require('./components/FooterComponent');
var ContactComponent = require('./components/ContactComponent');

// $(document).ready(function(){
// 	$('.collapse').collapse();
// })

$(document).on('ready', function(){
	
	var Router = Backbone.Router.extend({
		routes: {
			'': 'home',
			'about': 'about',
			'gallery': 'gallery',
			'map': 'map',
			'contact': 'contact'
		},

		home: function(){
			ReactDOM.render(<HomeComponent />,
			document.getElementById('main'));

			
		},
		about: function(){
			ReactDOM.render(<AboutComponent />,
			document.getElementById('main'));
			
		},
		gallery: function(){
			ReactDOM.render(<GalleryComponent />,
			document.getElementById('main'));
			
		},
		map: function(){
			ReactDOM.render(<MapComponent />,
			document.getElementById('main'));
			
		},
		contact: function(){
			ReactDOM.render(<ContactComponent />,
			document.getElementById('main'));
			
		}
	});

	ReactDOM.render(<NavComponent />,
		document.getElementById('nav'));
	ReactDOM.render(<FooterComponent />,
		document.getElementById('foote'));

	var r = new Router();
	Backbone.history.start();

})



