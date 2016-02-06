'use strict';
filepicker.setKey('ArHb48J6aQ8aoKPymDYIzz');

var React = require('react');
var BlogModel = require('../models/BlogModel');

var picUrl = '';



	module.exports = React.createClass({
		getInitialState: function(){
			return {
				pic: (<button id="goAway" className="picky box-shadow--4dp" ref="fileP" onClick={this.changeroo}>Upload Pic</button>)
			}
		},

		render: function() {
			return(
				<div>
					<div className="blogPage">
						<input className="xc" type="text" ref="Title" placeholder="Title"/>
						<div id="pi2">
						<div id="pi">
							{this.state.pic}
						</div>
						</div>
						<textarea className="xc" ref="message" placeholder="Type About it Here!"/>
						<div className="cBox">
							<label><input type="checkbox" id="cbox1" ref="checkbox" className="cBox2 box-shadow--4dp" value="makeHome" /> Put on Home Page</label>
						</div>
						<button className="saveBlog box-shadow--4dp" onClick={this.run}>Save Post</button>
					</div>
					<div className="or">
						<div className="or1">-or-</div>
					</div>
					<div className="backT">
						<a href="#dashboard"><button className="backTo">Back To Dashboard</button></a>
					</div>
				</div>
				)
		},
		changeroo: function(){
			
			filepicker.pick({
		        mimetype: 'image/*', 
		        maxSize: 1024 * 1024 * 5, 
		        imageMax: [1500, 1500], 
		        cropRatio: 16/9, 
		        services: ['*'] 
		    }, 
		    	function(blob) {

		        
			        var filename = blob.filename;

			        picUrl = blob.url;
			        console.log(typeof picUrl, picUrl);
			        var id = blob.id;
			        var isWriteable = blob.isWriteable;
			        var mimetype = blob.mimetype;
			        var size = blob.size;
			        document.getElementById('pi').style.backgroundImage='url('+picUrl+')';
			        document.getElementById('goAway').style.display='none';
		    });
		    

					
		},
		run: function(){
			if (this.refs.Title.value && this.refs.message.value){
				var blogAdd= new BlogModel();
				blogAdd.set('Title', this.refs.Title.value);
				blogAdd.set('url', picUrl);
				blogAdd.set('Words', this.refs.message.value);
				if (this.refs.checkbox.checked){
					blogAdd.set('Home', true);
				}else{
					blogAdd.set('Home', false);
				}
				blogAdd.save({
					success: ()=>{
						console.log('saved file to parse');
						this.props.router.navigate('#dashboard', {trigger: true});
						
					}
				});  
			}

			
			    
		}
		



		

	});


/* Images only */
/* 5mb */
/* 1500x1500px */
/* Perfect squares */
/* From anywhere */