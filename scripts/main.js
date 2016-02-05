'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');

Parse.initialize('PDHEqnp8cWE5PR49t4Ns5yLmlWmPTRdcJPc1VVqT', 'HtSll2s7EpkyghP4odHCcoJ6vqfYSbwBJDHa3yqA');



var HomeComponent = require('./components/HomeComponent');
var NavComponent = require('./components/NavComponent');
var AboutComponent = require('./components/AboutComponent');
var GalleryComponent = require('./components/GalleryComponent');
var MapComponent = require('./components/MapComponent');
var FooterComponent = require('./components/FooterComponent');
var ContactComponent = require('./components/ContactComponent');
var UserDashboardComponent = require('./components/UserDashboardComponent');
var RecieveMailComponent = require('./components/RecieveMailComponent');
var BlogCreateComponent = require('./components/BlogCreateComponent');
var BlogComponent = require('./components/BlogComponent');


$(document).on('ready', function(){
	
	var Router = Backbone.Router.extend({
		routes: {
			'': 'home',
			'about': 'about',
			'gallery': 'gallery',
			'map': 'map',
			'contact': 'contact',
			'blog': 'blog',
			'dashboard': 'dashboard',
			'receive': 'receive',
			'blogCreate': 'blogCreate'
		},

		home: function(){
			ReactDOM.render(<HomeComponent />,
			document.getElementById('main'));
			ReactDOM.render(<FooterComponent router={r} />,
			document.getElementById('foote'));
		},
		about: function(){
			ReactDOM.render(<AboutComponent />,
			document.getElementById('main'));
			ReactDOM.render(<FooterComponent router={r} />,
			document.getElementById('foote'));
		},
		gallery: function(){
			ReactDOM.render(<GalleryComponent />,
			document.getElementById('main'));
			ReactDOM.render(<FooterComponent router={r} />,
			document.getElementById('foote'));
			
		},
		map: function(){
			ReactDOM.render(<MapComponent />,
			document.getElementById('main'));
			ReactDOM.render(<FooterComponent router={r} />,
			document.getElementById('foote'));
			
		},
		contact: function(){
			ReactDOM.render(<ContactComponent router={r}/>,
			document.getElementById('main'));
			ReactDOM.render(<FooterComponent router={r} />,
			document.getElementById('foote'));
			
		},
		blog: function(){
			ReactDOM.render(<BlogComponent />,
			document.getElementById('main'));
			ReactDOM.render(<FooterComponent router={r} />,
			document.getElementById('foote'));
		},
		dashboard: function(){
			ReactDOM.render(<UserDashboardComponent router={r}/>,
			document.getElementById('main'));
			ReactDOM.render(<FooterComponent router={r} />,
			document.getElementById('foote'));
		},
		receive: function(){
			ReactDOM.render(<RecieveMailComponent />,
			document.getElementById('main'));
			ReactDOM.render(<FooterComponent router={r} />,
			document.getElementById('foote'));
		},
		blogCreate: function(){
			ReactDOM.render(<BlogCreateComponent router={r} />,
			document.getElementById('main'));
			ReactDOM.render(<FooterComponent router={r} />,
			document.getElementById('foote'));
		}
	});

	ReactDOM.render(<NavComponent router={r} />,
		document.getElementById('nav'));
		
	

	var r = new Router();
	Backbone.history.start();

})



