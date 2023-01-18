function Oddnumberchecker ()
{
const number = prompt("Enter a number: ");

//Check if the number is odd
if(number % 2 == 1) 
{
    document.write("The number is odd. user");
}

//If any other number
else
{
    document.write("The number is not odd.user ");
}
}

Oddnumberchecker();