Meteor.subscribe("checkout_items", "Admin");
Meteor.subscribe("item_categories");
Meteor.subscribe("item_brands");
Meteor.subscribe("item_models");

/////////////////////////////////////
/////////Session variables///////////
/////////////////////////////////////

Session.setDefault("addcatdialog", false);
Session.setDefault("addbarnddialog", false);
Session.setDefault("addcatdialog", false);
Session.setDefault("addcatdialog", false);

/////////////////////////////////////


Template.inventory.events({
    'click #addcategory' : function(e, tmpl)
    {
      console.log(tmpl.find('#addcategory').value)
    }
  // 'click #addbutton' : function(click,tmpl)
  // {
  // 	var item_size = items.find().count();
  	
  // 	if(tmpl.find('#model').value && tmpl.find('#category').value && tmpl.find('#brand').value)
  //   {
  // 	var addthis = {
  //     createdate: new Date(),
  // 		name: tmpl.find('#model').value + item_size,
  // 		category: tmpl.find('#category').value,
  // 		brand: tmpl.find('#brand').value,
  // 		model: tmpl.find('#model').value,
  	

  // 		lastcheckout : "never",
  // 		timescheckedout: 0
  // 	}
  //   var id = items.insert(addthis);
  // }

  // },
  
  // 'keypress #category' : function(e, tmpl)
  // {
  //   if(e.target.value)
  //   Session.set("category_suggestions", items.find({category: RegExp(e.target.value)}).fetch());
  //   console.log(Session.get("category_suggestions"));

  // }

  // 'change #category' : function(e, tmpl)
  // {console.log("HIIIIIIIIIIIII");}


})

Template.Add_item2.events({




})


Template.Add_item.get_categories = function()
{
  return categories.find();
}

Template.Add_item.get_brands = function()
{
  return brands.find();
}

Template.Add_item.get_models = function()
{
  return models.find();
}
Template.Add_item.helpers({
  get_categories: function(){return categories.find()},
  categories: function(){console.log(this.category);return this.category;},
  brands: function(){return this.brand;},
  models: function(){return this.model;}
  // addcat: function(){Session.set("",)}
})
