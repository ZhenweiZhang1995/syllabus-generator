$(document).ready(function() {
  $(window).bind('scroll', function() {
    if ($(window).scrollTop() > 245) {
      $('.fixAtTop').addClass('fixed');
      // $('.status').addClass('is-centered');
    } else {
      $('.fixAtTop').removeClass('fixed');
    }
  });
});
