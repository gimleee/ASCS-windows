Meteor.subscribe("checkout_items", "Admin");

Template.list.table_items = function(){
	return items.find();
}

Template.list.helpers({

	createdate: function()
	{return moment(this.createdate).format('MM.DD.YY');},
	category: function()
	{return this.category;},
	name: function()
	{return this.name;},
	brand: function()
	{return this.brand;},
	model: function()
	{return this.model;},
	lastcheck: function()
	{return this.lastcheckout;},
	numchecked: function()
	{return this.timescheckedout;}
	
})