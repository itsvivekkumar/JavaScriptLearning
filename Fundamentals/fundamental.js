// console.log("This is first  line of JS tutorial");

// //variable and data types
// const a=4;
// let b='ram'; 
// let c=true;
// let d=null;
// console.log(a,b,c,d);
// console.log(typeof(a),typeof(b),typeof(c),typeof(d));

// //operator
// const now=2025;
// const vivekAge=now-2002;
// const babluAge=now-2000;
// console.log(vivekAge,babluAge);
// console.log(vivekAge >babluAge);
// console.log(now-2002 >now -2000);         //comparision

// const x=5,y=9;
// console.log(x+y) 

// const fname="vivek",lname="surya",job="officer";
// // console.log(fname+" "+lname)          //concatenation

// //using template string
// const detail="Hi I am " +fname+" "+lname+ " works as "+job+ "and I'am "+vivekAge+"old";
// console.log(detail);
// const detail1=`Hi I'am ${fname} ${lname} works as ${job} and I am ${babluAge} old`;
// console.log(detail1);

// //if-else
// const age=10;
// if(age>=18){
//     console.log("U are elgilble to vote");
// }
// else{
//     console.log("Not eligiable to vote...");
// }

// //type conversion
// const a1="10";
// console.log(a1+5);   //105,concatenation will happen automatic
// console.log(Number(a1)+5);    

// const b1=23;       
// console.log(b1+5);    
// console.log(String(b1)+5);   //here concatenation will happen 


// //type coercion
// console.log('11'+5+1+'0');   //11510=here + sign act as coersion converts integer into string and then calculate
// console.log('11'-5-1 );     //5=here - sign act as coersion converts string into integer and then calculate

// console.log('11'-5+'1' );  //61=fist - sign subtract and then + sign concatinate them . 6+1=61
// console.log('11'+5+1-'9');   //1142=fisrt use + sign for concatination and then using - sign subtract both number .1151-9=1142

// //falsy values in JS are 0,undefied,NaN,false,null string.
// const x1=0 ,y1='Hi',z1='';

// console.log(Boolean(x1));  //false
 
// console.log(Boolean(y1));  //true
// console.log(Boolean(z1));   //false
// if(c){
//     console.log("value not should be 0 ,try entering some value ");
// }
// else{
//     console.log("value is 0");
// } 


//equality operator like strict (===)  and loose(==)
const n=23,n1=23;
console.logz(n===n1);
console.logz(n==n1);