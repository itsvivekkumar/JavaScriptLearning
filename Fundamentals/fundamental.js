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

 //for loop
 const arr3=new Array(1,2,3,4,5);
 for(let i=0; i<arr3.length; i++){
    console.log(arr3[i]);
 }
 //for each loop
 arr3.forEach((item) =>{
    console.log(item+10);
 })


 //practicing more arrow funtiions 
 const villageDetail={
    name :'Tilouthu',
    post :'dehri',
    station :'sasaram',
    code :123456,
    distric :'rohtas',
    state :'bihar'

 }
 const findDetils=(details)=>{
    console.log(details);
 }
 findDetils(villageDetail);


//Arrow functions don’t bind this, so using this.name inside an arrow function will not work as expected
 const person = {
    name: "John",
    age: 25,
    greet: () => console.log(`Hello, my name is ${person.name}`) 
};

person.greet();

//Arrow functions don’t have their own this, so use regular functions for methods.
const user = {
    name: "Alice",
    age: 30,
    greet() {
        console.log(`Hi, I am ${this.name}`);               // Correct usage of `this`
    }
};

user.greet();

// Arrow Functions Inside Methods=>Arrow functions inherit this from their surrounding scope, making them great for forEach().
const student = {
    name: "David",
    subjects: ["Math", "Science", "History"],
    listSubjects() {
        this.subjects.forEach(subject => console.log(`${this.name} studies ${subject}`));
    }
};

student.listSubjects();

//Returning an Object from an Arrow Function by Using ().
const createUser = (name, age) => ({
    name: name,
    age: age,
    isAdult: age >= 18
});

console.log(createUser("Emma", 22));


//Example 1= Create an object that manages a team of members
const teamManager = {
    teamName: "Code Ninjas",
    members: [],

    addMember(name, role) {
        this.members.push({ name, role });
    },

    removeMember: name => {
        //Problem: `this` won’t work here that's why regular function.
         
        teamManager.members = teamManager.members.filter(member => member.name !== name);
    },

    listMembers() {
        this.members.forEach(member =>
            console.log(`${member.name} is a ${member.role} in ${this.teamName}`)
        );
    }
};

teamManager.addMember("Alice", "Frontend Dev");
teamManager.addMember("Bob", "Backend Dev");
teamManager.listMembers();
teamManager.removeMember("Bob");
teamManager.listMembers();



//Example 2= Scoreboard with Auto update.
const game = {
    players: [
        { name: "Player 1", score: 0 },
        { name: "Player 2", score: 0 },
    ],

    startGame() {
        setInterval(() => {
            this.players.forEach(player => {
                player.score += Math.floor(Math.random() * 10);
            });
            console.log(this.players);
        }, 2000);
    }
};

// game.startGame();




//Example 3=Filter a list of user objects based on a dynamic key and value using an arrow function.
const userList = {
    users: [
        { name: "Alice", role: "admin" },
        { name: "Bob", role: "user" },
        { name: "Eve", role: "user" },
        { name: "Charlie", role: "admin" }
    ],

    filterUsers: (key, value) => userList.users.filter(user => user[key] === value)
};

console.log(userList.filterUsers("role", "admin"));   //return jo user ka key=role and value=admin .



//Example 4=Make an object where you can chain calls.
const calculator = {
    value: 0,

    add: function (num) {
        this.value += num;
        return this;
    },

    subtract: function (num) {
        this.value -= num;
        return this;
    },

    multiply: num => {
        //arrow function `this` wil not work
      
        calculator.value *= num;
        return calculator;
    },

    result() {
        console.log("Result:", this.value);
        return this;
    }
};

calculator.add(10).subtract(3).multiply(2).result();   //  output=(0+10)=(10-3)=(7*2)= 14


 


