$(function () {
  $(".self").on("mouseenter", function () {
    $(".self .leftwhitebox").stop().animate({ left: "-50%" }, 1500);
    $(".self .rightwhitebox").stop().animate({ right: "-50%" }, 1500);
  });
  $(".self").on("mouseleave", function () {
    $(".self .leftwhitebox").stop().animate({ left: "0%" }, 1500);
    $(".self .rightwhitebox").stop().animate({ right: "0%" }, 1500);
  });

  $(".upai li").on("mouseenter", function () {
    $(".downai li").css({ transform: "scale(0.7)", opacity: "0.5" });
    $(".upai li").css({ transform: "scale(0.7)", opacity: "0.5" });
    $(this).css({ transform: "scale(1.3)", opacity: "1" });
  });
  $(".upai li").on("mouseleave", function () {
    $(".downai li").css({ transform: "scale(1)", opacity: 1 });
    $(".upai li").css({ transform: "scale(1)", opacity: "1" });
  });
  $(".downai li").on("mouseenter", function () {
    $(".upai li").css({ transform: "scale(0.7)", opacity: "0.5" });
    $(".downai li").css({ transform: "scale(0.7)", opacity: "0.5" });
    $(this).css({ transform: "scale(1.3)", opacity: "1" });
  });
  $(".downai li").on("mouseleave", function () {
    $(".upai li").css({ transform: "scale(1)", opacity: 1 });
    $(".downai li").css({ transform: "scale(1)", opacity: "1" });
  });
});
