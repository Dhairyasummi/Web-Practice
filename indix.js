const prod = {
    prodName : "Ferrari",
    rating : 4.5,
    offer : 5,
    price : 1000000000,
}

let a = 5;
let b = 10;

let cond1 = a > b;
let cond2 = a == 5;
console.log("cond 1 && cond2" , cond1 && cond2);
console.log("A+B" , a + b);
console.log("A-B" , a - b);
console.log("A*B" , a * b);
console.log("A/B" , a / b);
console.log("A**B" , a ** b);
console.log("A%B" , a % b);

let c = 5;
console.log("c++" , c++);
console.log("++c" , ++c);

let d = 5;
let e = "5";
console.log("d == e" , d == e);  //true
console.log("d == e" , d === e); //false


console.log(prod);
console.log(typeof prod);
console.log(typeof prod["prodName"]);

let age = 16;                                        // if statement
if(age >= 18){ 
    console.log("You cann vote");
}
if (age <= 18){
    console.log("You cannot vote");
}

let num = 20;                                        // else statement
if(num % 2 === 0){
    console.log(num , "is even");
}
else{
    console.log(num , "is odd");
}

let mode = "silver";                                    // else if statement
let color;
if (mode ==="dark"){
    color = "black";
}
else if (mode = "blue"){
    color = "blue"
}
else if (mode = "pink"){
    color = "pink"
}
else {
    color = "white";
}
console.log(color);

let agee = 23;                                                // ternary operator
age >= 18 ? console.log("Adult") : console.log("Not Adult");

alert ("hello");
let maine = prompt("hello");
console.log(maine);

