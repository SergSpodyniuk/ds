

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
if (Number.isNaN(value)){
 
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
else {
    console.log("Таке чуство шо Бог десь наказує нас за шось")
}

/*third homework*/
function recursiveOddSumTo(number) {
    let a = 0;
        if (number%2 === 0){
        number -= 1;
     }
while (number >= 1){

     a+=number
   number-=2;

}
return a;
};

console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) // 25

function iterativeOddSumTo(number) {
    let a =0;
for (let b =1;b<=number;b+=2){
    a+=b
}
    return a;
    
};
    
    console.log(iterativeOddSumTo(1)) // 1
    console.log(iterativeOddSumTo(10)) // 25