// Back to top button
$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn();
      $('.navbar').addClass('bg-dark')
  } else {
      $('#back-to-top').fadeOut();
      $('.navbar').removeClass('bg-dark')
  }
});

//Click event scroll to top button jquery

$('#back-to-top').click(function(){

  $('html, body').animate({scrollTop : 0},600);
  return false;
});



var delay = 3000;
setTimeout(function() {
  $(document).ready(function () {

    $('#exampleModal').modal('show');
  
  });
  setTimeout(function() {
    $('.btn-close').css({'display':'block'});
   }, delay);
}, delay);
(jQuery);