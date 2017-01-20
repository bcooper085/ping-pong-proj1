var userInput;
var results;
var storage = [];
// var parsed = parseInt(storage[i]);

function counter(num) {
  var start = 0;
  while (start <= num) {
    storage.push(start);
    start++;
  }

  function converter(num) {
    for (var i = 0; i <= storage.length; i++) {
      if (i % 15 === 0) {
        storage[i] = "ping-pong";
      } else if (i % 5 === 0) {
        storage[i] = "pong";
      } else if (i % 3 === 0) {
        storage[i] = "ping"
      }
      return storage;
    }
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
