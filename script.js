$(document).ready(function () {
  $(".burger").on("click", function () {
    $("#sidebar").toggleClass("open");
    $("#mNav").toggleClass("d-block");
  });
  $(".burger-sidebar").on("click", function () {
    $("#sidebar").toggleClass("open");
    $("#mNav").toggleClass("d-block");
  });

  $(window).resize(function () {
    if ($("#sidebar").hasClass("open") && $("#mNav").hasClass("d-block")) {
      $("#mNav").toggleClass("d-block");
    }

    if ($(window).width() <= 551 && $("#sidebar").hasClass("open")) {
      $("#sidebar").toggleClass("open");
      $("#mNav").toggleClass("d-block");
    }

    if ($(window).width() > 551 && $("#mNav").hasClass("d-block")) {
      $("#mNav").toggleClass("d-block");
      $("#sidebar").toggleClass("open");
    }
  });
});
