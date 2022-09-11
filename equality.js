//equality == vs strict equality === operator
//equality operator attempts to do a type converson if the data types being compared are not the same
function equality(value) {
    if (value==33) {
        return true;
    }
    return false;
}
console.log(equality('33'));

//strict equality operator does not do a type conversion. the two values being compared have to be exactly the same
//returns false if the values are of different data types
function strictEquality(value) {
    if (value===33) {
        return true;
    }
    return false;
}
console.log(strictEquality('33'));
console.log(typeof 3); //use typeof to get the data type

//the not equal to is the inverse of equal to and also performs type conversion
function notEqual(value) {
    if (value!=8) {
        return true;
    }
    return false;
}
console.log(notEqual('8'));
//the strict inequality operator is the inverse of the strict equality and does not perform type conversion
function strictNotEqual(value) {
    if (value!==8) {
        return true;
    }
    return false;
}
console.log(strictNotEqual('8'));