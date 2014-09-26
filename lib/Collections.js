items = new Meteor.Collection('checkout_items');




EasySearch.createSearchIndex('category_search', {
'collection' : items, 
'field' : ['category'], 
'limit' : 5 
});

EasySearch.createSearchIndex('brand_search', {
'collection' : items, 
'field' : ['brand'], 
'limit' : 5 
});

EasySearch.createSearchIndex('model_search', {
'collection' : items, 
'field' : ['model'], 
'limit' : 5 
});