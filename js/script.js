
// parallax
$(document).ready(function(){
    var elem = $('.container'),
        pos = elem.offset(),
        elem_left = pos.left,
        elem_top = pos.top,
        elem_width = elem.width(),
        elem_height = elem.height(),
        x_center,
        y_center;
  
    $('.container').mousemove(function(e){
      x_center = ( elem_width / 2 ) - ( e.pageX - elem_left );
      y_center = ( elem_height / 2 ) - ( e.pageY - elem_top );
  
      $('.parallax').each(function(){
  
        var speed = $(this).attr('data-speed'),
            xPos = Math.round(-1*x_center/40*speed),
            yPos = Math.round(y_center/40*speed);
  
        if (yPos < 0)
          yPos = -2*speed;
           $(this).css('transform', 'translate3d('+xPos+'px, '+yPos+'px, 0px)');
          });
      });
  });


  // copy
  $('#copy').click(function() {
    var $temp = $("<input>");
      $("body").append($temp);
        $temp.val($('#copy_text').text()).select();
        document.execCommand("copy");
        $temp.remove();

      $('#copy_message').html();
      $("#copy_box").fadeIn(0).delay(1000).fadeOut(1000);
});

