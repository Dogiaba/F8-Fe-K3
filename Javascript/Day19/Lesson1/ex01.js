var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

const filteredArray = arrA.filter((value) => arrB.includes(value));
console.log(`Kết quả giao giữa hai chuỗi: [${filteredArray}]`);