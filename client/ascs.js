Meteor.startup(function () {
	Session.set('role', "Guest");
});

Template.menu.events({
  "click .role" : function(e,tmpl)
  {
    var success = Meteor.call("setRole", e.target.innerHTML);
    Session.set('role', e.target.innerHTML);
    Meteor.subscribe("checkout_items", Session.get('role'));
  }
})
Template.menu.helpers({
  currentRole : function(){
    return Session.get("role");
  }
})



