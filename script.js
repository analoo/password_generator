// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {

  var passwordLength  = 0 ;
  while(passwordLength < 8 || passwordLength > 128){
    passwordLength = prompt("What is the length password that you need? (min 8 chars, max 128)");
  }

  return joinChars(passwordRequirements(), passwordLength);
}

function passwordRequirements() {
  var numbersBoolean = confirm("Do you want to include numbers?");
  var specialCharsBoolean = confirm("Do you want to include special characters?");
  var lowerCaseBoolean = confirm("Do you want to include lower case?");
  var upperCaseBoolean = confirm("Do you want to include upper case?");
  if (numbersBoolean || specialCharsBoolean || lowerCaseBoolean || upperCaseBoolean) {
    var userOptions = [numbersBoolean, specialCharsBoolean, lowerCaseBoolean, upperCaseBoolean];
    return userOptions
  }

  else {
    alert("You didn't select any requirements!")
    passwordRequirements()
  }

}


function joinChars(requirements, length) {
  var joinedText = "";
  var userOptionFunctions = [generateNumber, generateSpecialChar, generateLowerCase, generateUpperCase];
  var textGenerator = [];

  for (let i=0; i<requirements.length; i++){
    if(requirements[i]){
      textGenerator.push(userOptionFunctions[i]);

    }
  }
  for (let i = 0; i < length; i++) {
    var generator = textGenerator[i%textGenerator.length];
    joinedText += generator();
  }

  return joinedText;
}

// function that creates a lower case letter when called upon
function generateLowerCase() {
  var value = Math.floor(Math.random() * (122 - 97) + 97);
  return String.fromCharCode(value);
}

// function that creates an upper case letter when called upon
function generateUpperCase() {
  var value = Math.floor(Math.random() * (90 - 65) + 65);
  return String.fromCharCode(value);
}

// function that creates a number in string format
function generateNumber() {
  var value = Math.floor(Math.random() * (57 - 48) + 48);
  return String.fromCharCode(value);
}

// function that creates a special character
function generateSpecialChar() {
  var value = Math.floor(Math.random() * (47 - 33) + 33);
  return String.fromCharCode(value);
}
