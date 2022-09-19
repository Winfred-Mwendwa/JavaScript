//match whitespaces
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // similar to [\r\t\f\n\v]
let result = sample.match(countWhiteSpace);
console.log(result);

//match non-whitespaces
let sample1 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; //similar to [^ \r\t\f\n\v]
let result1 = sample.match(countNonWhiteSpace);
console.log(result1);

//use quantity specifiers to specify upper and lower number of matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/g; // matches the entire phrase Oh no only when it has 3-6 letter h's 
let result2 = ohRegex.test(ohStr);
console.log(result2);

//specify only the lower number of matches
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; //matches the word Hazzah only when it has 4 or more(at least 4) letter z's
let result3 = haRegex.test(haStr);
console.log(result3);

//specify exact number of matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // match the word timber only when it has 4 letter m's
let result4 = timRegex.test(timStr);
cosole.log(result4);

//check for characters that may or may not exist using '?'
let favWord = "favorite";
let favRegex = /favou?rite/; // matches both american english favorite and british english favourite
let result5 = favRegex.test(favWord);
cosole.log(result5);

//using lookaheads(positive ?= negative ?!)
//A practical use of lookaheads is to check two or more patterns in one string. 
let sampleWord = "astronaut";
let pwRegex = /(?=.\w{5,})(?=.*\d{2,}.*)/; //alphanumeric char must appear at least 5 times;two digits can appear anywhere, start mid or end
let result6 = pwRegex.test(sampleWord);

//check for mixed grouping of characters using ()
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin |Eleanor|Franklin D.) Roosevelt/; //checks for Eleanor Roosevelt or Franklin Roosevelt while accomoodating middle names: Franklin D.
let result7 = myRegex.test(myString); 

//use capture groups to  reuse patterns
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; //match a string that consists of only the same number repeated exactly three times separated by single spaces.
let result8 = reRegex.test(repeatNum);

//using capture groups to search and replace
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText ='$3 $2 $1'; //use dollar signs to access capture group
let result9 = str.replace(fixRegex, replaceText);
console.log(result9);

//remove white spaces from beginning and end of strings
let hello = "   Hello, World!  ";
let wsRegex = /^\s+Hello, World!\s+$/; 
let result10 = hello.replace(wsRegex,'Hello, World!'); 