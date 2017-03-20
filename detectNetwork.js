// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  if((cardNumber.substring(0,2) === '38' || cardNumber.substring(0,2) === '39') && cardNumber.length === 14 ){
  	return 'Diner\'s Club';
  }
  if((cardNumber.substring(0,2) === '34' || cardNumber.substring(0,2) === '37') && cardNumber.length === 15 ){
  	return 'American Express';
  }
  if(cardNumber[0] === '4' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)){
  	return 'Visa';
  }
  if((['51','52','53','54','55'].indexOf(cardNumber.substring(0,2)) > -1) && cardNumber.length === 16){
  	return 'MasterCard';
  }
  if((cardNumber.substring(0,4) === '6011' || ['644','645','646','647','648','649'].indexOf(cardNumber.substring(0,3)) > -1 || cardNumber.substring(0,2) === '65') 
  	&& (cardNumber.length === 16 || cardNumber.length === 19)) {
  	return 'Discover';
  }
  if(['5018','5020','5038','6304'].indexOf(cardNumber.substring(0,4)) > -1 && cardNumber.length >= 12 && cardNumber.length < 20){
  	return 'Maestro';
  }
};