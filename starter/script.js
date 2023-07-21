// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom() {
  pswdCharacter = lowerCasedCharacters[Math.floor(Math.random()*lowerCasedCharacters.length)];
  return pswdCharacter;
}

// Function to generate password with user input
function generatePassword(pswdLength) {
  var password = [];
  for (i=0; i<pswdLength; i++)
  {
   pswdCharacter = getRandom();
   console.log(pswdCharacter);
   password.push(pswdCharacter);
  }
  //The join method will eliminate the commas in the password array
  password = password.join("");
  passwordString = password.toString();
  console.log("Password: " + passwordString);
  return
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

//Write password to the #password input
function writePassword() 
{
let userInput = prompt("How long should your password be?");
var pswdLength = userInput;
if (pswdLength < 8 || pswdLength > 129)
{
  alert("Please re-enter a number between 8 and 129");
  writePassword ();
}
else
{
var password = generatePassword(pswdLength);
var passwordText = document.querySelector('#password');
passwordText.value = passwordString;
console.log(passwordText);
}
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);