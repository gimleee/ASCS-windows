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
  
Meteor.methods({
  addItem: function(item2add)
{
  if(Session.get('role') === ("Admin"|| "Authenticated"))
  {
    var id = items.insert(item2add);
    console.log(id + " was added");
    return true;
  }  
}
});

var add = {category: "Battlestar Galactica"};
categories.insert(add);


