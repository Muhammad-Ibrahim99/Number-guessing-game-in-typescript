console.log("guess a number between 1 to 10");

//creating variables:

let a : number = Math.floor(Math.random()*10);
import inquirer from "inquirer";

while(true){
    let input = await inquirer.prompt
    ({name: "guess", type: "number", message: "enter your guess number:"})


//code for given number:

let ans: number = input.guess

if (ans == a){
    console.log("Congratulations your guess number is correct");
break;}
else{
console.log("Sorry try again")
};


//adding hint:

if (a > ans){
    console.log("hint: your number is lower")
    
}
else{
    console.log("hint: your number is higher")
}

console.log("GAME OVER")

};




