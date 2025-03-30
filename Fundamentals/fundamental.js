console.log("This is first  line of JS tutorial");

//variable and data types
const a=4;
let b='ram'; 
let c=true;
let d=null;
console.log(a,b,c,d);
console.log(typeof(a),typeof(b),typeof(c),typeof(d));

//operator
const now=2025;
const vivekAge=now-2002;
const babluAge=now-2000;
console.log(vivekAge,babluAge);
console.log(vivekAge >babluAge);
console.log(now-2002 >now -2000);         //comparision

const x=5,y=9;
console.log(x+y) 

const fname="vivek",lname="surya",job="officer";
// console.log(fname+" "+lname)          //concatenation

//using template string
const detail="Hi I am " +fname+" "+lname+ " works as "+job+ "and I'am "+vivekAge+"old";
console.log(detail);
const detail1=`Hi I'am ${fname} ${lname} works as ${job} and I am ${babluAge} old`;
console.log(detail1);





