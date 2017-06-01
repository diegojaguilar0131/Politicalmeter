$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $('#wait').hide();
    $('#voting-age').show();
  }else {
    $('#wait').hide();
    $('#minor').show();
  }
});
