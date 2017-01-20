var userInput;
var results;
var storage = [];

function counter(num) {
  var start = 0;
  while (start <= num) {
    console.log(start);
    start++;
  }


$(function() {
  $('form').submit(function() {
    var num = $("#userInput").val();
    // $('.output').text(results);
    event.preventDefault();
  });
});
