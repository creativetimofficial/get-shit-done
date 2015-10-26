// Dynamic load the javascript init based on features specified from view
// Combine the best practice to handle javascript invocation in rails
// http://brandonhilkert.com/blog/organizing-javascript-in-rails-application-with-turbolinks/
// https://viget.com/extend/javascript-execution-patterns-for-non-web-apps

window.App || (window.App = {});

// Get the features array
App.features = function() {
  var features = $('body').data('features');
  var featuresArray = [];
  if(features) {
    featuresArray = features.split(' ');
  }
  return featuresArray;
};

$(document).on("page:change", function() {
  // components init
  if ($.inArray('components',App.features()) >= 0) {
    $( "#slider-range" ).slider({
    	range: true,
    	min: 0,
    	max: 500,
    	values: [ 75, 300 ],
    });
    $( "#slider-default" ).slider({
    		value: 70,
    		orientation: "horizontal",
    		range: "min",
    		animate: true
    });
    $('.btn-tooltip').tooltip('show');
    $('.radio').on('toggle', function() {
      console.log('ok');
    });
  }

  // index init
  if ($.inArray('index',App.features()) >= 0) {
    $('.btn-tooltip').tooltip();
    $('.label-tooltip').tooltip();
    $('.pick-class-label').click(function(){
        var new_class = $(this).attr('new-class');
        var old_class = $('#display-buttons').attr('data-class');
        var display_div = $('#display-buttons');
        if(display_div.length) {
        var display_buttons = display_div.find('.btn');
        display_buttons.removeClass(old_class);
        display_buttons.addClass(new_class);
        display_div.attr('data-class', new_class);
        }
    });
    $( "#slider-range" ).slider({
    		range: true,
    		min: 0,
    		max: 500,
    		values: [ 75, 300 ]
  	});
  	$( "#slider-default" ).slider({
  			value: 70,
  			orientation: "horizontal",
  			range: "min",
  			animate: true
  	});
  	$('.carousel').carousel({
        interval: 4000
    });
  }

  // navbar-transparent init
  if ($.inArray('navbar-transparent',App.features()) >= 0) {
  }

  // notification init
  if ($.inArray('notification',App.features()) >= 0) {
  }

  // template init
  if ($.inArray('template',App.features()) >= 0) {
  }

  // tutorial init
  if ($.inArray('tutorial',App.features()) >= 0) {
  }
});
