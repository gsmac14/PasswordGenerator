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
    while (passwordLength < 8 || passwordLength > 128) {
        alert("Incorrect amount of letters!")
        passwordLength = prompt("Please enter password length you desire. Length must be between 8 and 128 characters.");
    }
    //user confirm what characters he or she wants
    var upCaseConfirm = confirm("Do you want upper case letters?");
    var specCharConfirm = confirm("Do you want special characters?");
    var numbConfirm = confirm("Do you want numbers?");

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
    
        }
        var newpassword = "";
        for (var i = 0; i < passwordLength; i++){
            newpassword += possibleChar[Math.floor(Math.random() * possibleChar.length) + 0 ];

        }
        console.log(newpassword); 

        return newpassword;



    //if statement for using uppercase, lowercase, numbers, and special characters
    // if (passwordLength >=8 && passwordLength <=128 && upCaseConfirm && lowCaseConfirm && specCharConfirm && numbConfirm)  {
    //     function generate(length = passwordLength){
    //         var all = upperCase + lowerCase + specialChar + numbers;
    //             for (var i = 0; i < length; i++){
    //                 var character = Math.floor(Math.random() * all.length);
                    
    //             }
    //     }
    // }
    // else    {
    //     alert("Please enter a password length between 8 and 128!")
    // }


        
    
   

    if (condition) {
        
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);