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

    var passwordLength = prompt("Please enter password length you desire. Length must be between 8 and 128 characters.")
    var upCase = confirm("Do you want upper case letters?");
    var lowCase = confirm("Do you want lower case letters?");
    var specChar = confirm("Do you want special characters?");
    var numb = confirm("Do you want numbers?");
    

    if (condition) {
        
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);