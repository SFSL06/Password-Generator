
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

//Initialize an array to store the characters which will be used to generate password
var selectedCharacters = [];

// Function to prompt user for password options
function getPasswordOptions() {

if (confirm ("Do you want to have Uppercased characters in password?") == true)
{
  //add the Upper cased characters array to the array which will generate password characters
  selectedCharacters.push(upperCasedCharacters);  
}
if (confirm ("Do you want to have Lowercased characters in password?") == true)
{
  //add the Lower cased characters array to the array which will generate password characters
  selectedCharacters.push(lowerCasedCharacters);  
}
if (confirm ("Do you want to have Numeric characters in password?") == true)
{
  //add the Numeric characters array to the array which will generate password characters
  selectedCharacters.push(numericCharacters); 
}

if (confirm ("Do you want to have Special characters in password?") == true)
{
  //add the Special characters array to the array which will generate password characters
  selectedCharacters.push(specialCharacters)
}
return selectedCharacters;

}

// Function for getting a random element from an array
function getRandom(newArrayString) 
  {
    
    pswdCharacter = newArrayString[Math.floor(Math.random()*newArrayString.length)];
    return pswdCharacter;
  }
 
// Function to generate password with user input
function generatePassword(pswdLength, newArrayString)
{
  var password = [];
  for (i=0; i<pswdLength; i++)
  {
   pswdCharacter = getRandom(newArrayString);
   //push each randomly generated character into password array
   password.push(pswdCharacter);
   
  }
  
  //The join method will eliminate the commas in the password array
  password = password.join("");
  password = password.toString();
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

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
  selectedCharacters = getPasswordOptions();
  if (selectedCharacters == "")
   {
    alert("Password characters cannot be null");
    selectedCharacters = getPasswordOptions();
    }
  
var mySelectedCharacters = selectedCharacters.length;

// Combine the arrays of all the requested password characters into one array

var myNewArray = []; // Initialize the array for inserting sub-array
for (var i = 0; i < mySelectedCharacters; i++) {
for (var j = 0; j < selectedCharacters[i].length; j++) {
  myNewArray.push(selectedCharacters[i][j]); // Add items from same column into sub-array
}
}
//Eliminates commas in the array
 const newArrayString = myNewArray.join("");

 //run generate password function 
  var passwordString = generatePassword(pswdLength, newArrayString);
  var passwordText = document.querySelector('#password');
  passwordText.value = passwordString;

}
}
