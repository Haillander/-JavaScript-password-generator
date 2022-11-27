// Array of special characters, letters, and numbers that can be used in the generator
var specialChar = ['!', '#', '$', '%', '&', '()', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{','|', '}', '~'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9','0'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//var of empty array that users choices will go into.
var charChoice = [];
//Empty string that will be filled when pw is generated if all questions are answered.
var generatedPw = '';

//Function that will prompt the user with questions on what they want to use for their pw.
function passwordQuestions()
