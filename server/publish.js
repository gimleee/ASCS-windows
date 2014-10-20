Meteor.publish('checkout_items', function(role)
{
	return items.find();
});


