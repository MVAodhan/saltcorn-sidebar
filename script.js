$(document).ready(function () {
  $(".burger").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
  $(".sidebar-svg").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
});
