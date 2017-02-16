$(document).ready(function() {
  var interval = 2, //How much to increase the progressbar per frame
    updatesPerSecond = 1000 / 60, //Set the nr of updates per second (fps)
    progress = $('progress'),
    animator = function() {
      progress.val(progress.val() + interval);
      $('#val').text(progress.val());
      if (progress.val() + interval < progress.attr('max')) {
        setTimeout(animator, updatesPerSecond);
      } else {
        $('#val').text('Done');
        progress.val(progress.attr('max'));
      }
    }

  setTimeout(animator, updatesPerSecond);
});
