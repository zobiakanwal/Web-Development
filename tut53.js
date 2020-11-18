console.log("Welcome to Console");

let sub1 = 'Maths';
let sub2 = 'English';
let sub3 = 'Computer';
let sub4 = 'Physics';
let greetings = "Hello! Good day.";

function subjects (sub, greet = "Hi! Good day."){
    console.log(greet +" "+ sub + ' is a compulsory subject');
}

subjects(sub1, greetings);
subjects(sub2, greetings);
subjects(sub3);
subjects(sub4, greetings);

function returnFunc(a,b){
    c=a+b;
    return c;
}
returnVal = returnFunc(3,4);
console.log(returnVal);