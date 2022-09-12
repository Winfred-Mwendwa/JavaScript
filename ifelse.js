//else statement is used to specify the statement to be executed when the if condition is not satisfied
function ifElse(num) {
    if (num<5) {
        return 'less than five';
    } else {
        return 'greater than five';
    }
}
console.log(ifElse(10));

//else if is used when several conditions are to be checked at once
//note that the statements are executed in a top down manner thus their order is of importance
function elseIf(num) {
    if (num<5) {
        return 'less than 5';
    }
    else if (num<10) {
        return 'less than 10';
    }
    else if (num<20) {
        return 'less than 20';
    }
    else {
        return 'greater than 20';
    }
}
console.log(elseIf(33));
