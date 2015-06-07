$('span').hover( function () {
    $(".top").addClass('show');
    setTimeout(function(){
        $(".middle").addClass('show');
    }, 300);
    setTimeout(function(){
        $(".bottom").addClass('show');
    }, 600);
  }, function() {
    $(".top").removeClass('show');
    $(".middle").removeClass('show');
    $(".bottom").removeClass('show');
  }
);
