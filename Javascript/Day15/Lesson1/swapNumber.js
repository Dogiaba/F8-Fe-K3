// Output: Thực hiện hoán vị 2 số không dùng biến trung gian

//input number
var a = prompt('Enter the first number: ');
var b = prompt('Enter the second number: ');

[a , b] = [b , a];

console.log(`After swapping a: ${a}`);
console.log(`After swapping b: ${b}`);