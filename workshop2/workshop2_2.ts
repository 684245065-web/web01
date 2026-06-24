let score: number = 86;
let grade: string;

if (score < 0 || score >100){
    console.log("Invalid scores: The score must be between 0 to 100.");
} else if (score>= 80 && <= 100 ){
    grade = "A";
    console.log(`Score: ${score},Grade: ${grade}`);
}else if (score >= 70 && score < 80){
    grade ="B";
    console.log(`Score: ${score},Grade: ${grade}`);
} else if (score >= 60 && score < 70){
    grade ="C";
    console.log(`Score: ${score},Grade: ${grade}`);
} else if (score >= 50 && score < 60){
    grade ="D";
    console.log(`Score: ${score},Grade: ${grade}`);
} else if (score < 50 && score >= 0){
    grade = "F";
    console.log(`Score: ${score},Grade: ${grade}`);
}
