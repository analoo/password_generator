// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordArray = [];
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

  // asks the user what length password they want
  var passwordLength = prompt("What is the length password that you need? (min 8 chars, max 128)");
  var numbersBoolean = confirm("Do you want to include numbers?");
  var specialCharsBoolean = confirm("Do you want to include special characters?");
  var lowerCaseBoolean = confirm("Do you want to include lower case?");
  var upperCaseBoolean = confirm("Do you want to include upper case?");
  var userAnswers = [numbersBoolean, specialCharsBoolean, lowerCaseBoolean, upperCaseBoolean];


  console.log(lowerCaseBoolean)
  true
  if (true) {
    password = "NiceTry!";
    return password;
  }
  else {
    alert("Try Again!")
  }





}

// function that creates a lower case letter when called upon
function generateLowerCase() {
  var lcValue = Math.floor(Math.random() * (122 - 97) + 97);
  return String.fromCharCode(lcValue);
}


function generateUpperCase() {
  var lcValue = Math.floor(Math.random() * (90 - 65) + 65);
  return String.fromCharCode(lcValue);
}

// console.log(generateUpperCase())

// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page