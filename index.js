// check weather it is multiple of 5 or not 

let nume = prompt("enter a number");
if (nume % 5 === 0){
    console.log(nume , "is muptiple of 5");
}
else{
    console.log(nume , "is not a multiple of 5");
}

// check the grades of the student 

let score = prompt("enter the score");
let grade;

if (score >= 90 && score <= 100){
    grade = "A";
}
else if (score >= 70 && score <= 89){
    grade = "B";
}
else if (score >= 60 && score <= 69){
    grade = "C";
}
else if (score >= 50 && score <= 59){
    grade = "D";
}
else if (score >= 0 && score <= 49){
    grade = "F";
}

console.log("According to youe score your grade is ", grade);