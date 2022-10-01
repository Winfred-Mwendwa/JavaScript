function rot13(str) {
     
        let rotCharArray=[];
        let regex=/[A-Z]/; //only uppercase letters were provided in the tests
        str= str.split(''); //obtain individual characters
        for (var x in str) {
            if(regex.test(str[x])) {
                rotCharArray.push(((str[x].charCodeAt() - 65 + 13) % 26) + 65);
    
            } else {
                rotCharArray.push(str[x].charCodeAt()); //panctuation should not be converted but should be passed on in final output
            }

        }
        str = String.fromCharCode.apply(String, rotCharArray);
        return str;
        

   
  }
  
  console.log(rot13("SERR PBQR PNZC"));


  function rot13(str) {
    var rotCharArray = [];
    var regEx = /[A-Z]/;
    str = str.split("");
    for (var x in str) {
      if (regEx.test(str[x])) {
        // A more general approach
        // possible because of modular arithmetic
        // and cyclic nature of rot13 transform
        rotCharArray.push(((str[x].charCodeAt() - 65 + 13) % 26) + 65);
      } else {
        rotCharArray.push(str[x].charCodeAt());
      }
    }
    str = String.fromCharCode.apply(String, rotCharArray);
    return str;
  }
  console.log(rot13("SERR PBQR PNZC"));
let string='aello'.charCodeAt(0)+13;
console.log(string);

console.log('vello'.charCodeAt(0));
console.log('hello'.charCodeAt(0));

console.log(String.fromcharCode(104));

function intToChar(int) {
    // 👇️ for Uppercase letters, replace `a` with `A`
    const code = 'a'.charCodeAt(0);
    console.log(code); // 👉️ 97
  
    return String.fromCharCode(code + int);
  }