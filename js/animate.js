function hover(popup, node){
console.log(popup, node);

$(popup).hover(
    function() {
        $(node).css({
            "background": "url('images/timeline-node-hover.png') center top no-repeat",
            "background-size": "20px 20px"
        });
    },
    function() {
        $(node).css({
            "background": "url('images/timeline-node.png') center top no-repeat",
            "background-size": "20px 20px"
        });
    }
);
}

hover("#dots", "#dec15");
hover("#blog", "#oct15");
hover("#betaworks", "#jan15");
hover("#tap1", "#oct13");
hover("#bookies", "#jul15");


//look into
// $(function() {
//   $('a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });