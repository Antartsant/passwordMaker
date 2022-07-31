// Assignment Code
//
char = {
  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"],
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z"],
  numeric: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  special: ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "/", ":", ";", "<", ">", "?" ]
}
var passLength = "#"
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  i = 0;
  for (let i = 0; i < passLength.length; i++) {
    password = Math.floor(Math.random() * passLength+1)
    
  }
}

var needPassword = confirm("Do you need a password? Yes or no?")
console.log(needPassword);

if (needPassword) {
  passLength = prompt("How long would you like the password? 8-128 chr")
}
console.log(passLength);

var needLowerCase = confirm("Would you like Lower Case?")
var needUpperCase = confirm("Would you like Upper Case?")
var needNumeric = confirm("Would you like Numeric Values?")
var needSpecial = confirm("Would you like Special Characters?")

console.log(needLowerCase);
console.log(needUpperCase);
console.log(needNumeric);
console.log(needSpecial);

let zen = "";
// switch (zen) {
//   case (needLowerCase):
//     if (needLowerCase) {
//       zen = zen.concat(char.lowercase)
//     }
//     break;
//   case 1:
//     if (needUpperCase) {
//       zen = zen.concat(char.uppercase)
//     }
//     break;
//   case 2:
//     if (needNumeric) {
//       zen = zen.concat(char.numeric)
//     }
//     break;
//   case 3:
//     if (needSpecial) {
//       zen = zen.concat(char.special)
//     }
//     break;
//   default:
//     console.log("you're stupid");
//     console.log(zen);
//     break;
// }

function combineString() {
  if (needLowerCase) {
    zen = zen.concat(char.lowercase)
  }
  if (needUpperCase) {
    zen = zen.concat(char.uppercase)
  }
  if (needNumeric) {
    zen = zen.concat(char.numeric)
  }
  if (needSpecial) {
    zen = zen.concat(char.special)
  }
}
combineString()
console.log(zen);
