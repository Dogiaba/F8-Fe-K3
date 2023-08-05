/*Input:
Cho trước 3 số a, b, c

Output:
Tìm số lớn nhất trong 3 số và hiển thị kết quả
*/ 

const number1 = 5;
const number2 = 10;
const number3 = 2;
let largest;

if(number1 >= number2 && number1 >= number3){
    largest = number1;
}else if(number2 >= number1 && number2 >= number3){
    largest = number2;
}else{
    largest = number3;
}

console.log(`The largest number: ${largest}`);