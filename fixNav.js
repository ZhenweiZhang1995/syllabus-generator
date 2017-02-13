$(document).ready(function() {
  $(window).bind('scroll', function() {
    // var navHeight = $(window).height() - 100;
    if ($(window).scrollTop() > 245) {
      $('.fixAtTop').addClass('fixed');
      // $('.status').addClass('is-centered');
    } else {
      $('.fixAtTop').removeClass('fixed');
    }
  });
});
