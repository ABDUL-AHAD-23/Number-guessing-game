#! /usr/bin/env node
// console.log("Guess a number between 1 to 10");
// let a:number= Math.floor(Math.random()*10)
// import inquirer from "inquirer";
// while (true) {
//     let input=await inquirer.prompt
//     ({name:"guess"
//         ,type:"number"
//         ,message:"Enter your guess"});
//     let ans:number= input.guess
//     if (a==ans)
//         {console.log("congratulation your guess number is correct");}
//     else if (a>ans)
//         {console.log("your guess number is greater than the number I am thinking of");}
//     else if (a<ans) {
//         {console.log("your guess number is smaller than the number I am thinking of");
//         }
//     }
//     else{console.log("Game over");}
// }
import inquirer from "inquirer";
console.log("Guess a number between 1 to 10");
let a = Math.floor(Math.random() * 10);
while (true) {
    let input = await inquirer.prompt({
        name: "guess",
        type: "number",
        message: "Enter your guess"
    });
    let ans = input.guess;
    if (a == ans) {
        console.log("Congratulations! Your guess is correct.");
        break; // This will stop the loop once the correct number is guessed
    }
    else if (a > ans) {
        console.log("Your guess is smaller than the number I am thinking of.");
    }
    else {
        console.log("Your guess is greater than the number I am thinking of.");
    }
}
