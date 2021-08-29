const arr1 = ['truong', 'minh', 'long'];

const newArr = [];

for (let i of arr1) {
    let a = {};
    a.id = Math.floor(Math.random() * 100000);
    a.name = (i);
    newArr.push(Object.assign({}, a));
}
console.log (newArr);
