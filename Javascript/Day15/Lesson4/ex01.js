/*
Input:
Cho trước 2 số a, b

Output:
Kiểm tra 2 số cùng dấu hay không và hiển thị kết quả ra màn hình
*/ 

const a= prompt("Enter number1: ") ;
const b= prompt("Enter number2: ") ;

var c =((a > 0 && b > 0) || (a <0 && b<0))?"same sign":"not same sign";
console.log(`${c}`);
