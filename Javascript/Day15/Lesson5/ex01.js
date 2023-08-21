/*
Input:
Cho trước 3 số a, b, c
Output:
Thực hiện đổi chỗ 3 số a, b, c sao cho 3 số có thứ tự tăng dần
*/
// const a = prompt("Enter number1: ");
// const b = prompt("Enter number2: ");
// const c = prompt("Enter number3: ");

// if (a < b && a < c) {
//   document.write(a);
//   if (b < c) {
//     document.write(b);
//     document.write(c);
//   } else {
//     document.write(c);
//     document.write(b);
//   }
// } else if (b < a && b < c) {
//   document.write(b);
//   if (c < a) {
//     document.write(c);
//     document.write(a);
//   } else {
//     document.write(c);
//     document.write(a);
//   }
// } else {
//   document.write(c);
//   if (a < b) {
//     document.write(a);
//     document.write(b);
//   } else {
//     document.write(b);
//     document.write(a);
//   }
// }

var a= 10;
var b = 5;
var c = 20;

if (a > b) {
    temp = a;
    a = b;
    b = temp;
  }
  if (b > c) {
    temp = b;
    b = c;
    c = temp;
  }
  if (a > b) {
    temp = a;
    a = b;
    b = temp;
  }

console.log(a,b,c);