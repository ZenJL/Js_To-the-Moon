// 2/ Finding all the occurrences of an element 
// const array = ['a', 'b', 'a', 'c', 'a', 'd'];
// const element = ‘a’
// // output: [0, 2, 4]

const array = ['a', 'b', 'a', 'c', 'a', 'd'];
const element = 'a';
const outputArray = [];
// for (const item of array) {
//     // console.log (item);
//     if (item === element) {
//         outputArray.push(array.indexOf(item,temp));
//     }
// }
for (let i=0; i < array.length; i++) {
    // console.log(array[i]);
    if (array[i] === element) {
        outputArray.push(i);
        // console.log(array[i]);
    }
}
console.log ('kqbt1: __________');
console.log (outputArray);

//____________________________________________________________


// reduce()
// 1/ Sum of values in an object array
// const array = [{x: 1}, {x: 2}, {x: 3}]
// // output: 6

const array1 = [{x: 1}, {x: 2}, {x: 3}];
const outputBt2 = array1.reduce (function(accu, current) {
    accu += current.x;
    return accu;
}, 0)
console.log('kqbt2: __________');
console.log (outputBt2);

//____________________________________________________________


// 2/ Flatten an array of arrays
// const array = [[0, 1], [2, 3], [4, 5]]
// // output: [0, 1, 2, 3, 4, 5]

const array3 = [[0, 1], [2, 3], [4, 5]]
const outputBt3 = array3.reduce (function(accu, current) {
    // console.log('test');
    // console.log (accu, current);
    for (const element of current) {
        accu.push (element);
    }
    // accu.push(for (element of array3) {});
    return accu;
}, [])
console.log('kqbt3: __________');
console.log (outputBt3);

//____________________________________________________________


// 3/ Counting instances of values in an object
// const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
// // output: { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

// hướng nghĩ: 
//1/ đem element so hết 1 lượt trong array ==> sẽ ra số element có trong array và số lần xuất hiện của mỗi element

//2/ phải dùng reduce:
// kq là {} => tạo key object = element trong array rồi gán cho key value =1 ==> viết đk nếu key lặp

const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
const objectRong = {};
const outputBt4 = names.reduce (function (accu, current) {
    console.log (accu, current);
    
    objectRong[current]
    // let count=1;
    // accu[current] = count;
    // console.log (objectRong);
    // if (objectRong[current] === current) {
    //     objectRong[current] = count+1;
    // }
    
    return accu;
}, objectRong)

console.log('kqbt4: __________');
console.log (outputBt4);


//____________________________________________________________

// console.log ('______________________+++++++++++++++');
const people = [
    {name: 'Alice', age: 21},
    {name: 'Max', age: 20},
    {name: 'Jane', age: 20},
];

// // output groupedPeople by age is: 
// // {
// //     20: [
// //         {name: 'Max', age: 20},
// //         {name: 'Jane', age: 20}
// //     ],
// //     21: [{name: 'Alice', age: 21}]
// // }

const mang= [];
const outputBt5 = people.reduce (function (accu, current) {
    console.log (accu, current);
    accu[current.age] = 
    // mang.push (current);
    [
        current
        // accu[current.age].push (current)
        // ([accu.age] === current.age) ? current : 0
        // (current.age === accu[current.age] ? accu[current.age].push(current) : current) 
    ];
    return accu;
}, {})

console.log('kqbt5: __________');
console.log (outputBt5);


//____________________________________________________________

const input = [
    {name: 'A', quantity: 2, unitPrice: 100},
    {name: 'B', quantity: 3, unitPrice: 500},
    {name: 'C', quantity: 7, unitPrice: 100},
    {name: 'D', quantity: 4, unitPrice: 1200}
];

// output = {A:200, B: 1500, C: 700, D: 4800}

const outputBt6 = input.reduce ((accu, current) => {
    accu[current.name] = Number(current.quantity * current.unitPrice);
    return accu;
}, {})


console.log('kqbt6: __________');
console.log (outputBt6);


//____________________________________________________________


// 6/ Remove duplicate items in an array

const myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
let element;
// //output [‘a’, ‘b’, ‘c’, ‘e’, ‘d’]

const outputBt7 = myArray.reduce ((accu, current) => {
    // for (element in accu) {
    //     (element === current) ? 0 : accu +=current
    // }
    // (current === accu) ? 0 : [current];
    for (element of accu) {
        (element !== current) ? accu += current + ' ' : 0;
    }
    return accu;
}, [])


console.log('kqbt7: __________');
console.log (outputBt7);