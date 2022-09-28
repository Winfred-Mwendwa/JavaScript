//return new araay with unique numbers from each array in the order in which theyy occur
function uniteUnique(...arr) {
  
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (!result.includes(arr[i][j])) {
        result.push(arr[i][j]);
      }
    }
  }
  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));