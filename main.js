//1-What to wear
//Create a function (that you have to name) that has temperature as parameter.
// Based on the temperature it should return a string with what the user should wear.
// You decide what the user should wear based on the temperature.
function clothesToWear (temperature){
    if (temperature >= 18){
        return "wear shorts and a t-shirt"
    }
    if (temperature >= 10){
        return "wear a jacket"
    }
}
console.log(clothesToWear(20))// Logs out: "shorts and a t-shirt"
console.log(clothesToWear(10))// Logs out: "wear a jacket"

//2-Dice game
//Write a function that simulates a dice roll.
// You call the function with the number of times you would like to roll the dice.
// Every time the dice hits a 6 log out You just hit 6!
// Part 1
function rollTheDice(numOfRolls) {
    let amountOfSixes =0
    for (let i = 0; i < numOfRolls; i++) {
        let randomNumber1 = Math.floor((Math.random() * 6) + 1);

        if (randomNumber1 === 6)
            console.log("You just hit "+randomNumber1+", you have great luck");
        else
            console.log("You hit "+randomNumber1+", better luck next time");
//Part 2
        if(randomNumber1 === 6){
            amountOfSixes++
            if(amountOfSixes === numOfRolls){
                console.log("You hit the jackpot")
            }
        }
    }
}
rollTheDice(3)