/////////////////////////////////////
/////////Session variables///////////
/////////////////////////////////////

Session.setDefault("add_dialog", false);    // used when a category, brand or model is not available and a new one needs to be specified
Session.setDefault("lastaddeditem", null);



/////////////////////////////////////


Template.inventory.rendered = function()
{
  $('.category-select').select2('focus')
  $('.alert_add').hide();
  $('.popover').popover();
  

}

Template.inventory.events({
    'click .category-select': function(){         //multi select with tags
        $('.category-select').select2({

          data: items.find().map(function(doc){
            if (doc.category)
            {
              return {id: doc.category, text: doc.category};
            }

            else
              return {id: 0, text: "No Category"}

          }),
          tokenSeparators: [","],
          createSearchChoice: function(){return {id:"+", text: "+"}},
          createSearchChoicePosition:'bottom',
          placeholder: "Category",
          allowClear: true,
          width: 300,
          formatSelection: format,
          multiple: true
        });
    },

    'change .category-select': function(){
      var array = $('.category-select').select2('val');
      for(i = 0; i < array.length; i++)
      {
         if(array[i] === "+")
      {
        $('.category-select').select2('val', "");
        var popover_options = {
          target: '.category-select',
          placement: 'right'

        }
        $('#cat_popover').modalPopover({placement: 'right'});
        $('#cat_popover').modalPopover('show');

      }
      }

     
    },

    'click .brand-select': function(){
        $('.brand-select').select2({
          data: items.find().map(function(doc){
            if (doc.brand)
              return {id: doc.brand, text: doc.brand}
            else
              return {id: -1, text: "No Brand"}

          }),
          createSearchChoice: function(){return {id:"+", text: "+"}},
          createSearchChoicePosition:'bottom',
          placeholder: "Brand",
          allowClear: true,
          width: 300,
          formatSelection: format,
          formatResult: format,
          more: true

        });
    },
        'change .brand-select': function(){
      var array = $('.brand-select').select2('val');
      for(i = 0; i < array.length; i++)
      {
         if(array[i] === "+")
      {
        add_dialog(null, null, null);
        $('.brand-select').select2('val', "");

      }
    }
  },

        'click .model-select': function(){
          
        $('.model-select').select2({
          data: items.find().map(function(doc){
            if (doc.model)
              return {id: doc.model, text: doc.model}
            else
              return {id: -1, text: "No Model"}

          }),
          createSearchChoice: function(){return {id:"+", text: "+"}},
          createSearchChoicePosition:'bottom',
          placeholder: "Model",
          allowClear: true,
          width: 300,
          formatSelection: format,
          formatResult: format,
          more: true

        });
        
    },
       'change .model-select': function(){
      var array = $('.model-select').select2('val');

      for(i = 0; i < array.length; i++)
      {
         if(array[i] === "+")
      {
        add_dialog(null, null, null);
        $('.model-select').select2('val', "");

      }
    }
  },
        'click .Add_button': function(){
          if($('.category-select').select2('val').length && $('.brand-select').select2('data').text && $('.model-select').select2('data').text)
          {
            var string_cat = $('.category-select').select2('val')[0], item_size = items.find().count();
            

            for(i=1; i < $('.category-select').select2('val').length; i++)                    //Put all categories in string format
            {
                string_cat += ", " + $('.category-select').select2('val')[i];
            }
            
            var addthis = {
            createdate: new Date(),
            name: $('.model-select').select2('data').text + item_size,
            category: string_cat,
            brand: $('.brand-select').select2('data').text,
            model: $('.model-select').select2('data').text,
    

            lastcheckout : "never",
            timescheckedout: 0

          }
          // items.insert(addthis);

          Session.set("lastaddeditem", addthis);
          $('.alert_add').fadeIn('slow', 'swing');
            setTimeout(function(){$(".alert_add").fadeOut('slow', 'swing')}, 5000)
          }
  }
})





Template.Add_item.helpers({
  cat: function(){
    if(Session.get("lastaddeditem") != (null || "+"))
  {
    var temp = Session.get("lastaddeditem");
    return temp.category;
  }
},
  add_alert: function() {
  if(Session.get("lastaddeditem") != null)
  {
    var temp_item = Session.get("lastaddeditem");
    return "Item " + temp_item.name + " has been succesfully added!";
  }
  else 
    return "No itme has been added :/";
  }
})

///////global functions///////
function format(selection){
  return selection.text;
}

function add_dialog(category, brand, model){
      var temp = Session.get("lastaddeditem");
  bootbox.dialog({
    
    Title: "Add new category, brand, model",
    message:'<div class="row">  ' +
                    '<div class="col-md-12"> ' +
                    '<form class="form-horizontal"> ' +
                    '<div class="form-group"> ' +
                    '<label class="col-md-4 control-label" for="category">Category</label> ' + 'category' +  +
                    '<div class="col-md-4"> ' +
                    '<input id="name" name="category" type="text" placeholder="Your name" class="form-control input-md"> ' +
                    '<span type="hidden" class="category-select btn btn-default"></span>' + 
                    '<span type="hidden" class="brand-select btn btn-default"></span>' +
                    '<span type ="hidden"  class="model-select btn btn-default"></span>' +
                    '<span class="help-block">Here goes your name</span> </div> ' +
                    '</div> ' +
                    '<div class="form-group"> ' +
                    '<label class="col-md-4 control-label" for="awesomeness">How awesome is this?</label> ' +
                    '<div class="col-md-4"> <div class="radio"> <label for="awesomeness-0"> ' +
                    '<input type="radio" name="awesomeness" id="awesomeness-0" value="Really awesome" checked="checked"> ' +
                    'Really awesome </label> ' +
                    '</div><div class="radio"> <label for="awesomeness-1"> ' +
                    '<input type="radio" name="awesomeness" id="awesomeness-1" value="Super awesome"> Super awesome </label> ' +
                    '</div> ' +
                    '</div> </div>' +
                    '</form> </div>  </div>',
    buttons: {main: {
                      label: "Add!",
                      className: "btn-primary btn-xlarge",
                      callback: function(){
                        Example.show("Success!");
                      }



    }}
  })
}