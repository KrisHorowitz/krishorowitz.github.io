
var $window = $(window),
  college   = $('.college');

$window.scroll(function(){
  console.log($(this).scrollTop());

  // if ($window.scrollTop > 300 && $window.scrollTop < 500) {
  //   college.fadeToggle();
  // }
});