Meteor.methods({
	setRole: function(NewRole)
{
  switch (NewRole) {


    case "Authenticated" : role = "Authenticated";
    break;

    case "Admin": role = "Admin";
    break;

    default: role = "Guest";
    break;
    
    
  }
}
});
  





