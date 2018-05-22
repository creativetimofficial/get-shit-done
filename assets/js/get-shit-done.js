searchVisible = 0;
transparent = true;

$(document).ready(function(){
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
});

$(function () {
    $('[data-toggle="gsdk-collapse"]').each(function () {
        var thisdiv = $(this).attr("data-target");
        $(thisdiv).addClass("gsdk-collapse");
    });
    
});

$(document).scroll(function() {
    if( $(this).scrollTop() > 260 ) {
        if(transparent) {
            transparent = false;
            $('nav[role="navigation"]').removeClass('navbar-transparent');
        }
    } else {
        if( !transparent ) {
            transparent = true;
            $('nav[role="navigation"]').addClass('navbar-transparent');
        }
    }
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-46172202-1', 'auto');
ga('send', 'pageview');
    











