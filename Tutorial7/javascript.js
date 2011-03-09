$(document).ready(function(){
  // Remove default behavior of hover
  $('#header h1 a:hover').css('background','none');
  // bind a mouseenter event to a element
  $('#header h1 a')
    .bind('mouseenter',function(){
    // Insert a span > a element in DOM that we will fade in
	// with class name .logoHover
	$(this)
     .before('<span class="logoHover"><a href="#">home</a></span>');
    
	// Hide new DOM element immediately, then fade it in
	$('.logoHover')
      .hide().fadeIn()
	  // When mouse leaves logoHover, fade out, on complete, remove
	  // from DOM.
      .bind('mouseleave', function(){
        $(this).fadeOut('normal', function(){
          $(this).remove()
        });  
      });
    });
});