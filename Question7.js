//Array ka questions
//Question --> For a given array with marks of student [85,97,44,37,76,60].Find the average marks of the entire class.

let marks = [85,97,44,37,76,60];

let sum = 0;

for (let val of marks)
{
  sum += val;
}
let avg = sum/marks.length;
console.log(`Average marks of the class = ${avg}`);