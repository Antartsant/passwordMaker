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
  let zen = [];
  passLength = prompt("How long would you like the password? 8-128 chr");
  console.log(passLength);
  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert("Please enter a value between 8-128.");
    generatePassword();
  }
  var needLowerCase = confirm("Would you like Lower Case?");
  var needUpperCase = confirm("Would you like Upper Case?");
  var needNumeric = confirm("Would you like Numeric Values?");
  var needSpecial = confirm("Would you like Special Characters?");
  if (!needLowerCase && !needUpperCase && !needNumeric && !needSpecial) {
    alert("Please select at least one password criteria.")
    generatePassword();
  } 
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
  combineString();
  for (var i = 0; i <= passLength; i++) {
    var randomPicker = Math.floor(Math.random() * zen.length);
    password += zen[randomPicker, randomPicker -1]
  }
  return password;
}
