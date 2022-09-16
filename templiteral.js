//template literals
//instead of using concatenation operator(+) to build up strings with variables, you can use template literals ${variable}
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    
    const failureItems = [];
    for (let i=0; i<arr.length; i++) {
      failureItems.push(`<li class="text-warning">${result.failure[i]}</li>`);
    }
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure)
  console.log(failuresList)

  //note that backticks(``) are used to enclose the string and not quotes
  //using template literals eliminates the need for /n escape sequence for multi line strings
  //simply put them on seperate lines