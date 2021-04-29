$(function () {
  $("#load").click(function () {
    $.get("text.txt", function (response) {
      $("#result").empty();
      $("#result").append(response);
    });
  });
});
