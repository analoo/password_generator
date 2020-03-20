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

  // creates a loop that keeps running as long as user provides an invalid password length
  var passwordLength = 0;
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("What is the length password that you need? (min 8 chars, max 128)");
  }

  // once an acceptable password length is created, it calls on the join chars function to generate the string
  return joinChars(passwordRequirements(), passwordLength);
}

// this function asks the user to confirm requirements and then stores those options in a string
function passwordRequirements() {

  var findTrue = -1;

  // A while loop starts by assuming that the user has not selected a valid set of requirements
  while (findTrue === -1) {

    var numbersBoolean = confirm("Do you want to include numbers?");
    var specialCharsBoolean = confirm("Do you want to include special characters?");
    var lowerCaseBoolean = confirm("Do you want to include lower case?");
    var upperCaseBoolean = confirm("Do you want to include upper case?");
    var userOptions = [numbersBoolean, specialCharsBoolean, lowerCaseBoolean, upperCaseBoolean];

    // find true stores the result of index of the user options. One must be true in order for the find true value to change
    findTrue = userOptions.indexOf(true);
    if (findTrue === -1) {
      alert("You did not select any character requirements! Let's do this again")
    }


  }
  //A list of the user requirements will be returned when this function runs
  return userOptions
}



// Join Chars takes in user char and length requirements to generate a password
function joinChars(requirements, length) {
  // First, a verb to store the password string is generated
  var joinedText = "";
  // This variable houses the names of the functions that generate different char values
  var userOptionFunctions = [generateNumber, generateSpecialChar, generateLowerCase, generateUpperCase];
  // true User Reqs is a list that will house all requirements that user selected as true
  var trueUserReqs = [];
  // this for loop iterates over the requirements and adds values to the true user reqs
  for (let i = 0; i < requirements.length; i++) {
    if (requirements[i]) {
      trueUserReqs.push(userOptionFunctions[i]);
    }
  }

  // this loop creats the actual password. First, for loop runs for the length of the password
  for (let i = 0; i < length; i++) {
    // a new var called generator points to the value that the item in the list trueUserReqs is pointing to, in this case, a function
    var generator = trueUserReqs[i % trueUserReqs.length];
    //when generator is ran as a function, it runs the function that it is pointing to and since these functions return string, we can concatenate the new char using "+="
    joinedText += generator();
  }
  // our function returns the result of the loop
  return joinedText;
}

// function that creates a lower case letter when called upon 
function generateLowerCase() {
  // random number picker that uses ascii knowledge of lower case
  var value = Math.floor(Math.random() * (122 - 97) + 97);
  return String.fromCharCode(value);
}

// function that creates an upper case letter when called upon
function generateUpperCase() {
  // random number picker that uses ascii knowledge of Upper Case
  var value = Math.floor(Math.random() * (90 - 65) + 65);
  return String.fromCharCode(value);
}

// function that creates a number in string format
function generateNumber() {
  // random number picker that uses ascii knowledge of numbers

  var value = Math.floor(Math.random() * (57 - 48) + 48);
  return String.fromCharCode(value);
}

// function that creates a special character
function generateSpecialChar() {
  var specialchars = [];
  // special characters are non contiguous so I created a list of special chars to randomly select from
  for (let i = 33; i <= 47; i++) {
    specialchars.push(i);
  };

  for (let i = 58; i <= 64; i++) {
    specialchars.push(i);
  };
  // random number picker that uses ascii knowledge
  var value = specialchars[Math.floor(Math.random() * (specialchars.length))];
  return String.fromCharCode(value);
}


