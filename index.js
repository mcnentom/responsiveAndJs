const randomNo = Math.floor(Math.random()*10)+1;
const guessedNo = prompt("Guess a number between 1 and 10:");

if(guessedNo == randomNo){
    console.log("Good work"); 
}else{
    console.log("Not Matched");
}

const studentMarks = (examType, totalMarks) =>{
    if(examType == 'final' && totalMarks >= 90){
        return true;
    }else if( examType != 'final' && totalMarks >=89 && totalMarks<=100){
        return true;
    }else{
        return false;
    }
}

let examType = 'final';
let totalMarks = 89;
console.log(studentMarks(examType,totalMarks));

let obj = {};
obj[1] = 'One';
obj['1'] = 'String One';
console.log(obj[1]);
console.log(obj['1']);
console.log(obj[1] === obj['1']);

// outputs true since obj[1] references to a string one same as obj['1']
// hence  they have same data type as strings 
