var a = 10;
console.log(a)
function demo(){
    let b=20;
    console.log(b);
}
demo()

let user ={
 FullName: "Kirtika Khowal",
 address: "Delhi",
 mobileno: 3456463258,
 favcolor: ["Purple", "Green", "Silver"]
 }
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
//entries return key values in form of arrays

const car ={
    make: "Mahindra",
    model: "Thar"
};
//Object.freeze(car);

car.color = "Blue"; //This property is not added when freeze is used.
console.log(car);

//Object.seal(car);
car.model = "XEV9E"
car.color = "Blue"; //This property addition is ignored