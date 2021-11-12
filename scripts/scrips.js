$(document).ready(function () {
  $(".hamburguer").click(function () {
    $(this).toggleClass("active");
    $(".menu").toggleClass("active");
  });

  $("#check").click(function () {
    $(this).toggleClass("active");
    $(".menu").toggleClass("active");
  });
});
