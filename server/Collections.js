items = new Meteor.Collection('checkout_items');

function item(name, category, brand, model)
{
	this.name = name;	
	this.category = category;
	this.brand = brand;
	this.model = model;


	this.lastcheckout = NULL;
	this.created = new Date();



}

Meteor.publish('checkout_items', function(role)
{
	if(role === (Authenticated || Admin))
	return checkout_items;

	else
		console.log("publish error -- do not have permission to view checkout items");
});