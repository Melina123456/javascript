//nested if else
let winningNumber=14;
// here = is added infront of the prompt because prompt take number as string so to convert + is added infront
let guessNumber=+prompt("Guess the number");
if(guessNumber === winningNumber)
{
    console.log("Your guess is right.");
}else{
    if(guessNumber<14)
    {
        console.log("your guess is low ");
    }else{
        console.log("your guess is high.");
    }
}