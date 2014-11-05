Template.table.helpers({

	createdate: function()
	{return moment(this.createdate).format('MM.DD.YY');},
	table_items: function(){
	return items.find();}

	
})