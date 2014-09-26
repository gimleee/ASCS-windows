Meteor.subscribe("checkout_items", "Admin");

Template.inventory.events({
  'click #addbutton' : function(click,tmpl)
  {
  	var item_size = items.find().count();
  	
  	
  	var addthis = {
  		name: tmpl.find('#model').value + item_size,
  		category: tmpl.find('#category').value,
  		brand: tmpl.find('#brand').value,
  		model: tmpl.find('#model').value,
  		createdate: moment().format("MMDDYYHHmmss"),
  		lastcheckout : "never",
  		timescheckedout: 0
  	}
    var id = items.insert(addthis);
    console.log(id)
  	console.log("item size is now " + items.find().count());
  },
  
  'keypress #category' : function(e, tmpl)
  {
  	Session.set("query", e.target.value)
  	


  }
})

Template.inventory.helpers({
	searchResults: function(){
		var results;
  		EasySearch.search('category_search', Session.get("query"), function(err,data){results = data.results});
  		console.log(results);
  		return results;
	}
})