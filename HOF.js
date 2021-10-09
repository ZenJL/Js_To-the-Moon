// bt HOF
const grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'},
];



let total = 0;
const sum = (init, number) => init+= number;
const avg = (number, length) => number / length;

const genderFemale = string => string.toLowerCase() === 'f';
const genderMale = string => string.toLowerCase() === 'm';

// 1) tìm thứ hạng tb của cả lớp
for(let i=0; i < grades.length; i++) {
    total = sum(total, grades[i].grade);
};
// console.log('u need: ', total);
// console.log('u need: ', grades.length);
console.log('1) avgGrade: ', avg(total, grades.length));


// 2) tìm thứ hạng tb của nam trong lớp
let maleTotal = 0;
let maleCount = 0;

for(let i=0; i < grades.length; i++) {
    if(genderMale(grades[i].sex)) {
        maleCount++;
        maleTotal = sum(maleTotal, grades[i].grade);
    };
};

// console.log('u need: ', maleCount);
// console.log('u need: ', maleTotal);
console.log('2) maleAvgGrade: ', avg(maleTotal, maleCount));


// 3) tìm thứ hạng tb của nữ trong lớp
let femaleTotal = 0;
let femaleCount = 0;

for(let i=0; i < grades.length; i++) {
    if(genderFemale(grades[i].sex)) {
        femaleCount++;
        femaleTotal = sum(femaleTotal, grades[i].grade);
    };
};

// console.log('count u need: ', femaleCount);
// console.log('total u need: ', femaleTotal);
console.log('3) femaleAvgGrade: ', avg(femaleTotal, femaleCount));


// 4) tìm thứ hạng cao nhất của nam trong lớp
const findIndexMale = grades.findIndex(value => genderMale(value.sex));
// console.log('u need: ', findIndexMale);
let maleMaxValue = grades[findIndexMale].grade;
// console.log('u need: ', maleMaxValue);

for(let i=0; i < grades.length; i++) {
    if(genderMale(grades[i].sex)) {
        if(grades[i].grade > maleMaxValue)
        maleMaxValue = grades[i].grade;
    };
};
console.log('4) maleMaxValue: ', maleMaxValue);


// 5) tìm thứ hạng cao nhất của nữ trong lớp
const findIndexFemale = grades.findIndex(value => genderFemale(value.sex));
// console.log('u need?: ', findIndexFemale);
let femaleMaxValue = grades[findIndexFemale].grade;
// console.log('u need: ', femaleMaxValue);

for(let i=0; i < grades.length; i++) {
    if(genderFemale(grades[i].sex)) {
        if(grades[i].grade > maleMaxValue)
        femaleMaxValue = grades[i].grade;
    };
};
console.log('5) femaleMaxValue: ', femaleMaxValue);


// 6) tìm thứ hạng thấp nhất của nam trong lớp
let maleMinValue = grades[findIndexMale].grade;
// console.log('u need: ', maleMaxValue);

for(let i=0; i < grades.length; i++) {
    if(genderMale(grades[i].sex)) {
        if(grades[i].grade < maleMinValue)
        maleMinValue = grades[i].grade;
    };
};
console.log('6) maleMinValue: ', maleMinValue);

// 7) tìm thứ hạng thấp nhất của nữ trong lớp
let femaleMinValue = grades[findIndexFemale].grade;
// console.log('u need: ', femaleMaxValue);

for(let i=0; i < grades.length; i++) {
    if(genderFemale(grades[i].sex)) {
        if(grades[i].grade < femaleMinValue)
        femaleMinValue = grades[i].grade;
    };
};
console.log('7) femaleMinValue: ', femaleMinValue);

// 8) tìm thứ hạng cao nhất của cả lớp
let maxGrade = Number.NEGATIVE_INFINITY;
// console.log(maxGrade);
// console.log(-9999999 > maxGrade)

// for(let i=0; i < grades.length; i++) {
//     if(grades[i].grade > maxGrade) {
//         maxGrade = grades[i].grade;
//     };
// };

for(let element of grades) {
    if(element.grade > maxGrade) {
        maxGrade = element.grade;
    };
}
console.log('8) MaxValue: ', maxGrade);
// 9) tìm thứ hạng thấp nhất của cả lớp
let minGrade = Number.POSITIVE_INFINITY;

for(let element of grades) {
    if(element.grade < minGrade) {
        minGrade = element.grade;
    };
}
console.log('9) MaxValue: ', minGrade);

// node HOF.js
