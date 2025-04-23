$(document).ready(function() {
    $('.valentines-day').on('click touchstart', function() {
      $('.envelope').fadeOut(800, function() {
        $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();
  
        $('#card').css({'display':'flex', 'opacity': 0, 'transform': 'scale(0.1)'});
        $('#card').animate({'opacity': 1}, {
          duration: 1000,
          step: function(now, fx) {
            var scale = 1 + Math.sin(now * Math.PI) * 0.1;
            $(this).css('transform', 'scale(' + scale + ')');
          }
        });
      });
    });
  });
  