Router.route('/', function() {this.render('home')});
Router.route('checkout-form');
Router.route('checkoutviewer', { waitOn: function(){
  		Meteor.subscribe("allItems");
  	},
  	action: function(){
  		if (this.ready()){
  			this.render();
  		}
  	}});

Router.route('inventory',{
  	waitOn: function(){
  		Meteor.subscribe("allItems");
  	},
  	action: function(){
  		if (this.ready()){
  			this.render();
  		}
  	}
  });

