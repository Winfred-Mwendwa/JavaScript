// the logical and operator (&&) returns true only if both operands to its left and right are true
function range(value) {
    if (value>10 && value<20) {
        return 'within range';
    }
    return 'outside range';
    
}

console.log(range(35));

// the logical or operator (||) returns true if either operands to its left or right are true
function rangeOr(value) {
    if (value>10 || value<20) {
        return 'within range';
    }
    return 'outside range';
    
}

console.log(rangeOr(35));