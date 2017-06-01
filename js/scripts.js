$(document).ready(function() {
  $("form").submit(function(event) {
    var firstInput = parseInt($("input:radio[name=first]:checked").val());
    var secondInput = parseInt($("input:radio[name=second]:checked").val());
    var thirdInput = parseInt($("input:radio[name=third]:checked").val());

    var sum = function(number1, number2, number3) {
      var sum = number1 + number2 + number3;
      return sum;
    };

    sum(firstInput,secondInput,thirdInput);

    alert (sum(firstInput,secondInput,thirdInput));

    if (sum<=3) {
      $("#leaning").text("Liberal");
      $("#output").show();

    } else if (sum > 3 && sum < 7){
      $("#leaning").text("Moderate");
      $("#output").show();

    } else {
      $("#leaning").text("Conservative");
      $("#output").show();
    };



    event.preventDefault();

  });
});
