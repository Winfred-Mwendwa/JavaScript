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