var userInput;
var results;
var storage = [];

function counter(num) {
  var start = 0;
  while (start <= num) {
    storage.push(start);
    start++;
  }
}

$(function() {
  $('form').submit(function() {
    var num = $("#userInput").val();
    counter(num);
    $('.output').text(storage);
    event.preventDefault();
  });
});
