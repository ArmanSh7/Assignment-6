
var num1 = parseInt(window.prompt("Please enter the first number"),10);
var num2 = parseInt(window.prompt("Please enter the second number"),10);
if(num1>num2)
    window.document.write("First number: "+ parseInt(num1, 10)+ " is larger");
else if(num2>num1)
    window.document.write("Second number: "+ parseInt(num2, 10)+ " is larger");
else
    window.document.write("Number 1: "+ parseInt(num1, 10)+ " and Number 2: "+ parseInt(num2, 10)+" are equal!");

