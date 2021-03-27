

// Special characters
const specialCharacters = "!@#$%^&*()-=_+<>";
const generateButton = document.getElementById('#generate');
document.querySelector("#generate").addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompts that come up after you click generate password
function generatePassword() {
  
  var passwordLength = prompt("Please enter the number of characters you want for your password.  It must be between 8-128 characters.");
  while(passwordLength <= 7 || passwordLength >= 129) {
    alert("Password length must be between 8-50 characters Try again");
    

    } 

    // Repeat back how many charactes the user will have  
    alert("Your password will have " + passwordLength + " characters.");
  

  var numbers = confirm("Numbers?");

  var lowerCases = confirm("Lowercase letters?");

  var upperCases = confirm("Uppercase letters?");

  var special = confirm("Special characters?");

  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  
  var options = countOptions(numbers, lowerCases, upperCases, special);
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";


  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};


  
  passwordLength -= options;   
  
  if (numbers === true) {
    for (let index = 0; index < Math.floor(Math.random() * passwordLength); index++) {
      minimumNumbers += functionArray.getNumbers();
      passwordLength--;
      
    }

    
  }

  if (lowerCases === true) {
    for (let index = 0; index < Math.floor(Math.random() * passwordLength); index++) {
      minimumLowerCases += functionArray.getLowerCases();
      passwordLength--;
      
    }
    

  }

  if (upperCases === true) {
    for (let index = 0; index < Math.floor(Math.random() * passwordLength); index++) {
      minimumUpperCases += functionArray.getUpperCases();
      passwordLength--;}
    

  }

  if (special === true) {
    for (let index = 0; index < Math.floor(Math.random() * passwordLength); index++) {
      minimumSpecialCharacters += functionArray.getSpecialCharacters();
      passwordLength--;}
    

  }


  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters




  // Generator functions


  // Checks to make sure user selected ok for all and uses empty minimums from above
// if (special) {
//       functionArray = functionArray.concat(specialCharacters)
//     }

//       if (special = true) {
//         functionArray === specialChar; 
//       }
//       if (numbers === true) {
//         functionArray = number; 
//       }
//       if (upperCases === true) {
//         functionArray = alphaUpper;
//       }
//       if (lowerCases === true) {
//         functionArray = alphaLower;
//       }

//     if (numbers) {
//       functionArray = functionArray.concat(getNumbers)
//     }

//     if (lowerCases) {
//       functionArray = functionArray.concat(getLowerCases)
//     }

//     if (upperCases) {
//       functionArray = functionArray.concat(getUpperCases)
//     }








  // empty string variable for the for loop below
  var randomPasswordGenerated = "";

  // loop getting random characters



  

  // to make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;

  };
  function countOptions(numbers, lowerCases, upperCases, special) {
    var options = 0
    if (numbers === true) options++;
    if (lowerCases === true) options++;
    if (upperCases === true) options++;
    if (special === true) options++;
      
    return options;
  };
