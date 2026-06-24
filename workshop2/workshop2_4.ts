let score: number[] = [85, 92, 78, 90, 88];
let std_Data: [number, string] = [684245065, "Anukul Thapha"];
let TotalScore: number = 0;

console.log(`Score: ${score}`);
console.log(`Student ID: ${std_Data[0]}, Name: ${std_Data[1]}`);
for (let i = 0; i < scores.legth; i++){
    console.log(`Test: ${i + 1} score: ${score[i]}`);
    TotalScore += scores[i];
}
console.log(`Total Score: ${TtalScore}`);
console.log(`Average Score: ${TotalScore / score.length}`);