//defines a function
      var add = function(number1, number2) { //defines a function
        return number1 + number2;
      };

      var number1 = parseInt(prompt("Enter a number:"));      // Converts variable number1 to an integer 
      var number2 = parseInt(prompt("Enter another number:")); // Converts variable number1 to an integer
      var result = add(number1, number2); //adds the two integers( number1 and number2)
      alert(result); //displays an alert screen giving the results