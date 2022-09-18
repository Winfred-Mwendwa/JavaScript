//regular expressions(regex) are used in programming languages to match parts of strings.
let myString = "Hello, World!";
let myRegex = /Hello/; //regex syntax to match a literal string i.e /hello/ would return false
let result = myRegex.test(myString); //test method to perform the match
console.log(result);

//use altrnation(or) operator to match multiple patterns;'|'
let petString = "James has a pet cat.";
let petRegex = /dog| cat| bird| fish/; // Change this line
let result1 = petRegex.test(petString);
console.log( result1);

//using the case insensitive (i) flag to ignore letter case when matching
let myString1 = "freecodeCamp";
let fccRegex = /freeCodeCamp/i;
let result2 = fccRegex.test(myString1);
console.log(result2);

//extract matches found using the match() method
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result3 = extractStr.match(codingRegex); //use the regex as the argument for match
console.log(result3);

//extract a pattern more than once using global search flag 'g'
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; 
let result4 = twinkleStar.match(starRegex); //you can use multiple flags on the regex
console.log(result4);

//match anything using wilcard '.' aka dot or period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // will match the strings sun, fun, bun, run, pun and nun.
let result5 = unRegex.test(exampleStr);
console.log(result5);

//using character classes [] to match a group of characters
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result6 = vowelRegex.test(quoteSample);
console.log(result6);

let result7= quoteSample.match(vowelRegex);
console.log(result7);

//match a range of characters using hyphen character
let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; 
let result8 = quoteSample1.match(alphabetRegex);
console.log(result8) ;

//match a range of characters and a range of numbers
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex2 = /[h-s2-6]/ig;
let result9 = quoteSample2.match(myRegex2);
console.log(result9);

//specify characters you do not want to match using negated character sets and the caret character ^
let quoteSample3 = "3 blind mice.";
let myRegex3 = /[^aeiou0-9]/gi; 
let result10 = quoteSample3.match(myRegex3);
console.log(result10);

//match characters that occur one or more times in a row using + sign
let difficultSpelling = "Mississippi";
let myRegex4 = /s+/g; 
let result11 = difficultSpelling.match(myRegex4);
console.log(result11);

//match characters that occur zero or more times using asterisk
let chewieQuote= 'Aaaaaaaaaaaaaaaarrrgh!';
let chewieRegex= /Aa*/;
let result12= chewieQuote.match(chewieRegex);
console.log(result12);

