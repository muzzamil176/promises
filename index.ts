
// promises

import showBanner from "node-banner";
 async function ab(){
await showBanner('Attending an Event','Lets discuss the stage of attending an event');
 }
await ab();

import chalk from "chalk"
console.log(chalk.underline.blue("start the day . firstly leave the car in garage to fix it"));
    console.log(chalk.red("do grocery"));

let garagecall= new Promise((resolve,reject)=>{
    setTimeout(()=>{
resolve("workshopcall........");
    },1000)
}).then((res)=>{
    console.log(res,chalk.green("youre car is fixed, Pick you`re car"));
})

let launaderycal= new Promise<string>((resolve, reject) => {
   setTimeout(()=>{
    resolve("laundarycall.........");
   },3000)
}).then((res)=>{
    console.log(res,chalk.yellowBright.overline("you`re dress is ready ,pick you`re dress"));
console.log(chalk.greenBright.bold("Attend the event now"));
})
