Meteor.publish('allItems', function(){
	return items.find();
})

