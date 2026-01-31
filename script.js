// ----------------------- Assignment no : 07 ----------------------- //
// ------------------------ Question no : 01 ----------------------- //
// ------------------------ Part (i) ----------------------- //
var input = Number(prompt(" Write  positive integer ...."))
if (input > 0 && Number.isInteger(input)) {alert(" OK! Now ")}
else {alert("The number is not  a positive integer") }

// ------------------------ Part (ii) ----------------------- //
var input = prompt(" Write a number to which you want to round off.")
document.write("Your number is " + input + "<br>" + "After round off the number  the result is "
 + Math.round(input))

// ------------------------ Part (iii) ----------------------- //
var input = prompt(" Write a number to which you want to round off. In this program we use Math.floor")
document.write("Your number is " + input + "<br>" + "After round off the number  the result is "
 + Math.floor(input))

// ------------------------ Part (iv) ----------------------- //
var input = prompt(" Write a number to which you want to round off. In this program we use Math.ceil")
document.write("Your number is " + input + "<br>" + "After round off the number  the result is "
 + Math.ceil(input))

// ------------------------ Question no : 02 ----------------------- //
// ------------------------ Part (i) ----------------------- //
var input = Number(prompt(" Write negative number with decimal ...."))
if (input < 0 && Number.isNegative(input)) {alert("  OK! Now ")}
else {alert("The number is not  a negative number ") }

// ------------------------ Part (ii) ----------------------- //
 var input = prompt(" Write a negative number  number to which you want to round off.")
 if (input < 0 && Number.isNegative(input)) {alert("  OK! Now ")}
else {alert("The number is not  a negative number ") }
 document.write("Your number is " + input + "<br>" + "After round off the number  the result is "
 + Math.round(input))

// ------------------------ Part (iii) ----------------------- //
var input = prompt(" Write a number to which you want to round off. In this program we use Math.floor")
document.write("Your number is " + input + "<br>" + "After round off the number  the result is "
 + Math.floor(input))

 // ------------------------ Part (iv) ----------------------- //
var input = prompt(" Write a number to which you want to round off. In this program we use Math.ceil")
document.write("Your number is " + input + "<br>" + "After round off the number  the result is "
 + Math.ceil(input))

// ------------------------ Question no : 03 ----------------------- //
 var input = prompt(" Write a number to which you want to absolute")
  document.write("Your number is " + input + "<br>" + "After absolute the number  the result is "
  + Math.abs(input))

// ------------------------ Question no : 04 ----------------------- //
var dice = Math.floor(Math.random() * 6) + 1;
alert ("Your dice number is " + dice)

// ------------------------ Question no : 05 ----------------------- //
var dice = Math.floor(Math.random() * 2) +1;
alert ("2 = Head &  1 = Tail : " + dice)

// ------------------------ Question no : 06 ----------------------- //
var dice = Math.floor(Math.random() * 99) +1;
alert ("Random number between 1 and 100 is : " + dice)

// ------------------------ Question no : 07 ----------------------- //
var weight = prompt( " Enter your weight in kg  ")
alert( "Your weight magnitude is " + parseFloat(weight))

// ------------------------ Question no : 08 ----------------------- //
var scrertNumber = Math.floor(Math.random() * 9) + 1
var userInput = prompt("Enter your number between 1 - 100")
if ( userInput === scrertNumber){alert( "Congragulate! Your answer is correct")}
else{alert("Oh! Try again")}
alert()