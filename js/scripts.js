var list = [];

function counter(num) {
  var storage = [];
  var start = 1;
  while (start <= num) {
    storage.push(start);
    start++;
  }
  for (var i = 0; i <= storage.length; i++) {
    if (storage[i] % 15 === 0) {
      storage[i] = "ping-pong";
    } else if (storage[i] % 5 === 0) {
      storage[i] = "pong";
    } else if (storage[i] % 3 === 0) {
      storage[i] = "ping";
    }
  }
  for (var i = 0; i <= storage.length - 1; i++) {
    list.push('<li>' + storage[i] + '</li>');
  }
}


$(function() {
  $('form').submit(function() {
    var num = $("#userInput").val();
    counter(num);
    $(".output").html(list);
    $('form').reset();
    event.preventDefault();
  });
});
