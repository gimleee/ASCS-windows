items = new Meteor.Collection('checkout_items');
categories = new Meteor.Collection('item_categories');	//contains all possible categories for items
brands = new Meteor.Collection('item_brands');
models = new Meteor.Collection('item_models');

	if(categories.find().count() === 0)
	{
		categories.insert([{category: "Cameras"}, {category: "Laptops"}, {catgeory: "Audio Eqipment"}, {category: "Battlestar Galactica"}]);
	}

	// if(categories.find().count() === 0)
	// {
	// 	var defcats = {category: "Laptops",
	// 	category: "Cameras",
	// 	catgeory: "Audio Eqipment",
	// 	category: "Battlestar Galactica"}
	// 	categories.insert(category: "ababa"); 
	// }

	if(brands.find().count() === 0)
	{
		brands.insert([{brand: "Apple"}, {brand: "Mojo jojo"}, {brand: "Jimmy Neutron"}, {brand: "things that go boom"}]); 
	}

	if(models.find().count() === 0)
	{
		models.insert([{model: "Dexter"}, {model: "Bubbles"}, {model: "Aaron Carter"}, {model: "Road Runner"}]); 
	}

