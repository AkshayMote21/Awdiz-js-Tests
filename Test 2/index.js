// Test - 2

// Question 1: Write a JavaScript function that takes an array of numbers as input and returns a new array with each number squared.
// Input: [1, 2, 3, 4, 5]
// var array1 = [1,2,3,4,5];
// function Squared(array){
//     var array2 = [];
//     for(i=0;i<array.length;i++){
//         array2[i] = array[i]*array[i];
//     }
//     return array2;
// }
// console.log(Squared(array1));

//---------------------------------------------------------------------------------------------------------------
// Question 2:Create a JavaScript function that checks if a given string is a palindrome (reads the same forwards and backwards).
// Input: "madam"
// function palindrome(string){
//     var reverseString = "" ;
//     for(var i = string.length-1;i>=0;i--){
//         reverseString = reverseString + string.charAt(i);
//     }
//     if(string === reverseString){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(palindrome("madam"));

//---------------------------------------------------------------------------------------------------------------
// Question 3:
// Write a JavaScript function that takes two arrays as input and returns a new array that contains only the elements that are present in both arrays (intersection).

// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// var array1 = [1,2,3,4];
// var array2 = [3,4,5,6];
// function Intersection(array1,array2){
//     var newArray = [];
//     for(i=0;i<array1.length;i++){
//         for(j=0;j<array1.length;j++){
//             if(array1[i] == array2[j]){
//                 newArray.push(array1[i]) ;
//             }
//         }
//     }
//     return newArray;
// }
// console.log(Intersection(array1,array2));

//---------------------------------------------------------------------------------------------------------------
// Question 4:
// Create a JavaScript function that takes an object and a key as input, and returns the value associated with that key in the object. If the key does not exist, return a default value.
// Input: {name: "Alice", age: 25}, "name"

// var obj ={name : "Alice", age:25}
// function Value(obj){
//     console.log(obj.name);
//     console.log(obj.age);
// }
// Value(obj);

//---------------------------------------------------------------------------------------------------------------
// Question 5:
// Write a JavaScript function that takes a number as input and returns an array of its digits.
// Input: 12345
// var number = 12345;
// function ArrayOfDigits(number){
//     var array = [];
//     string = number.toString();
//     for(var i = 0; i < string.length;i++){
//         array.push(string.charAt(i));
//     }
//     return array;
// }
// console.log(ArrayOfDigits(number));

//---------------------------------------------------------------------------------------------------------------
// Question 6:
// Create a JavaScript function that takes a string as input and returns a new string with each character duplicated (e.g., "hello" becomes "hheelllloo").
// Input: "hello"

// function duplicateLetters(str){
//         var str2='';
//     for(var i=0;i<str.length;i++){     
//         str2 += str[i]+str[i];
//     }
//     return str2;
// }
// console.log(duplicateLetters("hello"));

//---------------------------------------------------------------------------------------------------------------
// Question 7:
// Write a JavaScript function that takes an array of objects and a key, and returns an array containing the values associated with that key from each object.

// Input: [{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}], "name"


//---------------------------------------------------------------------------------------------------------------
// Question 8:
// Create a JavaScript function that takes a sentence as input and returns the number of words in the sentence.

// Input: "This is a sample sentence."
// var str = "This is a sample sentence.";
// function NumberOfWords(str){
    
// }
// console.log(NumberOfWords(str));
// function countwords(sentence){
//         var count=0;
//         for(var i=0;i<sentence.length;i++){
//             if (sentence[i]!==" ")
//                 count++
//         }
//         // count++;
//         console.log(count);
//         // console.log(sentence.length);
//     }
//     countwords("This  is a sample sentence");


//---------------------------------------------------------------------------------------------------------------
// Question 9:
// Write a JavaScript function that takes an array of numbers and returns the second smallest number in the array.
// Input: [10, 2, 14, 5, 7]
// var array = [10,2,14,5,7];
// function SecondSmallestNumber(array){
//     for(i = 0; i<array.length;i++){
//         for(j = i+1 ; j<i-1;j++){
//             if(array[i] > array[j]){
//                 console.log(array[i]);
//             }
//         }
//     }
//     // return array[i];
// }
// console.log(SecondSmallestNumber(array));

//---------------------------------------------------------------------------------------------------------------
// Question 10:
// Create a JavaScript function that takes a date object and returns a formatted string in the format "YYYY-MM-DD".
// date=[2024,4,15];
// function newDate(date){
//     a = date.slice(0,1);
//     b = date.slice(1,2);
//     c = date.slice(2);
//     d = a + '-' + b + '-' + c ;
//     console.log(d);
// }
// newDate(date);