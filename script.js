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
    var passwordLength = prompt("Please enter password length you desire. Length must be between 8 and 128 characters.");
    
    //if statement for using uppercase, lowercase, numbers, and special characters
    if (passwordLength >=8 && passwordLength <=128 && upCaseConfirm && lowCaseConfirm && specCharConfirm && numbConfirm)  {
        function generate(length = passwordLength){
            var all = upperCase + lowerCase + specialChar + numbers;
            var password ="";
                for (var i = 0; i < length; i++){
                    var character = Math.floor(Math.random() * )
                }
        }
    }
    else    {
        alert("Please enter a password length between 8 and 128!")
    }
        
    
    //user confirm what characters he or she wants
    var upCaseConfirm = confirm("Do you want upper case letters?");
    var lowCaseConfirm = confirm("Do you want lower case letters?");
    var specCharConfirm = confirm("Do you want special characters?");
    var numbConfirm = confirm("Do you want numbers?");
    

    if (condition) {
        
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);