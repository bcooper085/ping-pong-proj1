function counter(num) {
  var start = 0;
  while (start <= num) {
    storage.val(start);
    start++;
  }
}

function converter(num) {
  if (num % 3 === 0) {
    num = "ping";
  } else if (num % 5 === 0) {
    num = "pong";
  } else if (num % 15 === 0) {
    num = "ping-pong"
  }
}
