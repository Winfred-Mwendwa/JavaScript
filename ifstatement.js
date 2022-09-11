//the if statement is used to make decisions
//if the value in parenthesis is true, the statement inside the curly braces is executed, 
//if the value is false the statement is not executed

function trueOrFalse(wasThatTrue) {
    
    if (wasThatTrue) {
      return "Yes, that was true"
    }
      return "No, that was false"
  }
  console.log(trueOrFalse(true)); //function returns yes that was true since the condition is true
  console.log(trueOrFalse(false)); //function reruns no that was false since the condition is false
