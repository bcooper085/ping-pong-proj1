var final;

function verify(num) {
  if(isNaN(num)) {
    alert('Please enter a number.');
  } else {
    counter(num);
  }
}

function counter(num) {
  var list = [];
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
  final = list;
}

$(function() {
  $('form').submit(function() {
    var num = $("#userInput").val();
    verify(num);
    $(".output").html(final);
    event.preventDefault();
  });
});
