var searchVisible = 0;
var transparentNavbar;

$(document).ready(function(){
    /*      Activate the tooltips                */
    $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();

    /*      Activate the switches with icons      */
    $('.switch')['bootstrapSwitch']();

    /*      Activate regular switches        */
    $("[data-toggle='switch']").wrap('<div class="switch" />').parent().bootstrapSwitch();

    $('[data-toggle="search"]').click(function(){
        if(searchVisible == 0){
            searchVisible = 1;
            $(this).parent().addClass('active');
            $('.navbar-search-form').fadeIn(function(){
                $('.navbar-search-form input').focus();
            });
        } else {
            searchVisible = 0;
            $(this).parent().removeClass('active');
            $(this).blur();
            $('.navbar-search-form').fadeOut(function(){
                $('.navbar-search-form input').blur();
            });
        }
    });

    $('[data-toggle="gsdk-collapse"]').hover(
    function(){
            console.log('on hover');
            var thisdiv = $(this).attr("data-target");

            if(!$(this).hasClass('state-open')){
                $(this).addClass('state-hover');
                $(thisdiv).css({
                    'height':'30px'
                });
            }

        },
        function(){
            var thisdiv = $(this).attr("data-target");
            $(this).removeClass('state-hover');

            if(!$(this).hasClass('state-open')){
                $(thisdiv).css({
                    'height':'0px'
                });
            }
        }
    );

    $('[data-toggle="gsdk-collapse"]').click(
    function(event){
            event.preventDefault();

            var thisdiv = $(this).attr("data-target");
            var height = $(thisdiv).children('.panel-body').height();

            if($(this).hasClass('state-open')){
                $(thisdiv).css({
                    'height':'0px',
                });
                $(this).removeClass('state-open');
            } else {
                $(thisdiv).css({
                    'height':height,
                });
                $(this).addClass('state-open');
            }
        }
    );

    navbar_scroll_distance = $('.navbar[data-color-on-scroll]').attr('data-color-on-scroll') || '500px';

    if($('.navbar[data-color-on-scroll]').length != 0){
        transparentNavbar = true;

        // check for the first time if there is a transparent navbar and the page is scrolled
        gsdk.checkScrollForTransparentNavbar();

        // repetitive check for the navbar on scroll
        $(window).on('scroll', gsdk.checkScrollForTransparentNavbar);
    }
});

$(function () {
    $('[data-toggle="gsdk-collapse"]').each(function () {
        var thisdiv = $(this).attr("data-target");
        $(thisdiv).addClass("gsdk-collapse");
    });

});

gsdk = {
    checkScrollForTransparentNavbar: debounce(function() {
            console.log(navbar_scroll_distance);
            if( $(document).scrollTop() > parseInt(navbar_scroll_distance) ) {
                if(transparentNavbar) {
                    transparentNavbar = false;
                    $('.navbar[data-color-on-scroll]').removeClass('navbar-transparent');
                }
            } else {
                if( !transparentNavbar ) {
                    transparentNavbar = true;
                    $('.navbar[data-color-on-scroll]').addClass('navbar-transparent');
                }
            }
    }, 17),
}


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
};


function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}
