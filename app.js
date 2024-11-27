

"use strict";
/*first homework*/ 
// 1
/*const x = 10
const y = 4
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x**y);
console.log(Math.sqrt(y));*/

// 2
/*let myVariable = "42";
console.log(myVariable);

myVariable = Number(myVariable)
console.log(myVariable);

myVariable = String(myVariable);
console.log(myVariable);

myVariable = Boolean(myVariable);
console.log(myVariable);*/

/*second homework*/ 
//1
let text = "";
for(let i = 1; i<=100;i++){
    
    if (i%3 === 0 && i%5 === 0 ){
        text+= " LOLKEK"
    }
       else if (i%3 === 0){
        text+= " KEK"
    }        
        else if (i%5 === 0){
            text+= " LOL"

        }
        else{ 
            text+= ` ${i}`}
}
console.log(text);
let text1 = "";
let text2 = "";
//2
const value = 10;
let i = 0;
if (Number.isNaN(value) === false){
 
  for (let a =1;a<value;a++){
    if (a%2 === 0){
        text1 += ` ${a}`;
    }
  
   }
   while (i<value-2){
    i+=2;
    text2 += ` ${i}`;

   }
}
console.log(text1);
console.log(text2);