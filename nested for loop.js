//Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

function multiplyAll(arr) {
    let product=1;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
        
    }
    return product; //if a return statement is ommited and the function is called, it processes the inner code but the returned value is undefined
}
console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));