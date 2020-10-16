// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%^&*()_-+=;/?.,><";
var numbers = "1234567890";



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
    //prompt for how many characters for password criteria 
    //while loop was added to help with defining the criteria and will continue to loop until user input is correct
    // isNaN was used to alert user they did not enter a number
    //parseInt was used to parse a string and return a interger
    var passwordLength = prompt("Please enter password length you desire. Length must be between 8 and 128 characters.");
    while (isNaN(passwordLength) || (parseInt(passwordLength )< 8 || parseInt(passwordLength ) > 128)) {
        alert("Incorrect amout of letters or did not enter a number!")
        passwordLength = prompt("Please enter password length you desire. Length must be between 8 and 128 characters.");
    }
    //user confirm what characters he or she wants
    var upCaseConfirm = confirm("Do you want upper case letters?");
    var specCharConfirm = confirm("Do you want special characters?");
    var numbConfirm = confirm("Do you want numbers?");

    //logic with if statements to help concat the assignment codes (lines 2 -6)
    //created var possibleChar to help with generating possible returns
    var possibleChar = lowerCase.split("");
    console.log(possibleChar);
    
    if (upCaseConfirm) {
       possibleChar = possibleChar.concat(upperCase.split(""));
        console.log(possibleChar);
    }

    if (specCharConfirm) {
        possibleChar = possibleChar.concat(specialChar.split(""));
        console.log(possibleChar);
        
    }
    if (numbConfirm) {
        possibleChar = possibleChar.concat(numbers.split(""));
        console.log(possibleChar);
    //new var newpassword was created undefined 
    //for loop created to assign random characters from possibleChar variable 
        }
        var newpassword = "";
        for (var i = 0; i < passwordLength; i++){
            newpassword += possibleChar[Math.floor(Math.random() * possibleChar.length) + 0 ];

        }
        console.log(newpassword); 

        //returns new password
        return newpassword;

    }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);