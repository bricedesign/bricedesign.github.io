var articleTopDistance
var $sideNav = $('nav#all-projects-nav')
var $article = $('div#content-wrapper')

$( window ).scroll( function () {
 	articleTopDistance = $article.offset().top - $(window).scrollTop();
 	
 	if( articleTopDistance > 0 ) {
 	  $sideNav.removeClass('fixed')
 	} 
 	else {
 	  $sideNav.addClass('fixed')
 	}
} );