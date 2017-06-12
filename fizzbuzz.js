


$("#number-chooser").submit(function() {
  event.preventDefault();
  var answer = $("#number-choice").val();
  console.log(answer);                    
  
  for (var i = 1; i <= answer; i++) {
    var fizz = i % 3 === 0;
    var buzz = i % 5 === 0;
    if (fizz && buzz) {
      $(".js-results").append("fizzbuzz, ");
    }
    else if (fizz) {
      console.log("fizz, ");
      $(".js-results").append("fizz, ");
    }
    else if (buzz) {
       console.log("buzz ")
       $(".js-results").append("buzz, ");
    }
    
    else {
      $(".js-results").append(i + ", " );
    }
    
 
  }
 });