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
const n='23',n1=23;
console.log(n===n1);
console.log(n==n1);

//switch case
const eid='tuesday';
switch(eid){
    case 'monday':
        console.log("its monday");
        break;
    case 'tuesday':
        console.log("its tuesday");
             
    case 'wednesday':
         console.log("its wednesday");
            break;  
    default:
        console.log("please enter valid day name ......") 
        break;
    
}

//logical opperator =&&, ||,!=
const isLicense =false;
const is18Plus=true;
if(isLicense && is18Plus){
    console.log("u can drive easily");
} else{
    console.log("you cannot drive,fill required detail for driving");
}


//functions declaration-here funct name must be provided and we can also call funct before intialization.
console.log(add(5,6));
function add(a,b){
    return a+b;
}
console.log(add(5,9));

//funct as expression-here funcion define as expression and store inside variable and also we can't declare before initilization.

const multiply=function(c,d){
    return c*d;
}
console.log(multiply(5,5));


//arrow funct-
const calYear=birthYear=> 2025-birthYear;
console.log(calYear(2002));

const division=(x,y)=>{
    const ans=(x>y) ? x/y : y/x;
    return ans;
}
console.log(division(10,20));

//array
const arr=['vivek','surya','bablu','kumar'];
console.log(arr[1],arr.length);

const arr1=new Array(1,2,3,4,5);
console.log(arr1[3],arr1.length);
 const arr2=['Hi','miss',55,arr1];
 console.log(arr2,'the size of arr2 is =',arr2.length);


 //Object in JS
 const employeeDetail={
    'fname' :'Virat',
    lanme :'kohli',
    age :20,
    arr3 :['Hello','madam',16]
    
 }
 console.log(employeeDetail);
 console.log(employeeDetail.lanme);
 console.log(employeeDetail.fname);






