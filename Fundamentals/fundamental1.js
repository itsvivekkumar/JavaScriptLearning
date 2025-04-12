// 'use strict';
//Variable scoping=execute global context first and then statement of inside function and then inner funct if present.
var a;
const b=10;
let c=5;
console.log(a,b,c);
console.log(typeof a,typeof b,typeof c);

const detail=function(){
   console.log(++c);           //global variable can be access inside 
   let d=1;
   console.log(d+1);
   const calAge=function(){
    let e=1;
    console.log(e+c+d);
   }
   calAge();
}
detail();
console.log(c+1);
// console.log(d++);           //we cannot access child variable from outside or global
// calAge();                 //also we can't access child function from outside or global



//Now using this keyword.
//From regular funct we can use this key as it act as owner 
//but inside arrow funct we can't as arrow funct does not own this itself. Here we can access global thing using this key .
const year=2025;
const isAdult=true;
console.log(this);               //points to window or browser
const vivek={
    fname:'Bablu',
    born:2002,
    isMen: (year-this.born > 20) ? 'Men' : 'Boy',
    details: function(){
        console.log(this);              //points to object vivek
        console.log(`Hi I am ${this.fname} and I am ${year-this.born} year old`);
    },
    
   maturity: () => {
    console.log(this);               //points to window or browser
    console.log(`${isAdult} ::  Myself ${this.fname} and I am a ${this.isMen}`)
   }
}
console.log(vivek.details());   //print content inside details. And if vivek.details then print details as funct only.
console.log(vivek.maturity());   //The content inside maturity can't access using this keyword as Arrow funct does not owns it.


