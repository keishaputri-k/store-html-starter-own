// TODO 5 Navigation bar Script
//untuk ngecek apakah saat di scroll posisinya udh masuk ke navbar
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});
  
  