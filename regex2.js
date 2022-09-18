//search for characters at the beginning of strings
//outside of a character set, the caret operator ^ is used to search for characters at the begining of strings
let caboose = "The last car on a train is the caboose";
let firstRegex = /^The/; 
let result = firstRegex.test(caboose);
console.log(result);

//search for patterns at the end of strings using the dollar sign
let caboose1 = "The last car on a train is the caboose";
let firstRegex1 = /caboose$/; 
let result1 = firstRegex1.test(caboose);
console.log(result1);

//shorthand character classes
let quoteSample1 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // this is short for [A-Za-z0-9_] inclusive of the underscore
let result2= quoteSample1.match(alphabetRegexV2).length; //count the number of alphanumeric characters
console.log(result2);

//match non-alphanumeric characters using the opposite shorthand character class \W
let quoteSample2 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; 
let result3 = quoteSample2.match(nonAlphabetRegex).length;
console.log(result3);
let result4 =quoteSample2.match(nonAlphabetRegex);
console.log(result4);

//serach for all digits using \d shorthand
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\d/g; 
let result5 = movieName.match(noNumRegex).length;
console.log(result5);

//search for non-digit characters using opposite shorthand \D
let movieName1 = "2001: A Space Odyssey";
let noNumRegex1 = /\D/g;
let result6 = movieName.match(noNumRegex).length;
console.log(result6);

