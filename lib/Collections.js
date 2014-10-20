items = new Meteor.Collection('checkout_items');
categories = new Meteor.Collection('item_categories');	//contains all possible categories for items
brands = new Meteor.Collection('item_brands');
models = new Meteor.Collection('item_models');

	if(categories.find().count() === 0){
		category: ["Laptops", "Cameras", "Audio Eqipment","Battlestar Galactica"]
	}

	if(categories.find().count() === 0)
	{
		var defcats = {category: "Laptops",
		category: "Cameras",
		catgeory: "Audio Eqipment",
		category: "Battlestar Galactica"}
		categories.insert(defcats); 
		categories.insert('category: "Cameras"'); 
		categories.insert('category: "Audio Eqipment"');
		categories.insert('category: "Battlestar Galactica"');
	}

	if(brands.find().count() === 0)
	{
		brands.insert('brand: "Apple"'); 
		brands.insert('brand: "Mojo jojo"'); 
		brands.insert('brand: "Jimmy Neutron"');
		brands.insert('brand: "things that go boom"');
	}

	if(models.find().count() === 0)
	{
		models.insert('model: "Dexter"'); 
		models.insert('model: "Bubbles"'); 
		models.insert('model: "Aaron Carter"');
		models.insert('model: "Road Runner"');
	}

