let fruits=["apple","banana"]; //to know the length of an array
let newlength=fruits.push("cherry");
console.log(newlength)

//QUE-1: Reverse the array using pop and push
let arr=[1,2,3,4,5]
let rev= []
while (arr.length > 0){
    rev.push(arr.pop())
}
console.log(rev) //5,4,3,2,1

//QUE-2:remove all negative integer from an array
let a=[1,2,3,-4,-5,-6]
let b=[]
while(a.length > 0){
    let val=a.shift();
    if(val>0){
        b.push(val);
    }
}
console.log(b)

//QUE-3:check whether given array is pallindrome or not
function palidrome(){
let d=[1,2,3,2,1];
let original=[]
let reverse=[]

for (let i=0;i<d.length;i++){
    original.push(arr[i]);
}
while (d.length > 0){
    reverse.push(d.pop())
}
for(i=0;i<d.length;i++){
    if(original[i] !== reverse[i]){
        return "not a palidrome"
    }
        return "yes a palidrome"
}
console.log(palindrome())
}

//QUE-4: Remove all duplicate elements from the array.
//QUE-5: split even and odd numbers from a given array
//QUE-6: move all zeros to the end