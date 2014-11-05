Meteor.startup(function () {
	Session.set('role', "Guest");
});

Template.menu.events({
  "click .role" : function(e,tmpl)
  {
    var success = Meteor.call("setRole", e.target.innerHTML);
    Session.set('role', e.target.innerHTML);
    Meteor.subscribe("checkout_items");
  }
})
Template.menu.helpers({
  currentRole : function(){
    return Session.get("role");},
  
  roleIcon: function()
    {  var currole = Session.get("role");
    var icon;
    switch (currole){

    case "Authenticated": icon = "glyphicon glyphicon-eye-open";
    break;

    case "Admin" : icon = "glyphicon glyphicon-bullhorn";
    break;

    default: icon = "glyphicon glyphicon-eye-close";
    break;
      }
    return icon;
  }
})




