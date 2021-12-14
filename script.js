$(document).ready(function () {
  $(".burger").on("click", function () {
    $("#sidebar").toggleClass("open");
    $("#mNav").toggleClass("mOpen");
  });
  $(".burger-sidebar").on("click", function () {
    $("#sidebar").toggleClass("open");
    $("#mNav").toggleClass("mOpen");
  });

  $(window).resize(function () {
    if ($("#sidebar").hasClass("open") && $("#mNav").hasClass("mOpen")) {
      $("#mNav").toggleClass("mOpen");
    }

    if ($(window).width() <= 551 && $("#sidebar").hasClass("open")) {
      $("#sidebar").toggleClass("open");
      $("#mNav").toggleClass("mOpen");
    }

    if ($(window).width() > 551 && $("#mNav").hasClass("mOpen")) {
      $("#mNav").toggleClass("nOpen");
      $("#sidebar").toggleClass("open");
    }
  });
});
