function Evennumberchecker()
{
const number = prompt("Enter a number: ");

//Check if the number is odd
if(number % 2 == 0) 
{
    document.write("The number is even, User");
    console.log("The number is even, User");
}

//If any other number
else
{
    document.write("The number is not even, User ");
    console.log("The number is not even, User");
}
}

Evennumberchecker();