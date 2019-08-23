$(document).ready(function() {
  setTimeout(function() {
    $(".userName").show();
  }, 2000);

  $(".userName").submit(function() {
    event.preventDefault();
    var userName = $(".userName input").val();
    $(".userName").hide();
    $(".hello").append(userName + ".");
    $(".hello").addClass("cursor");
    setTimeout(function() {
      removeCursor($(".hello"));
      $(".question").addClass("cursor");
      $(".question").append(userName + "?");
      $(".question").show();
      setTimeout(function() {
        $(".number").show();
      }, 4000);
    }, 3000);
  });


  $("input.number").click(function(event) {
    $(".question").removeClass("cursor");
    $(".question").show();
  });

  $("form.number").submit(function(event) {
    event.preventDefault();
    var userInput = $("[name=number]").val();
    var answerf = numberQuery(userInput);
    var answerr = numberQuery(userInput).reverse();
    $(".hello, .question, .number").hide();
    answerf.forEach(function(number, i) {
      $(".answerf").append("<p>" + number + "</p>");
    });
    answerr.forEach(function(number, i) {
      $(".answerr").append("<p>" + number + "</p>");
    });
    $(".answerf").show();
    $(".reverse").show();
  });

  $(".reverse").click(function(event){
    $(".answerf").toggle();
    $(".answerr").toggle();
  });
});


function allNumbers(number) {
  var answer = [];
  number = parseInt(number);
  for (var i = 0; i <= number; i++) {
    answer.push(String(i));
  }
  return answer;
}


function numberQuery(number) {
  var answer = [];
  var userNumbers = allNumbers(number);
  var userName = $(".userName input").val();

  for (var i = 0; i < userNumbers.length; i++) {
    if (userNumbers[i].includes("3")) {
      answer.push(i + ": I'm sorry, " + userName + ". I'm afraid I can't do that.");
    } else if (userNumbers[i].includes("2")) {
      answer.push(i + ": Boop!");
    } else if (userNumbers[i].includes("1")) {
      answer.push(i + ": Beep!");
    } else {
      answer.push(userNumbers[i]);
    }
  }
  return answer;
}

function removeCursor(element) {
  element.removeClass("cursor");
  element.css("display", "block");
}
