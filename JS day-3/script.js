let sentence="I am a comma separated sentence";
let words=sentence.split(" ");
console.log(words)

let sentence1="I am a comma separated sentence";
let words1=sentence1.split("a");
console.log(words1)

//find out the occurance of r in the string.
let str = "tu meri me tera me teri tu mera";
let res = str.split("r");
console.log(res)

//types of function:---
//-------------------------
//regular function
//arrow function
//callback function
//anonymous function
//first class function
//higher order function
//self-invoking function(iife)
//-------------------------------
//javascript is synchrnous and everything in js is object

function demo(){
    console.log("demo")
}
demo()

function sample(a,b){
    return a+b;
}    
console.log(sample(5,10))

//Arrow function//
// advantage: doesn't need return and function keyword and it will perform asynchronously.
//const test=(c,d)=> c+d;
//console.log(test(4,6))   

const test = (c,d)=>{
    return c+d
};
console.log(test(4,6))

//anonymous function
let arr=[1,2,3,4,5]
let res1=arr.map(function(x){
    return x+2
})
console.log(res1)

setTimeout(()=>{
    alert("please sign in")
},5000)

setInterval(()=>{
    console.log("sign up")
},1000)

let date=new date();
console.log(date)
