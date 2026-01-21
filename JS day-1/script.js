// TDZ:when we declare the variable with llet and const without its proper initialization then the variable lies in temperal dead zone until proper initialisation
//take an array with length 10 and put 10 different student marks in btw 0 to 40 and check which are fail or pass
let marks = [35, 12, 28, 40, 15, 22, 9, 30, 18, 5];
let res= marks.filter(x=> {
    if(x>=16){
        console.log(x,"pass")
    }
    else{
        console.log(x,"fail")
    }
});

//take an array using for loop find the sum of all elements in an array
let arr=[10,20,30,40,50,60,70];
let sum=0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}

console.log("Sum of all elements:", sum);

//map applies a callback function to each and every element in an array
let numbers=[1,2,3,4,5];
let doubled= numbers.map(x => x*2); //1,4,9,16,25
console.log("doubled",doubled);

//filter creates a new array when elements satisy conditions 
let scores=[20,30,60,80,90];
let highscore= scores.filter(x=> x =>90);
console.log(highscore,"highscore");

//reduce applies a callback function to an array to a single value
let y=[20,50,60,70];
let add=y.reduce((acc,current)=>acc+current,0);
console.log(add);

//push to an add an element in an array
let fruits=["apple","orange","pineapple"];
let newfruit= fruits.push("cherry");
console.log(newfruit);

//pop remove last element from an array
let t=["apple","orange","pineapple"];
let remove=f.pop();
console.log(remove);

//