Meteor.startup(function () {
	Session.set('role', "Guest");
});

Template.menu.events({
  "click .role" : function(e,tmpl)
  {
    var success = Meteor.call("setRole", e.target.innerHTML);
    Session.set('role', e.target.innerHTML);
  }
})
Template.menu.helpers({
  currentRole : function(){
    return Session.get("role");
  }
})

Router.map( function()
{
  this.route('home', {path: '/'});
  this.route('checkout-form');
  this.route('checkout-viewer');
  

});